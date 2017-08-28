/**
 * Created by stefania on 11/24/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { URLParameter } from "../domain/url-parameter";
import { PublicationSearchResults } from "../domain/publications-search-results";
import { Corpus as OMTDCorpus } from "../domain/openminted-model";
import { ResourceService } from "./resource.service";
import { ContentConnectorStatus } from "../domain/content-connector-status";

@Injectable()
export class ContentConnectorService {

    constructor (private http: Http) {}

    private _contentConnectorSearchUrl = process.env.CONNECTOR_API_ENDPOINT + '/content/browse/';
    private _contentConnectorPrepareCorpusUrl = process.env.CONNECTOR_API_ENDPOINT + '/corpus/prepare/';
    private _contentConnectorBuildCorpusUrl = process.env.CONNECTOR_API_ENDPOINT + '/corpus/build/';
    private _contentConnectorBuildCorpusStatusUrl = process.env.CONNECTOR_API_ENDPOINT + '/corpus/status/?id=';
    private _contentConnectorStatusUrl = process.env.CONNECTOR_API_ENDPOINT + '/content/status';

    getContentConnectorStatus() {
        return this.http.get(this._contentConnectorStatusUrl)
            .map(res => <ContentConnectorStatus> res.json())
            .catch(this.handleError);
    }

    search(urlParameters: URLParameter[]) {

        var body = {};
        body['params'] = {};

        for(let urlParameter of urlParameters) {

            if(urlParameter.key === 'query') {
                body['keyword'] = urlParameter.values[0];
            } else {
                body['params'][urlParameter.key] = urlParameter.values;
            }
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        options.withCredentials = true;
        return this.http.post(this._contentConnectorSearchUrl, JSON.stringify(body), options)
            .map(res => <PublicationSearchResults> res.json())
            .catch(this.handleError);
    }

    prepareCorpus(urlParameters: URLParameter[]) {

        var body = {};
        body['params'] = {};

        for(let urlParameter of urlParameters) {

            if(urlParameter.key === 'query') {
                body['keyword'] = urlParameter.values[0];
            } else {
                body['params'][urlParameter.key] = urlParameter.values;
            }
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        options.withCredentials = true;
        return this.http.post(this._contentConnectorPrepareCorpusUrl, JSON.stringify(body), options)
            .map(res => <OMTDCorpus> res.json())
            .catch(this.handleError).share();
    }

    buildCorpus(corpus: OMTDCorpus) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        options.withCredentials = true;
        ResourceService.removeNulls(corpus);
        return this.http.post(this._contentConnectorBuildCorpusUrl, JSON.stringify(corpus), options)
            .map(res => res.status)
            .catch(this.handleError);
    }

    getStatus(corpusId: string) {
        return this.http.get(this._contentConnectorBuildCorpusStatusUrl + corpusId)
            .map(res => res.text())
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}