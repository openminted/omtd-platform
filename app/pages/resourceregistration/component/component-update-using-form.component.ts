/**
 * Created by stefania on 9/12/17.
 */
import { Component, Injector, OnInit } from "@angular/core";
import { Component as OMTDComponent, MetadataHeaderInfo } from "../../../domain/openminted-model";
import { Observable } from "rxjs/Observable";
import { ComponentRegistrationUsingFormComponent } from "./component-registration-using-form.component";

@Component({
    selector: 'component-update-using-form',
    templateUrl: './component-update-using-form.component.html',
    styleUrls : ['./component-registration-form.component.css']
})

export class ComponentUpdateUsingFormComponent extends ComponentRegistrationUsingFormComponent implements OnInit {

    component : Observable<OMTDComponent>;

    componentMetadata : MetadataHeaderInfo = null;

    applicationWorkflow : string = '';

    constructor(injector : Injector) {
        super(injector);
        this.resourceType = this.route.snapshot.data['resourceType'];
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.component = this.resourceService.getComponent(id,this.resourceType);
            this.component.subscribe(component => {
                this.componentMetadata = component.metadataHeaderInfo;
                this.componentForm.loadComponent(component);
                setTimeout(() =>{
                    this.applicationWorkflow = this.componentForm.galaxyToDistributionInfo();
                },1000);
            }, error => this.handleError(error));
        });
    }

    updateComponent(component : any) {
        console.log(component);
        this.loading = true;
        this.resourceService.updateComponent(
            component,this.resourceType).subscribe(component => {
                console.log(component);
                this.loading = false;
                this.successfulMessage = "Component updated successfully";
                window.scrollTo(0,0);},
            error => this.handleError(error)
        );

    }

    onSubmit() {

        if(!this.validate())
            return;
        let componentFilled : OMTDComponent = Object.assign({},this.componentForm.formValue);
        componentFilled.metadataHeaderInfo = this.componentMetadata;
        this.updateComponent(componentFilled);
    }

    editWorkflow() {
        this.router.navigate(['/editWorkflowApplication/',this.componentMetadata.metadataRecordIdentifier.value]);
    }

    navigateToComponent() {
        this.router.navigate([`/landingPage/${this.resourceType}/`, this.componentMetadata.metadataRecordIdentifier.value]);
    }
}