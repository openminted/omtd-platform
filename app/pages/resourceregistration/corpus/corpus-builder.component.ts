/**
 * Created by stefania on 1/20/17.
 */
import { Component, Injector, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { URLParameter } from "../../../domain/url-parameter";
import { ContentConnectorService } from "../../../services/content-connector.service";
import {
    Corpus as OMTDCorpus,
    ResourceIdentifier,
    ResourceIdentifierSchemeNameEnum
} from "../../../domain/openminted-model";
import { Observable } from "rxjs/Rx";
import { AuthenticationService } from "../../../services/authentication.service";
import { CorpusBuildingState } from "../../../domain/corpus-building-state";
import { ContentConnectorStatus } from "../../../domain/content-connector-status";
import { CorpusBaseUsingFormComponent } from "./corpus-base-using-form.component";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Component({
    selector: 'corpus-builder',
    templateUrl: './corpus-builder.component.html',
    styleUrls : ['../shared/templates/common.css','./corpus-builder.component.css']
})

export class CorpusBuilderComponent extends CorpusBaseUsingFormComponent implements OnDestroy {

    sub: Subscription;

    urlParameters: URLParameter[] = [];

    buildingCorpus:boolean = false;

    min = Math.min;

    corpus: OMTDCorpus;
    
    corpusPromise : Observable<OMTDCorpus>;

    createCorpusErrorMessage: string = null;

    status: string = null;

    corpusBuildingStates: CorpusBuildingState[] = [];
    contentConnectorStatus: ContentConnectorStatus;

    intervalId: number = null;

    private authenticationService : AuthenticationService;
    private contentConnectorService: ContentConnectorService;

    constructor(injector : Injector) {
        super(injector);
        this.authenticationService = injector.get(AuthenticationService);
        this.contentConnectorService = injector.get(ContentConnectorService);
    }

    ngOnInit() {

        this.sub = this.route
            .params
            .subscribe(params => {
                this.loading = true;

                this.urlParameters.splice(0,this.urlParameters.length);

                for (let obj in params) {
                    if (params.hasOwnProperty(obj)) {
                        let urlParameter: URLParameter = {
                            key: obj,
                            values: params[obj].split(',')
                        };
                        this.urlParameters.push(urlParameter);
                    }
                }

                this.contentConnectorService.getContentConnectorStatus().subscribe(
                    contentConnectorStatus => this.contentConnectorStatus = contentConnectorStatus,
                    error => this.handleError('System error retrieving content connector status', <any>error));

                this.corpusPromise = this.contentConnectorService.prepareCorpus(this.urlParameters);
                this.corpusPromise.subscribe(
                    corpus => this.loadCorpusMetadata(corpus),
                    error => console.log(error));
            });
    }

    loadCorpusMetadata(corpus: OMTDCorpus) {
        this.loading = false;
        let languages = corpus.corpusInfo.corpusSubtypeSpecificInfo.rawCorpusInfo.languages;
        languages.forEach(l => l.language = l.language.toLowerCase());
        this.corpus = corpus;
        this.corpusForm.loadCorpus(corpus);
        console.log('Corpus returned from connector: ', corpus);
    }


    onSubmit() {
        if(!this.authenticationService.isUserLoggedIn) {
            this.authenticationService.loginWithState();
        }
        this.successfulMessage = null;
        this.errorMessage = null;

        this.status = null;
        this.createCorpusErrorMessage = null;

        console.log("Submitted");
        console.log(JSON.stringify(this.corpusForm.formValue));

        if(!this.validate())
            return;

        this.loading = true;
        let corpusFilled : OMTDCorpus = this.corpusForm.formValue;

        corpusFilled.metadataHeaderInfo = this.corpus.metadataHeaderInfo;
        corpusFilled.corpusInfo.datasetDistributionInfo.distributionLocation = this.corpus.corpusInfo.datasetDistributionInfo.distributionLocation;
        corpusFilled.corpusInfo.datasetDistributionInfo.distributionMedium = this.corpus.corpusInfo.datasetDistributionInfo.distributionMedium;
        corpusFilled.corpusInfo.identificationInfo.resourceIdentifiers = this.corpus.corpusInfo.identificationInfo.resourceIdentifiers;
        corpusFilled.corpusInfo.identificationInfo.resourceIdentifiers[0].resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OMTD;
        corpusFilled.corpusInfo.corpusSubtypeSpecificInfo.rawCorpusInfo.corpusSubtype="rawCorpus";
        corpusFilled.corpusInfo.corpusSubtypeSpecificInfo.rawCorpusInfo.mediaType='text';

        console.log('Corpus Filled', corpusFilled);
        this.resourceService.registerIncompleteCorpus(corpusFilled).subscribe(
            res =>
            {   console.log('Result from register incomplete corpus', res);
                this.buildCorpus(corpusFilled)
            },
            error => this.handleError('Corpus building failed', error)
        );

    }

    buildCorpus(corpusFilled: OMTDCorpus) {

        this.contentConnectorService.buildCorpus(corpusFilled).subscribe(
            res => this.buildingCorpusFn(),
            error => this.handleError('Corpus building failed', error)
        );
    }
    
    buildingCorpusFn() {
        window.scrollTo(0,0);
        this.loading = false;
        this.buildingCorpus = true;

        this.intervalId = window.setInterval(() => {
            this.contentConnectorService.getStatus(this.corpus.metadataHeaderInfo.metadataRecordIdentifier.value).subscribe(
                res => this.checkStatus(res)
            );
            this.contentConnectorService.getCorpusBuildingState(this.corpus.metadataHeaderInfo.metadataRecordIdentifier.value).subscribe(
                res => this.corpusBuildingStates = res
            );
        },5000)
    }

    checkStatus(res: string) {
        this.status = res;
        if(this.status == '"CREATED"') {
            this.successfulMessage = 'Corpus building finished successfully.';
            clearInterval(this.intervalId);
        } else if(this.status == '"CANCELED"' || this.status == '"DELETED"') {
            this.createCorpusErrorMessage = 'There was a problem building this corpus. Try again in a while.';
            clearInterval(this.intervalId);
        }
    }
    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }

    handleError(message: string, error : ErrorObservable) {
        super.handleError(message,error);
        this.loading = false;
        this.buildingCorpus = false;
    }

    navigateToCorpus() {
        super.navigateToCorpus(this.corpus.metadataHeaderInfo.metadataRecordIdentifier.value);
    }
}