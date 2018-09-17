/**
 * Created by stefania on 6/7/17.
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceService } from "../../../services/resource.service";
import { URLParameter } from "../../../domain/url-parameter";
import { Subscription } from "rxjs/Subscription";
import { transform } from "../../../domain/utils";
import { Component as OMTDComponent} from "../../../domain/openminted-model";
import { Corpus as OMTDCorpus} from "../../../domain/openminted-model";
import { WorkflowService } from "../../../services/workflow.service";
import {WSJobStatus} from "../../../domain/ws-job-status";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { Operation } from "../../../domain/operation";


@Component({
    selector: 'run-application',
    templateUrl: './run-application.component.html',
    styleUrls:  ['./run-application.component.css'],
})


export class RunApplicationComponent {

    state: string = 'SELECT';

    errorMessage: string;
    successfulMessage: string;

    sub: Subscription;

    urlParameters: URLParameter[] = [];

    foundResults = true;

    corpus: OMTDCorpus;
    component: OMTDComponent;

    jobId: string;
    intervalId: number = null;

    wsJobStatus: Operation = null;

    isRunning: boolean = false;

    public inputFolder: string = 'fulltext';

    private endpoint = process.env.API_ENDPOINT;

    constructor(private  router: Router,private  activatedRoute: ActivatedRoute,
                private resourceService: ResourceService,private  workflowService: WorkflowService) {
    }

    ngOnInit() {
        this.sub = this.activatedRoute
            .params
            .subscribe(params => {

                this.urlParameters.splice(0,this.urlParameters.length);
                this.foundResults = true;
                this.successfulMessage = null;
                this.errorMessage = null;
                this.wsJobStatus = null;

                for (var obj in params) {
                    if (params.hasOwnProperty(obj)) {
                        var urlParameter: URLParameter = {
                            key: obj,
                            values: params[obj].split(',')
                        };
                        this.urlParameters.push(urlParameter);
                        // console.log(urlParameter);
                    }
                }
                sessionStorage.removeItem('runApplication.input');
                sessionStorage.removeItem('runApplication.application');
                //request selected resources from the registry
                for (let urlParameter of this.urlParameters) {
                    if(urlParameter.key === 'input') {
                        sessionStorage.setItem(urlParameter.key, urlParameter.values[0]);
                        this.resourceService.get<OMTDCorpus>(urlParameter.values[0],'corpus').subscribe(
                            corpus => this.corpus = corpus,
                            error => this.handleError('System error loading input', <any>error),
                            () => this.selectedState());
                    }
                    if(urlParameter.key === 'application') {
                        sessionStorage.setItem(urlParameter.key, urlParameter.values[0]);
                        this.resourceService.get<OMTDComponent>(urlParameter.values[0],'application').subscribe(
                            component => {this.component = component; transform(this.component)},
                            error => this.handleError('System error loading application', <any>error),
                            () => this.selectedState());
                    }
                }
            });
    }

    handleError(message: string, error : ErrorObservable) {
        console.log(error);
        this.errorMessage = message + ' (Server responded: ' + error.error + ')';
        this.state = 'READY';
    }

    selectInput() {

        if(this.corpus)
            sessionStorage.setItem('runApplication.input', this.corpus.metadataHeaderInfo.metadataRecordIdentifier.value);
        if(this.component)
            sessionStorage.setItem('runApplication.application', this.component.metadataHeaderInfo.metadataRecordIdentifier.value);

        this.router.navigate(['/browseCorpora']);
    }

    selectApplication() {

        if(this.corpus)
            sessionStorage.setItem('runApplication.input', this.corpus.metadataHeaderInfo.metadataRecordIdentifier.value);
        if(this.component)
            sessionStorage.setItem('runApplication.application', this.component.metadataHeaderInfo.metadataRecordIdentifier.value);

        this.router.navigate(['/browseApplications']);
    }

    selectedState() {
        this.state = (this.corpus && this.component) ? 'READY' : 'SELECT';
    }

    runApplication() {

        this.successfulMessage = null;
        this.errorMessage = null;
        this.wsJobStatus = null;

        this.isRunning = true;

        let corpusId = this.corpus.metadataHeaderInfo.metadataRecordIdentifier.value;
        let applicationId = this.component.metadataHeaderInfo.metadataRecordIdentifier.value;
        this.workflowService.executeJob(corpusId,applicationId,this.inputFolder).subscribe(
                jobId => {
                    this.jobId = jobId;
                    console.log('jobId', jobId);
                    this.state = 'RUNNING';
                    this.intervalId = window.setInterval(() => {
                        this.workflowService.getStatus(this.jobId).subscribe(
                            res => { this.wsJobStatus=res; this.checkStatus(res) },
                            error => this.handleError('System error getting execution status', <any>error)
                        );
                    },5000)},
                error => this.handleError('System error executing service', error)
            );
    }

    checkStatus(wsJobStatus: Operation) {

        console.log('Status', wsJobStatus);

        if(wsJobStatus.status == 'FINISHED') {
            this.successfulMessage = 'Application run finished successfully';
            this.isRunning = false;
            this.state = 'FINISHED';
            clearInterval(this.intervalId);
        } else if(wsJobStatus.status == 'FAILED') {
            this.errorMessage = `There was a problem running the application. Try again in a while.
            (${wsJobStatus.errors[0].message})`;
            this.isRunning = true;
            this.state = 'READY';
            clearInterval(this.intervalId);
        }
    }

    selectInputFolder(inputVal: string) {
        this.inputFolder = inputVal;
        console.log("Event", this.inputFolder);
    }
}