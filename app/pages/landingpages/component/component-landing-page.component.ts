/**
 * Created by stefania on 9/7/16.
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OMTDComponent } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'component-landing-page',
    templateUrl: 'app/pages/landingpages/component/component-landing-page.component.html',
    styleUrls:  ['app/pages/landingpages/landing-page.component.css'],
})

export class ComponentLandingPageComponent {

    public component: OMTDComponent;
    public errorMessage: string;
    private sub: Subscription;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.resourceService.getComponent(id).subscribe(
                component => this.component = component,
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
        this.errorMessage = 'System error loading component (Server responded: ' + error + ')';
    }
}