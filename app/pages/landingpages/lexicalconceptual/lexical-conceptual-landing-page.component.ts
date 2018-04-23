/**
 * Created by stefania on 1/13/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Lexical } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'lexical-conceptual-landing-page',
    templateUrl: './lexical-conceptual-landing-page.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class LexicalConceptualLandingPageComponent implements OnInit {

    public lexicalConceptual: Lexical;
    public errorMessage: string;
    private sub: Subscription;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.resourceService.get<Lexical>(id,'lexical').subscribe(
                lexicalConceptual => this.lexicalConceptual = lexicalConceptual,
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
        this.errorMessage = 'System error loading lexical conceptual (Server responded: ' + error.error + ')';
    }
}