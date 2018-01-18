/**
 * Created by stefania on 7/6/17.
 */
import { Component, Injector } from '@angular/core';
import { BaseMetadataRecord, Corpus as OMTDCorpus } from "../../../domain/openminted-model";
import { SearchResults } from "../../../domain/search-results";
import { Observable } from "rxjs/Observable";
import { ContentConnectorService } from "../../../services/content-connector.service";
import { MyResourceComponent } from "../my-resource.component";

@Component({
    selector: 'my-corpora',
    templateUrl: './my-corpora.component.html',
    styleUrls:  ['../user-space.component.css'],
})
export class MyCorporaComponent extends MyResourceComponent<OMTDCorpus> {


    public incompleteCorporaSearchResults: SearchResults<BaseMetadataRecord>;
    public corpora: OMTDCorpus[] = [];
    public incompleteCorpora: OMTDCorpus[] = [];

    private corporaStatus: Observable<string>[] = [];

    private contentConnectorService: ContentConnectorService;

    constructor(injector : Injector) {
        super(injector);
        this.contentConnectorService = injector.get(ContentConnectorService);
    }


    ngOnInit() {
        super.ngOnInit();

        this.resourceService.getMyCorpora().subscribe(
            searchResults => this.updateMyResources(searchResults),
            error => this.handleError('System error retrieving user corpora', <any>error));

        this.resourceService.getMyIncompleteCorpora().subscribe(
            incompleteCorporaSearchResults => this.updateMyIncompleteCorpora(incompleteCorporaSearchResults),
            error => this.handleError('System error retrieving user incomplete corpora', <any>error));
    }

    updateMyIncompleteCorpora(incompleteCorporaSearchResults: SearchResults<BaseMetadataRecord>) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.incompleteCorporaSearchResults = incompleteCorporaSearchResults;

        this.incompleteCorpora.length = 0;

        for (let corpus of this.incompleteCorporaSearchResults.results) {
            this.incompleteCorpora.push(<OMTDCorpus> corpus.resource);
            this.corporaStatus.push(this.contentConnectorService.getStatus((corpus.resource as OMTDCorpus).metadataHeaderInfo.metadataRecordIdentifier.value));
        }
    }

}