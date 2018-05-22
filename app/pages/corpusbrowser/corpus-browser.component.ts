/**
 * Created by stefania on 23/02/2018.
 */
import { Component, Injector, SecurityContext } from '@angular/core';
import { SearchResults } from "../../domain/search-results";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { ResourceService } from "../../services/resource.service";
import { GhQueryEncoder } from "../../domain/utils";
import { URLParameter } from "../../domain/url-parameter";
import { URLSearchParams } from "@angular/http";
import { PublicationInfo } from "../../domain/publication-info";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { DomSanitizer } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Corpus as OMTDCorpus } from "../../domain/openminted-model";

@Component({
    selector: 'corpus-browser',
    templateUrl: './corpus-browser.component.html',
    styleUrls:  ['./corpus-browser.component.css'],
})
export class CorpusBrowserComponent {

    private _sanitizer;
    private viewerAPI: string = process.env.VIEWER_ENDPOINT;

    public urlToDisplay: string = null;
    // public urlToDisplay: string = 'https://beta.openminted.eu/viewer/#/?archiveId=fd683ad2-75d4-4e3b-9c66-c7725cd7f9fe&documentId=od________18__8941c44f168cdbbc2af67591f8d754e5.pdf';

    corpusContent: Observable<any>;

    errorMessage: string;
    urlParameters: URLParameter[] = [];

    searchResults: SearchResults<PublicationInfo>;

    private corpusId: string;

    public corpus: OMTDCorpus;

    private resourceService: ResourceService;
    private sub: Subscription;

    private pageSize: number = 0;
    private currentPage: number = 0;
    private totalPages: number = 0;

    private isPreviousPageDisabled: boolean = false;
    private isFirstPageDisabled: boolean = false;
    private isNextPageDisabled: boolean = false;
    private isLastPageDisabled: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router, injector : Injector) {
        this.resourceService = injector.get(ResourceService);
        this._sanitizer = injector.get(DomSanitizer);
    }

    ngOnInit() {

        this.sub = this.activatedRoute
            .params.subscribe(params => {

                this.corpusId = params['id'];

                this.urlParameters.splice(0,this.urlParameters.length);

                let searchParams : URLSearchParams = new URLSearchParams('',new GhQueryEncoder());

                let sizeParameter: URLParameter = {
                    key: 'size',
                    values: ['10']
                };
                this.urlParameters.push(sizeParameter);
                searchParams.set(sizeParameter.key,sizeParameter.values[0]);

                // this.foundResults = true;

                for (let obj in params) {
                    if(obj == 'id') continue;
                    if (params.hasOwnProperty(obj)) {
                        let urlParameter: URLParameter = {
                            key: obj,
                            values: params[obj].split(',')
                        };

                        searchParams.set(urlParameter.key,urlParameter.values[0]);
                        this.urlParameters.push(urlParameter);
                        // console.log(urlParameter);
                    }
                }

                this.resourceService.get<OMTDCorpus>(this.corpusId,'corpus').subscribe(
                    corpus => this.corpus = corpus,
                    error => this.handleError(<any>error));

                this.corpusContent = this.resourceService.browseCorpus(this.corpusId, searchParams);

                this.corpusContent.subscribe(
                    searchResults => this.updateBrowseResults(searchResults),
                    error => this.handleError(<any>error));
            });
    }

    updateBrowseResults(searchResults: SearchResults<PublicationInfo>) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.searchResults = searchResults;

        this.isFirstPageDisabled = false;
        this.isPreviousPageDisabled = false;
        this.isLastPageDisabled = false;
        this.isNextPageDisabled = false;

        this.pageSize = 10;
        this.currentPage = (searchResults.from / this.pageSize) + 1;
        this.totalPages = Math.ceil(searchResults.total / this.pageSize);

        if(this.currentPage == 1) {
            this.isFirstPageDisabled = true;
            this.isPreviousPageDisabled = true;
        }

        if(this.currentPage == this.totalPages) {
            this.isLastPageDisabled = true;
            this.isNextPageDisabled = true;
        }
    }

    navigateUsingParameters() {

        var map: { [name: string]: string; } = { };
        for (let urlParameter of this.urlParameters) {
            var concatValue = '';
            var counter = 0;
            for(let value of urlParameter.values) {
                if(counter!=0)
                    concatValue += ',';
                concatValue += value;
                counter++;
            }
            map[urlParameter.key] = concatValue;
        }

        this.router.navigate(['/corpusBrowser', this.corpusId,  map]);
    }

    goToPreviousPage() {

        var from: number = this.searchResults.from;
        var to: number = this.searchResults.to;

        from -= this.pageSize;
        to -= this.pageSize;

        this.updatePagingURLParameters(from);
        this.navigateUsingParameters();
    }

    goToNextPage() {

        var from: number = this.searchResults.from;
        var to: number = this.searchResults.to;

        from += this.pageSize;
        to += this.pageSize;

        this.updatePagingURLParameters(from);
        this.navigateUsingParameters();
    }

    updatePagingURLParameters(from: number) {

        var foundFromCategory = false;

        for (let urlParameter of this.urlParameters) {
            if(urlParameter.key === 'from') {
                foundFromCategory = true;
                urlParameter.values = [];
                urlParameter.values.push(from+'');
            }
        }
        if(!foundFromCategory) {
            var newFromParameter: URLParameter = {
                key: 'from',
                values: [from+'']
            };
            this.urlParameters.push(newFromParameter);
        }
    }

    previewMetadata(metadataURL: string) {
        this.urlToDisplay = this.resourceService.prefix + '/request/corpus/showFile?path=' + metadataURL;
    }

    previewAbstract(abstractURL: string) {
        this.urlToDisplay = this.resourceService.prefix + '/request/corpus/showFile?path=' + abstractURL;
    }

    previewFullText(fulltextURL: string) {
        this.urlToDisplay = this.resourceService.prefix + '/request/corpus/showFile?path=' + fulltextURL;
    }

    previewAnnotations(archiveId: string, publicationId: string) {
        this.urlToDisplay = 'reload';
        setTimeout(() => {this.urlToDisplay = this.viewerAPI + 'archiveId=' + archiveId + '&documentId=' + publicationId + '.pdf';},500);
        console.log(this.urlToDisplay);
    }

    backToCorpus() {
        this.router.navigate(['/landingPage/corpus/', this.corpusId]);
    }

    get iFrameURL() {
        let url = this._sanitizer.sanitize(SecurityContext.URL, this.urlToDisplay);
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    handleError(error : ErrorObservable) {
        this.errorMessage = 'System error browsing corpus (Server responded: ' + error.error + ')';
    }
}