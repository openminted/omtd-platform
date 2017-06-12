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

@Component({
    selector: 'run-application',
    templateUrl: './run-application.component.html',
    styleUrls:  ['./run-application.component.css'],
})

export class RunApplicationComponent {

    private errorMessage: string;
    private successfulMessage: string;

    private sub: Subscription;

    private urlParameters: URLParameter[] = [];

    private foundResults = true;

    private corpus: OMTDCorpus;
    private component: OMTDComponent;

    private jobId: string;
    private intervalId: number = null;

    private wsJobStatus: WSJobStatus = null;

    private isRunning: boolean = false;

    constructor(private router: Router, private activatedRoute: ActivatedRoute,
                private resourceService: ResourceService, private workflowService: WorkflowService) {

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
                        this.resourceService.getCorpus(btoa(urlParameter.values[0])).subscribe(
                            corpus => this.corpus = corpus,
                            error => this.handleError(<any>error));
                    }
                    if(urlParameter.key === 'application') {
                        sessionStorage.setItem(urlParameter.key, urlParameter.values[0]);
                        this.resourceService.getComponent(btoa(urlParameter.values[0])).subscribe(
                            component => {this.component = component; transform(this.component)},
                            error => this.handleError(<any>error));
                    }
                }
            });
    }

    handleError(error) {
        this.errorMessage = 'System error loading resource (Server responded: ' + error + ')';
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

    runApplication() {

        this.successfulMessage = null;
        this.errorMessage = null;
        this.wsJobStatus = null;

        this.isRunning = true;

        this.workflowService.executeJob(this.corpus.metadataHeaderInfo.metadataRecordIdentifier.value,
            this.component.metadataHeaderInfo.metadataRecordIdentifier.value).subscribe(
                jobId => {
                    this.jobId = jobId;
                    console.log('jobId', jobId);
                    this.intervalId = window.setInterval(() => {
                        this.workflowService.getStatus(this.jobId).subscribe(
                            res => { this.wsJobStatus=res; this.checkStatus(res) },
                            error => this.handleError(<any>error)
                        );
                    },5000)},
                error => this.handleError(<any>error)
            );
    }

    checkStatus(wsJobStatus: WSJobStatus) {

        console.log('Status', wsJobStatus);

        if(wsJobStatus.status == 'FINISHED') {
            this.successfulMessage = 'Application run finished successfully';
            this.isRunning = false;
            clearInterval(this.intervalId);
        } else if(wsJobStatus.status == 'FAILED') {
            this.errorMessage = 'There was a problem running the application. Try again in a while.';
            this.isRunning = true;
            clearInterval(this.intervalId);
        }
    }
}