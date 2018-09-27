/**
 * Created by stefania on 6/12/17.
 */
import { Injectable, SecurityContext } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { WorkflowDefinition } from "../domain/galaxy-workflow";
import { DomSanitizer } from "@angular/platform-browser";
import { API_ENDPOINT, GALAXY_ENDPOINT } from "../constants";

@Injectable()
export class GalaxyService {

    private galaxyEndpoint = GALAXY_ENDPOINT;

    private registryEndpoint = API_ENDPOINT;

    constructor (private http: Http, private _sanitizer : DomSanitizer) {}

    public get galaxyHost() :string {
        return this.galaxyEndpoint;
    }

    public get registryHost() :string {
        return this.registryEndpoint;
    }

    public createWorkflow() : Observable<WorkflowDefinition> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});
        return this.http.get(`${this.registryHost}/request/workflow/create`, options)
            .map(res => <WorkflowDefinition> res.json())
            .catch(this.handleError);
    }

    public updateWorkflow(workflowId : string) : Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});
        return this.http.get(`${this.registryHost}/request/workflow/update/${workflowId}`, options)
            .catch(this.handleError);
    }

    public restoreWorkflow(omtdId : string) : Observable<WorkflowDefinition> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});
        return this.http.get(`${this.registryHost}/request/workflow/restore/${omtdId}`, options)
            .map( res => <WorkflowDefinition> res.json())
            .catch(this.handleError);
    }

    // update/{workflowId}

    get workflowDefinitionURL() {
        return `${this.registryHost}/request/workflow/`
    }

    public getWorkflowDefinition(id : string) : Observable<WorkflowDefinition> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});
        return this.http.get(`${this.registryHost}/request/workflow/${id}`, options)
            .map(res => <WorkflowDefinition>res.json())
            .catch(this.handleError);
    }

    public workflowURLSanitized(workflowId : string) {
        let url = this._sanitizer.sanitize(SecurityContext.URL, this.getGalaxyUrl(workflowId));
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    public getGalaxyUrl(id : string) : string {
        return `${this.galaxyHost}/workflow/editor?id=${id}`;
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