/**
 * Created by stefania on 10/2/17.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'support',
    templateUrl: './support.component.html',
    // styleUrls:  ['./component-registration.component.css'],
})

export class SupportComponent {

    constructor(private router: Router) {}

    goToFAQsLegal() {
        this.router.navigate(['/support/faqLegal']);
    }

    goToFAQsPolicies() {
        this.router.navigate(['/support/faqPolicies']);
    }
}