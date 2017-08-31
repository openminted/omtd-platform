/**
 * Created by stefania on 1/20/17.
 */
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { URLParameter } from "../../../domain/url-parameter";
import { ContentConnectorService } from "../../../services/content-connector.service";
import {
    Corpus as OMTDCorpus, MetadataHeaderInfo, PersonInfo, Name,
    MetadataIdentifier, ResourceIdentifier, ResourceIdentifierSchemeNameEnum,
    RightsInfo, RightsStatementEnum
} from "../../../domain/openminted-model";
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'corpus-builder',
    templateUrl: './corpus-builder.component.html',
    styleUrls : ['../shared/templates/common.css']
})

export class CorpusBuilderComponent {

    private sub: Subscription;

    private urlParameters: URLParameter[] = [];

    private gettingCorpusMetadata:boolean = true;
    private buildingCorpus:boolean = false;
    private callingBuildCorpus:boolean = false;

    private corpus: OMTDCorpus;
    
    private corpusPromise : Observable<OMTDCorpus>;

    corpusForm: FormGroup;

    corpusFormErrorMessage: string = null;

    errorMessage: string = null;
    successfulMessage: string = null;
    createCorpusErrorMessage: string = null;

    status: string = null;

    intervalId: number = null;

    constructor(fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
                private contentConnectorService: ContentConnectorService) {

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

        this.successfulMessage = null;
        this.errorMessage = null;
        this.corpusFormErrorMessage = null;
        this.status = null;
        this.createCorpusErrorMessage = null;

        console.log("Submitted");
        console.log(JSON.stringify(this.corpusForm.value));
        console.log(this.corpusForm);

        if(this.corpusForm.valid)
            this.corpusFormErrorMessage = null;
        else
            this.corpusFormErrorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';

        if(this.corpusForm.valid) {

            this.callingBuildCorpus = true;
            let corpusFilled : OMTDCorpus = this.corpusForm.value;
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 40; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            // corpusFilled.metadataHeaderInfo.metadataRecordIdentifier.value=this.corpus.metadataHeaderInfo.metadataRecordIdentifier.value;
            // corpusFilled.metadataHeaderInfo.metadataRecordIdentifier.metadataIdentifierSchemeName = this.corpus.metadataHeaderInfo.metadataRecordIdentifier.metadataIdentifierSchemeName;
            corpusFilled.corpusInfo.identificationInfo.resourceIdentifiers = [new ResourceIdentifier()];
            corpusFilled.corpusInfo.identificationInfo.resourceIdentifiers[0].value= corpusFilled.corpusInfo.distributionInfos[0].distributionLoc[0].distributionLocation;
            corpusFilled.corpusInfo.identificationInfo.resourceIdentifiers[0].resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OTHER;
            corpusFilled.corpusInfo.corpusSubtypeSpecificInfo.rawCorpusInfo.corpusSubtype="rawCorpus";
            corpusFilled.corpusInfo.corpusSubtypeSpecificInfo.rawCorpusInfo.corpusMediaPartsType.corpusTextParts[0].mediaType='text';
            // corpusFilled.corpusInfo.distributionInfos[0].rightsInfo = new RightsInfo();
            // corpusFilled.corpusInfo.distributionInfos[0].rightsInfo.rightsStatement = [RightsStatementEnum.OPEN_ACCESS]
            console.log(corpusFilled);
            this.contentConnectorService.buildCorpus(corpusFilled).subscribe(
                res => this.buildingCorpusFn(),
                error => this.handleError(error)
            );

        } else {
            window.scrollTo(0,0);
        }
    }
    
    buildingCorpusFn() {
        window.scrollTo(0,0);
        this.callingBuildCorpus = false;
        this.buildingCorpus = true;

        this.intervalId = window.setInterval(() => {
            this.contentConnectorService.getStatus(this.corpusForm.value.metadataHeaderInfo.metadataRecordIdentifier.value).subscribe(
                res => this.checkStatus(res)
            );
        },10000)
    }

    checkStatus(res: string) {
        this.status = res;
        if(this.status == '"CREATED"') {
            this.successfulMessage = 'Corpus building finished successfully';
            clearInterval(this.intervalId);
        } else if(this.status == '"CANCELED"' || this.status == '"DELETED"') {
            this.createCorpusErrorMessage = 'There was a problem building this corpus. Try again in a while.';
            clearInterval(this.intervalId);
        }
    }

    handleError(error) {
        window.scrollTo(0,0);
        this.callingBuildCorpus = false;
        this.buildingCorpus = false;
        this.errorMessage = 'Corpus building failed (Server responded: ' + error + ')';
    }
}