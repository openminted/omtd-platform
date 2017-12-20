/**
 * Created by stefania on 11/24/16.
 */
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'corpus-registration-options',
    templateUrl: './corpus-registration.component.html',
    styleUrls:  ['./corpus-registration.component.css'],
})

export class CorpusRegistrationComponent {

    activeTab;

    constructor(private router: Router) {}

    corpusBuilder() {
        this.router.navigate(['/resourceRegistration/corpus/searchForPublications']);
    }

    corpusBuilderWithProvider(provider: string) {

        var map: { [name: string]: string; } = { };
        map['source'] = provider;

        this.router.navigate(['/resourceRegistration/corpus/searchForPublications', map]);
    }

    uploadCorpus() {
        this.router.navigate(['/resourceRegistration/corpus/upload']);
    }

    registerUsingXML() {
        this.router.navigate(['/resourceRegistration/corpus/xml']);
    }
}