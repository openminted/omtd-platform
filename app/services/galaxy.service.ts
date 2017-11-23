/**
 * Created by stefania on 6/12/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GalaxyService {

    private galaxyEndpoint = process.env.GALAXY_ENDPOINT;

    private registryEndpoint = process.env.API_ENDPOINT;

    constructor (private http: Http) {}

    public get galaxyHost() :string {
        return this.galaxyEndpoint;
    }

    public get registryHost() :string {
        return this.registryEndpoint;
    }

    public createWorkflow() : Observable<string> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});
        return this.http.get(`${this.registryHost}/request/workflow/create`, options)
            .map(res => <string> res.json())
            .catch(this.handleError);
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