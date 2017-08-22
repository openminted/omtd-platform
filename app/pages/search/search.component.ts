/**
 * Created by stefania on 8/31/16.
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { SearchQuery } from "../../domain/search-query";
import { URLParameter } from "./../../domain/url-parameter";
import { ResourceService } from "../../services/resource.service";
import { SearchResults } from "../../domain/search-results";
import {ShortResultInfo} from "../../domain/short-resource-info";
import {BaseMetadataRecord, ComponentInfo, CorpusInfo, Order} from "../../domain/openminted-model";

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls:  ['./search.component.css'],
})

export class SearchComponent {

    private searchForm: FormGroup;
    private errorMessage: string;
    private sub: Subscription;

    private urlParameters: URLParameter[] = [];
    
    private searchResults: SearchResults;
    private shortResultsInfo : ShortResultInfo[] = [];

    private pageSize: number = 0;
    private currentPage: number = 0;
    private totalPages: number = 0;
    
    private isPreviousPageDisabled: boolean = false;
    private isFirstPageDisabled: boolean = false;
    private isNextPageDisabled: boolean = false;
    private isLastPageDisabled: boolean = false;

    private foundResults = true;

    private advanced: boolean = false;

    constructor(fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
                private resourceService: ResourceService) {
        this.searchForm = fb.group({
            "query": [""],
        });
    }

    ngOnInit() {

        this.sub = this.activatedRoute
            .params
            .subscribe(params => {
                
                this.urlParameters.splice(0,this.urlParameters.length);
                this.foundResults = true;

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

                // console.log(this.urlParameters);
                //request results from the registry
                this.resourceService.search(this.urlParameters).subscribe(
                    searchResults => this.updateSearchResults(searchResults),
                    error => this.handleError(<any>error));
            });
    }
    
    updateSearchResults(searchResults: SearchResults) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.searchResults = searchResults;

        this.isFirstPageDisabled = false;
        this.isPreviousPageDisabled = false;
        this.isLastPageDisabled = false;
        this.isNextPageDisabled = false;

        this.shortResultsInfo.splice(0,this.shortResultsInfo.length);

        for (let component of this.searchResults.results) {
            let componentBody = component.resource;
            let corpusInfo : CorpusInfo;
            let componentInfo : ComponentInfo;
            let title : string;
            let description : string;
            let resourceType : string;
            if (typeof componentBody['corpusInfo'] != 'undefined') {
                corpusInfo = componentBody['corpusInfo']
                title = corpusInfo.identificationInfo.resourceNames[0].value;
                description = corpusInfo.identificationInfo.descriptions[0].value;
                resourceType = 'corpus';
            } else if (typeof componentBody['componentInfo'] != 'undefined') {
                componentInfo = componentBody['componentInfo'];
                title = componentInfo.identificationInfo.resourceNames[0].value;
                description = componentInfo.identificationInfo.descriptions[0].value;
                resourceType = 'component';
            }
            let shortResultInfo: ShortResultInfo = {
                // id: component.componentInfo.identificationInfo.identifiers[0].value,
                order: component.order,
                id: componentBody.metadataHeaderInfo.metadataRecordIdentifier.value,
                title: title,
                description: description,
                resourceType: resourceType
            };
            this.shortResultsInfo.push(shortResultInfo);
        }


        if(this.shortResultsInfo.length==0)
            this.foundResults = false;
        else {
            this.shortResultsInfo.sort((lhs : ShortResultInfo,rhs: ShortResultInfo) => {
                return lhs.order - rhs.order;
            })
        }

        //update form values using URLParameters
        for (let urlParameter of this.urlParameters) {
            if(urlParameter.key === 'query') {
                this.searchForm.get('query').setValue(urlParameter.values[0]);
            } else if(urlParameter.key === 'advanced') {
                if(urlParameter.values[0]=='true')
                    this.advanced = true;
                else
                    this.advanced = false;
            } else {
                for(let facet of this.searchResults.facets) {
                    if(facet.field === urlParameter.key) {
                        //
                        for(let parameterValue of urlParameter.values) {
                            for(let facetValue of facet.values) {
                                if(parameterValue === facetValue.value)
                                    facetValue.isChecked = true;
                            }
                        }
                    }
                }
            }
        }

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

    advancedView() {
        
        this.advanced = true;
        
        var foundAdvancedParameter = false;
        for (let urlParameter of this.urlParameters) {
            if(urlParameter.key === 'advanced') {
                foundAdvancedParameter = true;
                if(urlParameter.values[0] === 'false') {
                    urlParameter.values.splice(0,urlParameter.values.length);
                    urlParameter.values.push('true')
                }
            }
        }
        
        if(!foundAdvancedParameter) {
            var newParameter: URLParameter = {
                key: 'advanced',
                values: ['true']
            };
            this.urlParameters.push(newParameter);
        }
        
        this.navigateUsingParameters();
    }

    simpleView() {

        this.advanced = false;

        var categoryIndex = 0;
        for (let urlParameter of this.urlParameters) {
            if(urlParameter.key === 'advanced') {
                this.urlParameters.splice(categoryIndex, 1);
            }
            categoryIndex ++;
        }

        this.navigateUsingParameters();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSubmit(searchValue: SearchQuery) {

        var foundQuery = false;

        var queryParameterIndex = 0;
        for (let urlParameter of this.urlParameters) {
            if(urlParameter.key === 'query') {
                foundQuery = true;
                if(searchValue.query === '')
                    this.urlParameters.splice(queryParameterIndex, 1);
                else {
                    urlParameter.values.splice(0,urlParameter.values.length);
                    urlParameter.values.push(searchValue.query);
                }

            }
            queryParameterIndex ++;
        }

        if(!foundQuery && searchValue.query != '') {

            var searchQuery: URLParameter = {
                key: 'query',
                values: [searchValue.query]
            };
            this.urlParameters.push(searchQuery);
        }

        this.navigateUsingParameters();
    }

    deselectFacet(category: string, value: string) {

        var categoryIndex = 0;
        for (let urlParameter of this.urlParameters) {
            if(urlParameter.key === category) {
                var valueIndex = urlParameter.values.indexOf(value, 0);
                if (valueIndex > -1) {
                    urlParameter.values.splice(valueIndex, 1);
                    if(urlParameter.values.length == 0) {
                        this.urlParameters.splice(categoryIndex, 1);
                    }
                }
            }
            categoryIndex ++;
        }

        this.navigateUsingParameters();
    }

    onSelection(e, category: string, value: string) {

        if(e.target.checked) {

            // console.log('Selected value \'' + value + '\' from category \'' + category + '\'');

            var foundCategory = false;
            for (let urlParameter of this.urlParameters) {
                if(urlParameter.key === category) {
                    foundCategory = true;
                    urlParameter.values.push(value);
                }
            }
            if(!foundCategory) {
                var newParameter: URLParameter = {
                    key: category,
                    values: [value]
                };
                this.urlParameters.push(newParameter);
            }

        } else {

            // console.log('Deselected value \'' + value + '\' from category \'' + category + '\'');

            var categoryIndex = 0;
            for (let urlParameter of this.urlParameters) {
                if(urlParameter.key === category) {
                    var valueIndex = urlParameter.values.indexOf(value, 0);
                    if (valueIndex > -1) {
                        urlParameter.values.splice(valueIndex, 1);
                        if(urlParameter.values.length == 0) {
                            this.urlParameters.splice(categoryIndex, 1);
                        }
                    }
                }
                categoryIndex ++;
            }
        }
        
        this.navigateUsingParameters();
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

        this.router.navigate(['/search', map]);
    }

    gotoDetail(resourceType: string, id: string) {
        this.router.navigate(['/landingPage/' + resourceType + '/', id]);
    }

    handleError(error) {
        this.errorMessage = 'System error searching for resources (Server responded: ' + error + ')';
    }

    goToFirstPage() {

        var from: number = 0;
        var to: number = 9;

        this.updatePagingURLParameters(from);
        this.navigateUsingParameters();
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

    goToLastPage() {

        var from: number = Math.floor(this.searchResults.total/this.pageSize) * this.pageSize;
        var to: number = this.searchResults.total - 1;

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
}