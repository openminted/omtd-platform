/**
 * Created by stefania on 7/5/16.
 */

import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";

@Component({
    selector: 'top-menu',
    templateUrl: './topmenu.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .uk-navbar-nav > li > a.loginLink {
            color: #2c4eac;
        }
    `]
})

export class TopMenuComponent {

    constructor(public oAuthService: AuthenticationService) {
    }

    onClick(id: string) {
        let el: HTMLElement = document.getElementById(id);
        el.classList.remove('uk-open');
    }

}
