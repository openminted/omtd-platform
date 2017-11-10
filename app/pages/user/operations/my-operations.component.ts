/**
 * Created by stefania on 8/31/17.
 */
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseMetadataRecord, Corpus as OMTDCorpus, Component as OMTDComponent } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { SearchResults, SearchResultsNew } from "../../../domain/search-results";
import { ConfirmationDialogComponent } from "../../../shared/confirmation-dialog.component";
import { EnrichedOperation } from "../../../domain/operation";

@Component({
    selector: 'my-operations',
    templateUrl: './my-operations.component.html',
    styleUrls:  ['../user-space.component.css'],
})

export class MyOperationsComponent {

    @ViewChild('deleteConfirmationModal')
    public deleteConfirmationModal : ConfirmationDialogComponent;

    public searchResults: SearchResultsNew<EnrichedOperation>;
    public operations: EnrichedOperation[] = [];
    public errorMessage: string;
    public successMessage: string;

    private pageSize: number = 0;
    private currentPage: number = 0;
    private totalPages: number = 0;

    isModalShown : boolean;

    private isPreviousPageDisabled: boolean = false;
    private isFirstPageDisabled: boolean = false;
    private isNextPageDisabled: boolean = false;
    private isLastPageDisabled: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.errorMessage = null;
        this.successMessage = null;

        this.resourceService.getMyOperations().subscribe(
            searchResults => this.updateMyOperations(searchResults),
            error => this.handleError('System error retrieving user operations', <any>error));
    }

    updateMyOperations(searchResults: SearchResultsNew<EnrichedOperation>) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.searchResults = searchResults;

        this.isFirstPageDisabled = false;
        this.isPreviousPageDisabled = false;
        this.isLastPageDisabled = false;
        this.isNextPageDisabled = false;

        this.operations.length = 0;

        for (let operation of this.searchResults.results) {
            this.operations.push(<EnrichedOperation> operation);
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

    handleError(message: string, error) {
        this.errorMessage = message + ' (Server responded: ' + error + ')';
    }

    gotoDetail(resourceType: string, id: string) {
        this.router.navigate(['/landingPage/' + resourceType + '/', id]);
    }

    toCorpus(data : BaseMetadataRecord) : OMTDCorpus {
        return data as OMTDCorpus;
    }

    toComponent(data : BaseMetadataRecord) : OMTDComponent {
        return data as OMTDComponent;
    }
}