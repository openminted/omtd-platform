/**
 * Created by stefania on 9/7/16.
 */
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Component as OMTDComponent, Corpus as OMTDCorpus} from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";
import { transform } from "../../../domain/utils";
import {saveAs} from "file-saver";
import {HttpResponse} from "@angular/common/http";

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
            this.resourceService.get<OMTDComponent>(id, this.resourceType).subscribe(
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
        this.errorMessage = 'System error loading component (Server responded: ' + error.error + ')';
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

    downloadResource(component: OMTDComponent, mediaType : string) : void {
        let id = component.metadataHeaderInfo.metadataRecordIdentifier.value;
        this.resourceService.getBlob(id,this.resourceType ,mediaType).subscribe(data => {
            console.log(data);
            if (data instanceof HttpResponse) {
                saveAs((data as HttpResponse<any>).body, `${id}.${mediaType}`);
            }
        });
    }
}