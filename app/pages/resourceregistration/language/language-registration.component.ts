/**
 * Created by stefania on 10/6/16.
 */
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'language-registration-options',
    templateUrl: './language-registration.component.html',
    styleUrls: ['./language-registration.component.css'],
})

export class LanguageRegistrationComponent {

    activeTab;

    constructor(private router: Router) {}


    registerUsingXML() {
        this.router.navigate(['/resourceRegistration/language/xml']);
    }

    registerUsingForm() {
        this.router.navigate(['/resourceRegistration/language/form']);
    }
}
