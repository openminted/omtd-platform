/**
 * Created by stefania on 7/6/17.
 */
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseMetadataRecord, Corpus as OMTDCorpus } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { SearchResults } from "../../../domain/search-results";
import { ConfirmationDialogComponent } from "../../../shared/confirmation-dialog.component";
import {Observable} from "rxjs/Observable";
import {ContentConnectorService} from "../../../services/content-connector.service";

@Component({
    selector: 'my-corpora',
    templateUrl: './my-corpora.component.html',
    styleUrls:  ['../user-space.component.css'],
})

export class MyCorporaComponent {

    @ViewChild('deleteConfirmationModal')
    public deleteConfirmationModal : ConfirmationDialogComponent;

    @ViewChild('makePublicConfirmationModal')
    public makePublicConfirmationModal : ConfirmationDialogComponent;

    public searchResults: SearchResults<BaseMetadataRecord>;
    public incompleteCorporaSearchResults: SearchResults<BaseMetadataRecord>;
    public corpora: OMTDCorpus[] = [];
    public incompleteCorpora: OMTDCorpus[] = [];

    private corporaStatus: Observable<string>[] = [];

    public errorMessage: string;
    public successMessage: string;

    // private pageSize: number = 0;
    // private currentPage: number = 0;
    // private totalPages: number = 0;
    //
    // private isPreviousPageDisabled: boolean = false;
    // private isFirstPageDisabled: boolean = false;
    // private isNextPageDisabled: boolean = false;
    // private isLastPageDisabled: boolean = false;
    //
    // private isPreviousPageDisabled2: boolean = false;
    // private isFirstPageDisabled2: boolean = false;
    // private isNextPageDisabled2: boolean = false;
    // private isLastPageDisabled2: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService,
        private contentConnectorService: ContentConnectorService) {}


    ngOnInit() {

        this.errorMessage = null;
        this.successMessage = null;

        this.resourceService.getMyCorpora().subscribe(
            searchResults => this.updateMyCorpora(searchResults),
            error => this.handleError('System error retrieving user corpora', <any>error));

        this.resourceService.getMyIncompleteCorpora().subscribe(
            incompleteCorporaSearchResults => this.updateMyIncompleteCorpora(incompleteCorporaSearchResults),
            error => this.handleError('System error retrieving user incomplete corpora', <any>error));
    }

    updateMyCorpora(searchResults: SearchResults<BaseMetadataRecord>) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.searchResults = searchResults;

        // this.isFirstPageDisabled = false;
        // this.isPreviousPageDisabled = false;
        // this.isLastPageDisabled = false;
        // this.isNextPageDisabled = false;

        this.corpora.length = 0;

        for (let corpus of this.searchResults.results) {
            this.corpora.push(<OMTDCorpus> corpus.resource);
        }

        // this.pageSize = 10;
        // this.currentPage = (searchResults.from / this.pageSize) + 1;
        // this.totalPages = Math.ceil(searchResults.total / this.pageSize);
        //
        // if(this.currentPage == 1) {
        //     this.isFirstPageDisabled = true;
        //     this.isPreviousPageDisabled = true;
        // }
        //
        // if(this.currentPage == this.totalPages) {
        //     this.isLastPageDisabled = true;
        //     this.isNextPageDisabled = true;
        // }
    }

    updateMyIncompleteCorpora(incompleteCorporaSearchResults: SearchResults<BaseMetadataRecord>) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.incompleteCorporaSearchResults = incompleteCorporaSearchResults;

        // this.isFirstPageDisabled2 = false;
        // this.isPreviousPageDisabled2 = false;
        // this.isLastPageDisabled2 = false;
        // this.isNextPageDisabled2 = false;

        this.incompleteCorpora.length = 0;

        for (let corpus of this.incompleteCorporaSearchResults.results) {
            this.incompleteCorpora.push(<OMTDCorpus> corpus.resource);
            this.corporaStatus.push(this.contentConnectorService.getStatus((corpus.resource as OMTDCorpus).metadataHeaderInfo.metadataRecordIdentifier.value));
        }



        // this.pageSize = 10;
        // this.currentPage = (searchResults.from / this.pageSize) + 1;
        // this.totalPages = Math.ceil(searchResults.total / this.pageSize);
        //
        // if(this.currentPage == 1) {
        //     this.isFirstPageDisabled = true;
        //     this.isPreviousPageDisabled = true;
        // }
        //
        // if(this.currentPage == this.totalPages) {
        //     this.isLastPageDisabled = true;
        //     this.isNextPageDisabled = true;
        // }
    }

    handleError(message: string, error) {
        this.errorMessage = message + ' (Server responded: ' + error + ')';
    }

    goToDetails(corpus: OMTDCorpus) {
        this.router.navigate(['/landingPage/corpus/', corpus.metadataHeaderInfo.metadataRecordIdentifier.value]);
    }

    editCorpus(corpus: OMTDCorpus) {
        this.router.navigate(['/resourceRegistration/corpus/form/edit/', corpus.metadataHeaderInfo.metadataRecordIdentifier.value]);
    }

    deleteConfirmationCorpus(corpus: OMTDCorpus) {

        this.errorMessage = null;
        this.successMessage = null;

        this.deleteConfirmationModal.ids = [corpus.metadataHeaderInfo.metadataRecordIdentifier.value];
        this.deleteConfirmationModal.showModal();
    }

    confirmedDeleteCorpus(ids: string[]) {

        let id = ids[0];
        let corpora = this.corpora.filter(corpus => corpus.metadataHeaderInfo.metadataRecordIdentifier.value === id);

        if(corpora && corpora.length == 1) {

            let corpus = corpora[0];

            this.resourceService.deleteCorpus(corpus).subscribe(
                _ => this.deleteCorpus(id),
                error => this.handleError('System error deleting the selected corpus', <any>error)
            );

        } else {
            this.errorMessage = 'Error finding the corpus to delete';
        }
    }

    makePublicConfirmation(corpus: OMTDCorpus) {

        this.errorMessage = null;
        this.successMessage = null;

        this.makePublicConfirmationModal.ids = [corpus.metadataHeaderInfo.metadataRecordIdentifier.value];
        this.makePublicConfirmationModal.showModal();
    }

    confirmedMakePublicCorpus(ids: string[]) {

        let id = ids[0];
        let corpora = this.corpora.filter(corpus => corpus.metadataHeaderInfo.metadataRecordIdentifier.value === id);

        if(corpora && corpora.length == 1) {

            let corpus = JSON.parse(JSON.stringify(corpora[0]));

            corpus.corpusInfo.identificationInfo.public = true;

            this.resourceService.updateCorpus(corpus).subscribe(
                corpus => this.updateCorpus(corpus),
                error => this.handleError('System error making this corpus public', <any>error)
            );

        } else {
            this.errorMessage = 'Error finding the corpus to make public';
        }
    }

    deleteCorpus(id: string) {

        let i : number = this.corpora.findIndex(_ => _.metadataHeaderInfo.metadataRecordIdentifier.value == id);
        this.corpora.splice(i, 1);

        this.successMessage = `Corpus was deleted successfully`;
    }

    updateCorpus(corpus: OMTDCorpus) {

        let i : number = this.corpora.findIndex(_ => _.metadataHeaderInfo.metadataRecordIdentifier.value == corpus.metadataHeaderInfo.metadataRecordIdentifier.value);
        this.corpora[i] = corpus;

        this.successMessage = `Corpus made public successfully`;
    }
}