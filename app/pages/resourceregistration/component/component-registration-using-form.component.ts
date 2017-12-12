/**
 * Created by stefania on 1/22/17.
 */
import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import {
    Component as OMTDComponent,
    ResourceIdentifier,
    ResourceIdentifierSchemeNameEnum
} from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";

@Component({
    selector: 'component-registration-using-form',
    templateUrl: './component-registration-using-form.component.html',
    styles : [
        `.whiteFilm {
            background: #ffffff none repeat scroll 0 0;
            height: 100%;
            left: 0;
            opacity: 0.7;
            position: fixed;
            text-align: center;
            top: 0;
            width: 100%;
            z-index: 5;
        }`
    ]
})

export class ComponentRegistrationUsingFormComponent implements OnInit {

    componentForm: FormGroup;
    componentValue : OMTDComponent;
    componentFormErrorMessage: string = null;
    tocValid : boolean;
    errorMessage: string = null;
    successfulMessage: string = null;
    loading : boolean = false;

    constructor(private resourceService: ResourceService) {
    }

    ngOnInit() {
    }

    handleComponent(component : any) {
        this.componentForm = component;
    }

    setAsTouched(group: FormGroup | FormArray) {
        group.markAsTouched();
        for (let i in group.controls) {
            if (group.controls[i] instanceof FormControl) {
                group.controls[i].markAsTouched();
            } else {
                this.setAsTouched(group.controls[i]);
            }
        }
    }

    onSubmit() {

        this.setAsTouched(this.componentForm);

        this.successfulMessage = null;
        this.errorMessage = null;

        if(this.componentForm.valid && this.tocValid)
            this.componentFormErrorMessage = null;
        else if (!this.componentForm.valid)
            this.componentFormErrorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';
        else if (!this.tocValid)
            this.componentFormErrorMessage = "Please accept the terms and conditions";

        if(this.componentForm.valid && this.tocValid) {
            let component : OMTDComponent = Object.assign({},this.componentForm.value);
            let resourceIdentifier : ResourceIdentifier = new ResourceIdentifier();
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < 40; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            resourceIdentifier.resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OMTD;
            resourceIdentifier.value = text;
            component.componentInfo.identificationInfo.resourceIdentifiers = [resourceIdentifier];
            let application = this.componentForm.get('componentInfo.application').value;
            let resourceType = application ? 'application' : 'component';
            this.loading = true;
            this.resourceService.uploadComponent(this.componentForm.value,resourceType).subscribe(
                res => {
                    this.successfulMessage = 'Component registered successfully';
                    window.scrollTo(0,0);
                    this.loading=false;
                }, error => this.handleError(error)
            );
        } else {
            window.scrollTo(0,0);
        }
    }

    handleError(error) {
        this.errorMessage = 'Component registration failed (Server responded: ' + error + ')';
        this.loading = false;
        window.scrollTo(0,0);
    }

}