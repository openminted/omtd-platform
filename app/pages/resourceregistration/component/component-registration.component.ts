/**
 * Created by stefania on 10/6/16.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'component-registration-options',
    templateUrl: './component-registration.component.html',
    styleUrls:  ['./component-registration.component.css'],
})

export class ComponentRegistrationComponent {

    constructor(private router: Router) {}

    registerUsingXML() {
        this.router.navigate(['/resourceRegistration/component/xml']);
    }

    registerUsingForm() {
        this.router.navigate(['/resourceRegistration/component/form']);
    }

    buildWorkflow() {
        this.router.navigate(['/buildWorkflow']);
    }
}