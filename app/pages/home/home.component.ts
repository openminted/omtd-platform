/**
 * Created by stefania on 7/5/16.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchQuery } from "../../domain/search-query";
import { ResourceService } from "../../services/resource.service";
import {
    BaseMetadataRecord, ComponentInfo, CorpusInfo, LanguageDescriptionInfo,
    LexicalConceptualResourceInfo
} from "../../domain/openminted-model";
import { SearchResults } from "../../domain/search-results";
import { ShortResultInfo } from "../../domain/short-resource-info";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { HomePageStats } from "../../domain/home-page-stats";
import { error } from "util";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

    public searchForm: FormGroup;

    private errorMessage: string = null;
    private searchResults: SearchResults<BaseMetadataRecord>;
    shortResultsInfo : ShortResultInfo[] = [];
    private foundResults = true;
    private stats: HomePageStats;

    constructor(fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private resourceService: ResourceService) {
        this.searchForm = fb.group({
            "query": [""],
        });
    }

    ngOnInit() {
        this.resourceService.getLatestResources(3).subscribe(
            searchResults => this.updateLatestResources(searchResults),
            error => this.handleError('System error getting latest resources', <any>error));

        this.resourceService.getStats().subscribe(
            stats => this.stats = stats,
            error => this.handleError('System error getting stats', <any>error));
    }

    updateLatestResources(searchResults: SearchResults<BaseMetadataRecord>) {

        this.errorMessage = null;
        this.searchResults = searchResults;

        this.shortResultsInfo.splice(0,this.shortResultsInfo.length);

        this.searchResults.results.forEach(result => this.shortResultsInfo.push(new ShortResultInfo(result)));

        if(this.shortResultsInfo.length==0)
            this.foundResults = false;
    }

    onSubmit(searchValue: SearchQuery) {
        this.router.navigate(['/search', { query: searchValue.query}]);
    }

    handleError(message: string, error : ErrorObservable) {
        this.errorMessage = message + ' (Server responded: ' + error.error + ')';
    }

    gotoDetail(resourceType : string, id : string) {
        this.router.navigate(['/landingPage/' + resourceType + '/', id]);
    }
}