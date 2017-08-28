/**
 * Created by stefania on 11/24/16.
 */
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { URLParameter } from "../../../domain/url-parameter";
import { PublicationSearchResults } from "../../../domain/publications-search-results";
import { ContentConnectorService } from "../../../services/content-connector.service";
import { Facet } from "../../../domain/facet";
import { SearchQuery } from "../../../domain/search-query";
import { ContentConnectorStatus } from "../../../domain/content-connector-status";

@Component({
    selector: 'search',
    templateUrl: './search-for-publications.component.html',
    styleUrls:  ['./search-for-publications.component.css'],
})

export class SearchForPublicationsComponent {

    private publicationsSearchForm: FormGroup;
    private errorMessage: string;
    private sub: Subscription;

    private urlParameters: URLParameter[] = [];

    private publicationSearchResults: PublicationSearchResults;

    private foundResults = true;

    private publicationSources: Facet;

    private searching:boolean = true;

    private contentConnectorStatus: ContentConnectorStatus;

    constructor(fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
                private contentConnectorService: ContentConnectorService) {
        this.publicationsSearchForm = fb.group({
            "query": [""],
        });
    }

    ngOnInit() {

        this.sub = this.activatedRoute
            .params
            .subscribe(params => {

                this.contentConnectorService.getContentConnectorStatus().subscribe(
                    contentConnectorStatus => this.contentConnectorStatus = contentConnectorStatus,
                    error => this.handleError('System error retrieving content connector status', <any>error));

                this.searching = true;

                this.urlParameters.splice(0,this.urlParameters.length);
                this.foundResults = true;

                this.publicationSources = null;

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
                //request results from the content connector
                this.contentConnectorService.search(this.urlParameters).subscribe(
                    publicationSearchResults => this.updatePublicationSearchResults(publicationSearchResults),
                    error => this.handleError('System error searching for publications', <any>error));
            });
    }

    updatePublicationSearchResults(publicationSearchResults: PublicationSearchResults) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.searching = false;

        this.publicationSearchResults = publicationSearchResults;

        if(this.publicationSearchResults.totalHits==0)
            this.foundResults = false;

        //update publicationSources
        for(let facet of this.publicationSearchResults.facets) {
            if(facet.field === 'source') {
                this.publicationSources = facet;
            }
        }

        //update form values using URLParameters
        for (let urlParameter of this.urlParameters) {
            if(urlParameter.key === 'query') {
                this.publicationsSearchForm.get('query').setValue(urlParameter.values[0]);
            } else {
                for(let facet of this.publicationSearchResults.facets) {
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

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
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

            if(category==='query') {
                this.publicationsSearchForm.get('query').setValue('');
            }
        }

        this.navigateUsingParameters();
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

        this.router.navigate(['/resourceRegistration/corpus/searchForPublications', map]);
    }

    buildCorpus() {
        this.router.navigate(['/resourceRegistration/corpus/build', this.createMapFromURLParams()]);
    }

    createMapFromURLParams() {

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

        return map;
    }

    // handleError(error) {
    //
    //     this.errorMessage = 'System error searching for publications (Server responded: ' + error + ')';
    // }

    handleError(message: string, error) {
        this.searching = false;
        this.errorMessage = message + ' (Server responded: ' + error + ')';
    }
}