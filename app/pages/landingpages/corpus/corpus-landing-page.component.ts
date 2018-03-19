/**
 * Created by stefania on 9/7/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
    Corpus as OMTDCorpus, PersonIdentifierSchemeNameEnum,
    RelationTypeEnum
} from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'corpus-landing-page',
    templateUrl: './corpus-landing-page.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class CorpusLandingPageComponent implements OnInit {

    public corpus: OMTDCorpus;
    public originalCorpus: OMTDCorpus = null;
    public errorMessage: string;
    private sub: Subscription;
    private annotatedCorpus : Observable<OMTDCorpus>;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.resourceService.get<OMTDCorpus>(id,'corpus').subscribe(
                corpus => this.corpus = corpus,
                error => this.handleError(<any>error),
                ()=>{
                    if(!this.isRaw) {
                        let rawCorpus = this.corpus.corpusInfo.relations.find(_ => _.relationType.toString() == 'IS_ANNOTATED_VERSION_OF');
                        console.log("finding raw corpus",rawCorpus);
                        let rawId = rawCorpus.relatedResource.resourceIdentifiers[0].value;
                        this.resourceService.get<OMTDCorpus>(rawId,'corpus').subscribe(
                            corpus => this.originalCorpus = corpus,
                            () => console.log("Cannot find original corpus with id " + rawId)
                        )
                    }
                });
        });
    }
    
    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    goBack() {
        window.history.back();
    }

    handleError(error) {
        this.errorMessage = 'System error loading corpus (Server responded: ' + error.error + ')';
    }

    get checkOriginalCorpus() : boolean {
        if(this.originalCorpus == null) {
            return this.isRaw;
        }
        let pub = this.originalCorpus.corpusInfo.identificationInfo.public;
        let owned = this.isOwn_(this.originalCorpus);
        let isGenerated = this.originalCorpus.corpusInfo.corpusSubtypeSpecificInfo.rawCorpusInfo == null;
        console.log(pub,owned,isGenerated);
        return (pub || owned) && !isGenerated;
    }

    get isRaw() : boolean {
        return this.corpus.corpusInfo.corpusSubtypeSpecificInfo.rawCorpusInfo != null;
    }

    get isGenerated() : boolean {
        return this.corpus.metadataHeaderInfo.userQuery != null;
    }

    get isPublic() : boolean {
        return this.corpus.corpusInfo.identificationInfo.public;
    }

    private isOwn_(corpus : OMTDCorpus) : boolean {
        let ownerSub = sessionStorage.getItem('sub');
        if (!ownerSub) return false;
        let isOwner : boolean = false;
       corpus.metadataHeaderInfo.metadataCreators.forEach(creator => {
            let found = creator.personIdentifiers.find(_ => _.value == ownerSub);
            isOwner = isOwner || found != null;
        });
        return isOwner;
    }

    get isOwn() : boolean{
        return this.isOwn_(this.corpus);
    }

    process() {

        sessionStorage.setItem('runApplication.input', this.corpus.metadataHeaderInfo.metadataRecordIdentifier.value);

        var map: { [name: string]: string; } = { };

        if(sessionStorage.getItem('runApplication.input')) {
            map['input'] = sessionStorage.getItem('runApplication.input');
        }
        if(sessionStorage.getItem('runApplication.application')) {
            map['application'] = sessionStorage.getItem('runApplication.application');
        }

        this.router.navigate(['/runApplication', map]);
    }
}