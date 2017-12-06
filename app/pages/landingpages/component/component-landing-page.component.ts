/**
 * Created by stefania on 9/7/16.
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Component as OMTDComponent} from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";
import { transform } from "../../../domain/utils";

@Component({
    selector: 'component-landing-page',
    templateUrl: './component-landing-page.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class ComponentLandingPageComponent {

    public component: OMTDComponent;
    public errorMessage: string;
    private sub: Subscription;
    private resourceType: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {
        this.resourceType = route.snapshot.data['resourceType'];
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.resourceService.getComponent(id, this.resourceType).subscribe(
                component => {this.component = component; transform(this.component)},
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
    
    process() {

        sessionStorage.setItem('runApplication.application', this.component.metadataHeaderInfo.metadataRecordIdentifier.value);

        var map: { [name: string]: string; } = { };

        if(sessionStorage.getItem('runApplication.input')) {
            map['input'] = sessionStorage.getItem('runApplication.input');
        }
        if(sessionStorage.getItem('runApplication.application')) {
            map['application'] = sessionStorage.getItem('runApplication.application');
        }

        this.router.navigate(['/runApplication', map]);
    }
}