/**
 * Created by stefania on 9/6/16.
 */
import { Injectable } from "@angular/core";
import { Headers, Http, RequestMethod, RequestOptions, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import {
    BaseMetadataRecord,
    Component as OMTDComponent,
    Corpus as OMTDCorpus,
    LanguageDescription,
    Lexical
} from "../domain/openminted-model";
import { URLParameter } from "../domain/url-parameter";
import { SearchResults } from "../domain/search-results";
import { Resource } from "../domain/resource";
import { EnrichedOperation } from "../domain/operation";
import { MavenComponent } from "../domain/maven-component";
import { GhQueryEncoder } from "../domain/utils";

@Injectable()
export class ResourceService {

    private endpoint = process.env.API_ENDPOINT;

    constructor (private http: Http) {
        console.log(this.endpoint);
    }

    private _searchUrl = this.endpoint + '/request/';
    private _resourcesUrl = this.endpoint + '/request/';
    private _uploadUrl = this.endpoint + '/resources/';
    private _uploadZip = this.endpoint + "/request/corpus/upload";

    private rearangeFacets(results : SearchResults<BaseMetadataRecord>) : SearchResults<BaseMetadataRecord> {
        for(let facet of results.facets) {
            let order=0;
            switch(facet.field) {
                case 'licence' : order = 13; break;
                case 'rights' : order = 12; break;
                case 'lingualityType' : order = 11; break;
                case 'language' : order = 10; break;
                case 'function' : order = 9; break;
                case 'componentDistributionMedium' : order = 8; break;
                case 'processingResourceType' : order = 7; break;
                case 'dataFormat' : order = 6; break;
                case 'annotationType' : order = 5; break;
                case 'keyword' : order = 4; break;
                case 'domain' : order = 3; break;
                case 'framework' : order = 2; break;
                default : order = 0;
            }
            facet['order_'] = order;
        }
        results.facets.sort((l,r)=>r['order_'] - l['order_']);
        return results;
    }

    search(urlParameters: URLSearchParams) {

        if(urlParameters.has('query')) {
            urlParameters.set('keyword',urlParameters.get('query'));
            urlParameters.delete('query');
        }
        let resourceType="";
        if(urlParameters.has('resourceType')) {
            resourceType = urlParameters.get('resourceType');
        }
        let searchUrl = this._searchUrl;
        if(["component","corpus","application"].includes(resourceType)) {
            searchUrl = `${this._searchUrl}${resourceType}/all`;
        }

        return this.http.get(searchUrl,{params : urlParameters})
            .map(res => <SearchResults<BaseMetadataRecord>> res.json())
            .map(res => this.rearangeFacets(res))
            .catch(this.handleError);
    }

    searchForApplications(urlParameters: URLParameter[]) {

        var searchQuery = '';
        var counter = 0;
        for (let urlParameter of urlParameters) {

            if(counter === 0)
                searchQuery += '?';

            if(urlParameter.key === 'query') {
                searchQuery += 'keyword=' + urlParameter.values[0];
            } else {
                var valuesCounter = 0;
                for(let value of urlParameter.values) {
                    if(valuesCounter!=0)
                        searchQuery += '&';
                    searchQuery += urlParameter.key + '=' + value;
                    valuesCounter++;
                }
            }

            if(counter != urlParameters.length-1)
                searchQuery += '&';

            counter++;
        }

        return this.http.get(this._searchUrl + searchQuery)
            .map(res => <SearchResults<BaseMetadataRecord>> res.json())
            .catch(this.handleError);
    }

    searchForCorpora(urlParameters: URLParameter[]) {

        var searchQuery = '';
        var counter = 0;
        for (let urlParameter of urlParameters) {

            if(counter === 0)
                searchQuery += '?';

            if(urlParameter.key === 'query') {
                searchQuery += 'keyword=' + urlParameter.values[0];
            } else {
                var valuesCounter = 0;
                for(let value of urlParameter.values) {
                    if(valuesCounter!=0)
                        searchQuery += '&';
                    searchQuery += urlParameter.key + '=' + value;
                    valuesCounter++;
                }
            }

            if(counter != urlParameters.length-1)
                searchQuery += '&';

            counter++;
        }

        if(urlParameters.length==0) {
            searchQuery += '?resourceType=corpus';
        } else {
            searchQuery += '&resourceType=corpus';
        }

        return this.http.get(this._searchUrl + searchQuery)
            .map(res => <SearchResults<BaseMetadataRecord>> res.json())
            .catch(this.handleError);
    }

    getCorpus(id: string) {
        return this.http.get(this._resourcesUrl + "corpus/" + id)
            .map(res => <OMTDCorpus> res.json())
            .catch(this.handleError);
    }

    getCorpora() {
        return this.http.get(this._resourcesUrl + "corpus/all")
            .map(res => <OMTDCorpus> res.json())
            .catch(this.handleError);
    }

    getComponent(id: string, resourceType : string = 'component') : Observable<OMTDComponent> {
        return this.http.get(`${this._resourcesUrl}${resourceType}/${id}`)
            .map(res => <OMTDComponent> res.json())
            .catch(this.handleError);
    }

    getComponents(resourceType : string = 'component') {
        return this.http.get(`${this._resourcesUrl}${resourceType}/all`)
            .map(res => <OMTDComponent> res.json())
            .catch(this.handleError);
    }

    getMavenComponents(artifactId : string, groupId : string, version : string) {
        let search : URLSearchParams = new URLSearchParams('',new GhQueryEncoder());
        search.set('artifactID',artifactId);
        search.set('groupID',groupId);
        search.set('version',version);
        return this.http.get(this._resourcesUrl + "maven?" + search)
            .map(res => <MavenComponent[]> res.json())
            .catch(this.handleError);
    }

    getLanguageDescription(id: string) {
        return this.http.get(this._resourcesUrl + "language/" + id)
            .map(res => <LanguageDescription> res.json())
            .catch(this.handleError);
    }

    getLexicalConceptual(id: string) {
        return this.http.get(this._resourcesUrl + "lexical/" + id)
            .map(res => <Lexical> res.json())
            .catch(this.handleError);
    }

    getModel(id: string) {
        return this.http.get(this._resourcesUrl + "model/" + id)
            .map(res => <any> res.json())
            .catch(this.handleError);
    }

    getXML(url : string) {
        return this.http.get(url)
            .map(res => <string> JSON.stringify(res.json()))
            .catch(this.handleError);
    }

    registerComponent(component: Resource, resourceType : string = 'component') {

        let headers = new Headers({'Content-Type': 'application/xml'});
        let options = new RequestOptions({
            headers: headers,
            withCredentials: true,
        });
        console.log(JSON.stringify(component));
        return this.http.post(this._searchUrl+resourceType, component, options)
            .catch(this.handleError);
    }

    static removeNulls(obj) : any {
        let aS = JSON.stringify(obj, ResourceService.toServer);
        return JSON.parse(aS, ResourceService.removeNullParser);
    }

    public static toForms(service: any, obj : boolean = true) : any {
        let ret = obj ? {} : [];
        if(service == null) return;
        Object.entries(service).forEach(([name, values]) => {
            let newValues = [];
            if (Array.isArray(values)) {
                if (values.length > 0 && typeof values[0] == 'string')
                    values.forEach(entry => {
                        newValues.push({
                            entry: entry
                        });
                    });
                else {
                    newValues = ResourceService.toForms(values,false);
                }
            } else {
                newValues = typeof values != 'object' ? values : ResourceService.toForms(values);
            }
            ret[name] = newValues;
        });
        return ret;
    }

    public static toServer(key,value) {
        if (key.match(/^\d+$/)) {
            if (typeof value.entry != 'undefined') {
                return value.entry;
            } else {
                return value;
            }
        } else
            return value
    }

    private static removeNullParser(key,value) {
        if(!value) return undefined;
        if (typeof value == 'boolean' || typeof value == "number") return value;
        if (value == "" || value.length == 0 || Object.values(value).length == 0) {
            return undefined;
        } else {
            return value
        }
    }

    uploadCorpus(corpus: OMTDCorpus) {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});
        let corpus_ = ResourceService.removeNulls(corpus);
        console.log(JSON.stringify(corpus_,null,2));
        return this.http.post(this._searchUrl + 'corpus', JSON.stringify(corpus_), options)
            .map(res => res.status)
            .catch(this.handleError);
    }

    uploadResource(resource: OMTDCorpus,resourceType : string) {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});
        let resource_ = ResourceService.removeNulls(resource);
        console.log(JSON.stringify(resource_,null,2));
        return this.http.post(this._searchUrl + resourceType, JSON.stringify(resource_), options)
            .map(res => res.status)
            .catch(this.handleError);
    }

    uploadZip(name : string,file : File) {
        let formBody : FormData = new FormData();
        formBody.append('filename',name);
        formBody.append('file',file);
        return this.http.post(this._uploadZip,formBody)
            .map(res => this.corpusDownloadURL(res.json()))
            .catch(this.handleError);
    }

    uploadComponent(component: OMTDComponent, resourceType : string = 'component') {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});
        let component_ = ResourceService.removeNulls(component);
        console.log(JSON.stringify(component_,null,2));
        return this.http.post(this._searchUrl + resourceType, JSON.stringify(component_), options)
            .map(res => res.status)
            .catch(this.handleError);
    }

    uploadXMLComponent(component: string) {
        let headers = new Headers({'Content-Type': 'application/xml'});
        let options = new RequestOptions({headers: headers, withCredentials : true});
        return this.http.post(this._searchUrl + 'component', component, options)
            .map(res => res.status)
            .catch(this.handleError);
    }

    public corpusDownloadURL(id : string) : string {
        let location = "";
        if ( this._resourcesUrl.startsWith('/') ) {
            location = window.location.protocol + "//" + window.location.host + this._resourcesUrl;
        } else {
            location = this._resourcesUrl;
        }
        console.log(location + 'corpus/download?archiveId=' + id);
        return location + 'corpus/download?archiveId=' + id;
    }

    getMyResources(resourceType : string) {
        return this.http.get(`${this._resourcesUrl}${resourceType}/my`, { withCredentials: true })
            .map(res => <SearchResults<BaseMetadataRecord>> res.json())
            .catch(this.handleError);
    }

    getMyCorpora() {
        return this.http.get(this._resourcesUrl + "corpus/my", { withCredentials: true })
            .map(res => <SearchResults<BaseMetadataRecord>> res.json())
            .catch(this.handleError);
    }

    getMyIncompleteCorpora() {
        return this.http.get(this._resourcesUrl + "incompleteCorpus/my", { withCredentials: true })
            .map(res => <SearchResults<BaseMetadataRecord>> res.json())
            .catch(this.handleError);
    }

    getMyComponents(resourceType : string = 'component') {
        return this.http.get(`${this._resourcesUrl}${resourceType}/my`, { withCredentials: true })
            .map(res => <SearchResults<BaseMetadataRecord>> res.json())
            .catch(this.handleError);
    }

    getMyOperations() {
        return this.http.get(this._resourcesUrl + "operation/my", { withCredentials: true })
            .map(res => <SearchResults<EnrichedOperation>> res.json())
            .catch(this.handleError);
    }

    deleteComponent(component: OMTDComponent,resourceType : string = 'component') {

        let component_ = ResourceService.removeNulls(component);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({
            headers: headers,
            withCredentials: true,
            method: RequestMethod.Delete,
            body: JSON.stringify(component_)
        });
        return this.http.request(this._resourcesUrl + resourceType, options)
            .catch(this.handleError);
    }

    deleteResource(resource : any, resourceType : string) {
        let resource_ = ResourceService.removeNulls(resource);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({
            headers: headers,
            withCredentials: true,
            method: RequestMethod.Delete,
            body: JSON.stringify(resource_)
        });
        return this.http.request(this._resourcesUrl + resourceType, options)
            .catch(this.handleError);
    }

    updateComponent(component: OMTDComponent, resourceType : string = 'component') {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});

        let component_ = ResourceService.removeNulls(component);

        return this.http.put(this._resourcesUrl + resourceType, JSON.stringify(component_), options)
            .map(res => <OMTDComponent> res.json())
            .catch(this.handleError);
    }

    deleteCorpus(corpus: OMTDCorpus) {

        let corpus_ = ResourceService.removeNulls(corpus);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({
            headers: headers,
            withCredentials: true,
            method: RequestMethod.Delete,
            body: JSON.stringify(corpus_)
        });

        return this.http.request(this._resourcesUrl + 'corpus', options)
            .catch(this.handleError);
    }

    updateCorpus(corpus: OMTDCorpus) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true});
        let corpus_ = ResourceService.removeNulls(corpus);
        return this.http.put(this._resourcesUrl + 'corpus', JSON.stringify(corpus_), options)
            .map(res => <OMTDCorpus> res.json())
            .catch(this.handleError);
    }

    getLatestResources(latest: number) {
        return this.http.get(`${this._searchUrl}?orderField=creation_date&order=asc&from=0&quantity=${latest}`)
            .map(res => <SearchResults<BaseMetadataRecord>> res.json())
            .catch(this.handleError);
    }

    registerIncompleteCorpus(corpus: OMTDCorpus) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials : true });
        let corpus_ = ResourceService.removeNulls(corpus);
        console.log(JSON.stringify(corpus_,null,2));
        return this.http.post(this._searchUrl + 'incompleteCorpus', JSON.stringify(corpus_), options)
            .map(res => res.status)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any){
        let errMsg = new OMTDError();
        if (error instanceof Response) {
            const body = error.json() || '';
            errMsg.error = body['error'];
            errMsg.url = body['url'];
            errMsg.status = error.status;
            console.log(body);
        } else {
            errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg); // log to console instead
        }
        return Observable.throw(errMsg);
    }
}

export class OMTDError {
    url : string;
    error : string;
    status : number;
}