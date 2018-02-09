/**
 * Created by stefania on 6/12/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { WSJobStatus } from "../domain/ws-job-status";
import { Operation } from "../domain/operation";

@Injectable()
export class WorkflowService {

    private endpoint = process.env.API_ENDPOINT;

    constructor (private http: Http) {
        console.log(this.endpoint);
    }

    private _workflowServiceUrl = this.endpoint + '/request/operation';

    executeJob(corpusId: string, workflowId: string) {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});

        let params = new URLSearchParams();
        // params.append('corpusId','60446e38-ab69-4440-8d8f-a5c744c7d6d2');
        // params.append('workflowId','DGTest1');
        params.append('corpusId', corpusId);
        params.append('applicationId', workflowId);

        return this.http.get(this._workflowServiceUrl + '/executeJob?' + params.toString(), options)
            .map(res => <string> res.text())
            .map(res => res.replace(/\"/g,''))
            .catch(this.handleError);
    }

    getStatus(jobID: string) : Observable<Operation>{

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});

        let params = new URLSearchParams();
        params.append('jobID',jobID);

        return this.http.get(this._workflowServiceUrl + '/' + jobID, options)
            .map(res => <Operation> res.json())
            .catch(this.handleError);

    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = "";
        console.log(error);
        if (error instanceof Response) {
            const body = error.text() || '';
            //const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${body}`;
        } else {
            errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg); // log to console instead
        }
        return Observable.throw(errMsg);
    }
}