/**
 * Created by stefania on 9/7/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Corpus as OMTDCorpus} from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'corpus-landing-page',
    templateUrl: './corpus-landing-page.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class CorpusLandingPageComponent implements OnInit {

    public corpus: OMTDCorpus;
    public errorMessage: string;
    private sub: Subscription;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.resourceService.get<OMTDCorpus>(id,'corpus').subscribe(
                corpus => this.corpus = corpus,
                error => this.handleError(<any>error));
        });
    }
    
    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    goBack() {
        window.history.back();
    }

    downloadCorpus(url: string) {
        window.open(url, "_blank", "enabledstatus=0,toolbar=0,menubar=0,location=0");
    }

    handleError(error) {
        this.errorMessage = 'System error loading corpus (Server responded: ' + error + ')';
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