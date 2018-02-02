/**
 * Created by stefania on 10/6/16.
 */
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'lexical-registration-options',
    templateUrl: './lexical-registration.component.html',
    styleUrls: ['./lexical-registration.component.css'],
})

export class LexicalRegistrationComponent {

    activeTab;

    constructor(private router: Router) {}


    registerUsingXML() {
        this.router.navigate(['/resourceRegistration/lexical/xml']);
    }

    registerUsingForm() {
        this.router.navigate(['/resourceRegistration/lexical/form']);
    }
}
