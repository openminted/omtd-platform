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

    constructor(private router: Router) {}

    corpusBuilder() {
        this.router.navigate(['/resourceRegistration/corpus/searchForPublications']);
    }

    uploadCorpus() {
        this.router.navigate(['/resourceRegistration/corpus/upload']);
    }
}