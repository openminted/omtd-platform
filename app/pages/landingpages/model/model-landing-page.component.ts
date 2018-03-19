/**
 * Created by stefania on 1/13/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'model-landing-page',
    templateUrl: './model-landing-page.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class ModelLandingPageComponent implements OnInit {

    public model: any;
    public errorMessage: string;
    private sub: Subscription;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.resourceService.getModel(id).subscribe(
                model => this.model = model,
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
        this.errorMessage = 'System error loading model (Server responded: ' + error.error + ')';
    }
}