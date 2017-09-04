/**
 * Created by stefania on 7/5/16.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchQuery } from "../../domain/search-query";
import { ResourceService } from "../../services/resource.service";
import { BaseMetadataRecord, ComponentInfo, CorpusInfo } from "../../domain/openminted-model";
import { SearchResults } from "../../domain/search-results";
import { ShortResultInfo } from "../../domain/short-resource-info";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

    public searchForm: FormGroup;

    private errorMessage: string = null;
    private searchResults: SearchResults<BaseMetadataRecord>;
    private shortResultsInfo : ShortResultInfo[] = [];
    private foundResults = true;

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
    }

    updateLatestResources(searchResults: SearchResults<BaseMetadataRecord>) {

        this.errorMessage = null;
        this.searchResults = searchResults;

        this.shortResultsInfo.splice(0,this.shortResultsInfo.length);

        for (let component of this.searchResults.results) {
            let componentBody = component.resource;
            let corpusInfo : CorpusInfo;
            let componentInfo : ComponentInfo;
            let title : string;
            let description : string;
            let resourceType : string;
            let creationDate: Date;
            if (typeof componentBody['corpusInfo'] != 'undefined') {
                corpusInfo = componentBody['corpusInfo'];
                title = corpusInfo.identificationInfo.resourceNames[0].value;
                description = corpusInfo.identificationInfo.descriptions[0].value;
                resourceType = 'corpus';
                creationDate = componentBody.metadataHeaderInfo.metadataCreationDate;
            } else if (typeof componentBody['componentInfo'] != 'undefined') {
                componentInfo = componentBody['componentInfo'];
                title = componentInfo.identificationInfo.resourceNames[0].value;
                description = componentInfo.identificationInfo.descriptions[0].value;
                resourceType = 'component';
                creationDate = componentBody.metadataHeaderInfo.metadataCreationDate;
            }
            let shortResultInfo: ShortResultInfo = {
                // id: component.componentInfo.identificationInfo.identifiers[0].value,
                order: component.order,
                id: componentBody.metadataHeaderInfo.metadataRecordIdentifier.value,
                title: title,
                description: description,
                resourceType: resourceType,
                creationDate: creationDate
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
    }

    onSubmit(searchValue: SearchQuery) {
        this.router.navigate(['/search', { query: searchValue.query}]);
    }

    handleError(message: string, error) {
        this.errorMessage = message + ' (Server responded: ' + error + ')';
    }
}