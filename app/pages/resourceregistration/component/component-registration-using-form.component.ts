/**
 * Created by stefanos on 1/22/17.
 */
import { Component, Injector, OnInit, ViewChild } from "@angular/core";
import {
    Component as OMTDComponent, ComponentInfo, IdentificationInfo, Lexical, LexicalConceptualResourceInfo,
    MetadataHeaderInfo,
    ResourceIdentifier,
    ResourceIdentifierSchemeNameEnum
} from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { ComponentRegistrationFormComponent } from "./component-registration-form.component";
import { randomString, title } from "../../../domain/utils";
import { ActivatedRoute, Router } from "@angular/router";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { UUID } from "angular2-uuid";

@Component({
    selector: 'component-registration-using-form',
    templateUrl: './component-registration-using-form.component.html',
    styleUrls : ['./component-registration-form.component.css']
})

export class ComponentRegistrationUsingFormComponent implements OnInit {

    errorMessage: string = null;

    successfulMessage: string = null;

    loading : boolean = false;

    componentMetadata : MetadataHeaderInfo = null;

    resourceType : string;
    @ViewChild('componentForm') componentForm : ComponentRegistrationFormComponent;

    protected resourceService: ResourceService;
    protected route: ActivatedRoute;
    protected router: Router;

    constructor(injector : Injector) {
        this.resourceService = injector.get(ResourceService);
        this.route = injector.get(ActivatedRoute);
        this.router = injector.get(Router);
        this.resourceType = this.route.snapshot.data['resourceType'];
    }

    ngOnInit(): void {
        let component : OMTDComponent = new OMTDComponent();
        component.componentInfo = new ComponentInfo();
        component.componentInfo.identificationInfo = new IdentificationInfo();
        let identifier : ResourceIdentifier = new ResourceIdentifier();
        identifier.value = UUID.UUID();
        (identifier.resourceIdentifierSchemeName as any) = "OMTD";
        component.componentInfo.identificationInfo.resourceIdentifiers = [identifier];
        setTimeout(() => this.componentForm.loadComponent(component),500);
    }

    validate() : boolean {
        this.successfulMessage = null;
        this.errorMessage = null;
        this.componentForm.setAsTouched();
        if(this.componentForm.formValid && this.componentForm.tocValid) {
            return true;
        } else if (!this.componentForm.formValid) {
            this.errorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';
            window.scrollTo(0,0);
        } else if (!this.componentForm.tocValid) {
            this.errorMessage = "Please accept the terms and conditions";
            window.scrollTo(0,0);
        }
        return false;
    }

    onSubmit() {

        if(!this.validate())
            return;

        this.loading = true;
        this.componentForm.get('componentInfo.application').setValue(this.resourceType != 'component' )
        this.resourceService.upload<OMTDComponent>(this.componentForm.formValue,this.resourceType).subscribe(
            component => {
                this.componentMetadata = component.metadataHeaderInfo;
                this.successfulMessage = `${title(this.resourceType)} registered successfully`;
                window.scrollTo(0,0);
                this.loading=false;
            }, error => this.handleError(error)
        );

    }

    handleError(error : ErrorObservable ,msg : string = 'Component Registration Error') {
        console.log(error);
        this.errorMessage = `${msg} (${error.error})`;
        this.loading = false;
        window.scrollTo(0,0);
    }

    navigateToComponent() {
        this.router.navigate([`/landingPage/${this.resourceType}/`,
            this.componentMetadata.metadataRecordIdentifier.value]);
    }

}