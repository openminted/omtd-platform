/**
 * Created by stefania on 8/31/17.
 */
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Corpus as OMTDCorpus } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { SearchResults } from "../../../domain/search-results";
import { ConfirmationDialogComponent } from "../../../shared/confirmation-dialog.component";
import { Operation } from "../../../domain/operation";

@Component({
    selector: 'my-operations',
    templateUrl: './my-operations.component.html',
    styleUrls:  ['../user-space.component.css'],
})

export class MyOperationsComponent {

    @ViewChild('deleteConfirmationModal')
    public deleteConfirmationModal : ConfirmationDialogComponent;

    public searchResults: SearchResults<Operation>;
    public operations: Operation[] = [];
    public errorMessage: string;
    public successMessage: string;

    private pageSize: number = 0;
    private currentPage: number = 0;
    private totalPages: number = 0;

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

        this.resourceService.getMyCorpora().subscribe(
            searchResults => this.updateMyOperations(searchResults),
            error => this.handleError('System error retrieving user operations', <any>error));
    }

    updateMyOperations(searchResults: SearchResults<Operation>) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.searchResults = searchResults;

        this.isFirstPageDisabled = false;
        this.isPreviousPageDisabled = false;
        this.isLastPageDisabled = false;
        this.isNextPageDisabled = false;

        this.operations.length = 0;

        for (let operation of this.searchResults.results) {
            this.operations.push(<Operation> operation.resource);
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

    goToDetails(corpus: OMTDCorpus) {
        this.router.navigate(['/landingPage/corpus/', corpus.metadataHeaderInfo.metadataRecordIdentifier.value]);
    }

    editCorpus(corpus: OMTDCorpus) {

    }

    deleteConfirmationCorpus(corpus: OMTDCorpus) {

        this.errorMessage = null;
        this.successMessage = null;

        this.deleteConfirmationModal.ids = [corpus.metadataHeaderInfo.metadataRecordIdentifier.value];
        this.deleteConfirmationModal.showModal();
    }

    // confirmedDeleteCorpus(ids: string[]) {
    //
    //     let id = ids[0];
    //     let operations = this.operations.filter(corpus => corpus.metadataHeaderInfo.metadataRecordIdentifier.value === id);
    //
    //     if(corpora && corpora.length == 1) {
    //
    //         let corpus = corpora[0];
    //
    //         this.resourceService.deleteCorpus(corpus).subscribe(
    //             _ => this.deleteCorpus(id),
    //             error => this.handleError('System error deleting the selected corpus', <any>error)
    //         );
    //
    //     } else {
    //         this.errorMessage = 'Error finding the corpus to delete';
    //     }
    // }

    // deleteCorpus(id: string) {
    //
    //     let i : number = this.corpora.findIndex(_ => _.metadataHeaderInfo.metadataRecordIdentifier.value == id);
    //     this.corpora.splice(i, 1);
    //
    //     this.successMessage = `Corpus was deleted successfully`;
    // }

    // updateCorpus(corpus: OMTDCorpus) {
    //
    //     let i : number = this.corpora.findIndex(_ => _.metadataHeaderInfo.metadataRecordIdentifier.value == corpus.metadataHeaderInfo.metadataRecordIdentifier.value);
    //     this.corpora[i] = corpus;
    //
    //     this.successMessage = `Corpus made public successfully`;
    // }
}