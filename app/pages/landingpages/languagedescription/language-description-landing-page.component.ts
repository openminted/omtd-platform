/**
 * Created by stefania on 1/13/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LanguageDescription } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'language-description-landing-page',
    templateUrl: './language-description-landing-page.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class LanguageDescriptionLandingPageComponent implements OnInit {

    public languageDescription: LanguageDescription;
    public errorMessage: string;
    private sub: Subscription;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.resourceService.getLanguageDescription(id).subscribe(
                languageDescription => this.languageDescription = languageDescription,
                error => this.handleError(<any>error));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    goBack() {
        window.history.back();
    }

    handleError(error) {
        this.errorMessage = 'System error loading language description (Server responded: ' + error + ')';
    }
}