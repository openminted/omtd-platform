/**
 * Created by stefania on 7/10/17.
 */
import { Component, Injector } from '@angular/core';
import { Component as OMTDComponent } from "../../../domain/openminted-model";
import { MyResourceComponent } from "../my-resource.component";
import {title} from "../../../domain/utils";
import { EnrichedOperation } from "../../../domain/operation";

@Component({
    selector: 'my-services',
    templateUrl: './my-services.component.html',
    styleUrls:  ['../user-space.component.css'],
})

export class MyServicesComponent extends MyResourceComponent<OMTDComponent> {

    title = title;

    constructor(injector : Injector) {
        super(injector);
        this.resourceType = this.route.snapshot.data['resourceType'];
    }

    ngOnInit() {
        super.ngOnInit();
        this.route.params.subscribe(
            params => {
                console.log(params);
                if (typeof params['from'] != undefined) {
                    this.params['from'] = params['from'];
                }
                this.resourceService.getMyResources<OMTDComponent>(this.resourceType,this.params).subscribe(
                    searchResults => this.updateMyResources(searchResults),
                    error => this.handleError('System error retrieving user tools/services', <any>error));
            }
        );
    }

    editWorkflow(component: OMTDComponent) {
        this.router.navigate([`/editWorkflowApplication/`, component.metadataHeaderInfo.metadataRecordIdentifier.value]);
    }

}