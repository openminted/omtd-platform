/**
 * Created by stefania on 1/20/17.
 */
import { Component, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { URLParameter } from "../../../domain/url-parameter";
import { ContentConnectorService } from "../../../services/content-connector.service";
import {
    Corpus as OMTDCorpus,
    ResourceIdentifier,
    ResourceIdentifierSchemeNameEnum
} from "../../../domain/openminted-model";
import { Observable } from "rxjs/Rx";
import { ResourceService } from "../../../services/resource.service";
import { AuthenticationService } from "../../../services/authentication.service";
import { CorpusBuildingState } from "../../../domain/corpus-building-state";
import { ContentConnectorStatus } from "../../../domain/content-connector-status";

@Component({
    selector: 'corpus-builder',
    templateUrl: './corpus-builder.component.html',
    styleUrls : ['../shared/templates/common.css','./corpus-builder.component.css']
})

export class CorpusBuilderComponent implements OnDestroy {

    sub: Subscription;

    urlParameters: URLParameter[] = [];

    gettingCorpusMetadata:boolean = true;
    buildingCorpus:boolean = false;
    callingBuildCorpus:boolean = false;

    min = Math.min;

    corpus: OMTDCorpus;
    
    corpusPromise : Observable<OMTDCorpus>;
    tocValid : boolean;

    corpusForm: FormGroup;

    corpusFormErrorMessage: string = null;

    errorMessage: string = null;
    successfulMessage: string = null;
    createCorpusErrorMessage: string = null;

    status: string = null;

    corpusBuildingStates: CorpusBuildingState[] = [];
    contentConnectorStatus: ContentConnectorStatus;

    intervalId: number = null;

    constructor(private authenticationService : AuthenticationService, private activatedRoute: ActivatedRoute, private router: Router,
                private contentConnectorService: ContentConnectorService, private resourceService: ResourceService) {

    }

    ngOnInit() {

        this.sub = this.activatedRoute
            .params
            .subscribe(params => {

                this.gettingCorpusMetadata = true;
                this.callingBuildCorpus = false;

                this.urlParameters.splice(0,this.urlParameters.length);

                // this.foundResults = true;
                //
                // this.publicationSources = null;

                for (var obj in params) {
                    if (params.hasOwnProperty(obj)) {
                        var urlParameter: URLParameter = {
                            key: obj,
                            values: params[obj].split(',')
                        };
                        this.urlParameters.push(urlParameter);
                    }
                }
                
                //request corpus metadata from the content connector
                // this.contentConnectorService.prepareCorpus(this.urlParameters).subscribe(
                //     corpus => this.loadCorpusMetadata(corpus),
                //     error => this.handleError(<any>error));

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
        this.gettingCorpusMetadata = false;
        this.corpus = corpus;
        console.log('Corpus returned from connector: ', corpus);
    }

    handleCorpus(corpus : any) {
        this.corpusForm = corpus;
    }

    onSubmit() {
        if(!this.authenticationService.isUserLoggedIn) {
            this.authenticationService.loginWithState();
        }
        this.successfulMessage = null;
        this.errorMessage = null;
        this.corpusFormErrorMessage = null;
        this.status = null;
        this.createCorpusErrorMessage = null;

        console.log("Submitted");
        console.log(JSON.stringify(this.corpusForm.value));
        console.log(this.corpusForm);

        if(this.corpusForm.valid && this.tocValid)
            this.corpusFormErrorMessage = null;
        else if (!this.tocValid)
            this.corpusFormErrorMessage = "Please accept the terms and conditions";
        else
            this.corpusFormErrorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';

        if(this.corpusForm.valid && this.tocValid) {

            this.callingBuildCorpus = true;
            let corpusFilled : OMTDCorpus = this.corpusForm.value;
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 40; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            // corpusFilled.metadataHeaderInfo.metadataRecordIdentifier.value=this.corpus.metadataHeaderInfo.metadataRecordIdentifier.value;
            // corpusFilled.metadataHeaderInfo.metadataRecordIdentifier.metadataIdentifierSchemeName = this.corpus.metadataHeaderInfo.metadataRecordIdentifier.metadataIdentifierSchemeName;
            corpusFilled.metadataHeaderInfo = this.corpus.metadataHeaderInfo;
            corpusFilled.corpusInfo.identificationInfo.resourceIdentifiers = [new ResourceIdentifier()];
            corpusFilled.corpusInfo.identificationInfo.resourceIdentifiers[0].value= corpusFilled.corpusInfo.datasetDistributionInfo.distributionLocation;
            corpusFilled.corpusInfo.identificationInfo.resourceIdentifiers[0].resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OTHER;
            corpusFilled.corpusInfo.corpusSubtypeSpecificInfo.rawCorpusInfo.corpusSubtype="rawCorpus";
            corpusFilled.corpusInfo.corpusSubtypeSpecificInfo.rawCorpusInfo.mediaType='text'
            // corpusFilled.corpusInfo.distributionInfos[0].rightsInfo = new RightsInfo();
            // corpusFilled.corpusInfo.distributionInfos[0].rightsInfo.rightsStatement = [RightsStatementEnum.OPEN_ACCESS]

            console.log('Corpus Filled', corpusFilled);
            this.resourceService.registerIncompleteCorpus(corpusFilled).subscribe(
                res =>
                {   console.log('Result from register incomplete corpus', res);
                    this.buildCorpus(corpusFilled)
                },
                error => this.handleError('Corpus building failed', error)
            );



        } else {
            window.scrollTo(0,0);
        }
    }

    buildCorpus(corpusFilled: OMTDCorpus) {

        this.contentConnectorService.buildCorpus(corpusFilled).subscribe(
            res => this.buildingCorpusFn(),
            error => this.handleError('Corpus building failed', error)
        );
    }
    
    buildingCorpusFn() {
        window.scrollTo(0,0);
        this.callingBuildCorpus = false;
        this.buildingCorpus = true;

        this.intervalId = window.setInterval(() => {
            this.contentConnectorService.getStatus(this.corpus.metadataHeaderInfo.metadataRecordIdentifier.value).subscribe(
                res => this.checkStatus(res)
            );
            this.contentConnectorService.getCorpusBuildingState(this.corpusForm.value.metadataHeaderInfo.metadataRecordIdentifier.value).subscribe(
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

    handleError(message: string, error) {
        window.scrollTo(0,0);
        this.callingBuildCorpus = false;
        this.buildingCorpus = false;
        this.errorMessage = message + ' (Server responded: ' + error + ')';
    }

    navigateToCorpus() {
        this.router.navigate(['/landingPage/corpus/', this.corpusForm.value.metadataHeaderInfo.metadataRecordIdentifier.value]);
    }
}