/**
 * Created by stefania on 9/12/17.
 */
import { Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms'
import {
    Component as OMTDComponent
} from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'component-update-using-form',
    templateUrl: './component-update-using-form.component.html'
})

export class ComponentUpdateUsingFormComponent implements OnInit {

    componentForm: FormGroup;
    component : Observable<OMTDComponent>;
    componentFormErrorMessage: string = null;
    componentAll : OMTDComponent = null;

    busy : boolean = false;
    tocValid : boolean;
    successfulMessage: string = null;

    constructor(private resourceService: ResourceService,private route: ActivatedRoute,private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.component = this.resourceService.getComponent(id);
            this.component.subscribe(component => this.componentAll = component, error => this.handleError("Error occured",error));
        });
    }

    handleComponent(component : any) {
        this.componentForm = component;
    }

    updateComponent(component : any) {
        console.log(component);
        this.busy = true;
        this.resourceService.updateComponent(
            component).subscribe(component => {
                console.log(component);
                this.busy = false;
                this.successfulMessage = "Component updated  successfully";
                window.scrollTo(0,0);},
            error => this.handleError("Error",error)
        );
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

        if(this.componentForm.valid && this.tocValid)
            this.componentFormErrorMessage = null;
        else if (!this.componentForm.valid)
            this.componentFormErrorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';
        else if (!this.tocValid)
            this.componentFormErrorMessage = "Please accept the terms and conditions";

        if(this.componentForm.valid && this.tocValid) {
            let componentFilled : OMTDComponent = Object.assign({},this.componentForm.value);
            componentFilled.metadataHeaderInfo = this.componentAll.metadataHeaderInfo;
            this.updateComponent(componentFilled);
        } else {
            window.scrollTo(0,0);
        }
    }

    handleError(message : string,error : any) {
        this.componentFormErrorMessage = message + ' (Server responded: ' + error + ')';
        window.scrollTo(0,0);
        this.busy = false;
    }

    navigateToComponent() {
        this.router.navigate(['/landingPage/component/', this.componentAll.metadataHeaderInfo.metadataRecordIdentifier.value]);
    }
}