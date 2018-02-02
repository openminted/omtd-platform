/**
 * Created by stefania on 02/02/2018.
 */
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'language-description-registration-options',
    templateUrl: './language-description-registration.component.html',
    styleUrls: ['./language-description-registration.component.css'],
})

export class LanguageDescriptionRegistrationComponent {

    activeTab;

    constructor(private router: Router) {}


    registerUsingXML() {
        this.router.navigate(['/resourceRegistration/language/xml']);
    }

    registerUsingForm() {
        this.router.navigate(['/resourceRegistration/language/form']);
    }
}
