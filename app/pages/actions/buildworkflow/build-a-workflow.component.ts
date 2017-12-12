/**
 * Created by stefania on 6/7/17.
 */
import { Component, OnDestroy, OnInit, Renderer2, SecurityContext, ViewChild } from '@angular/core';
import { GalaxyService}  from "../../../services/galaxy.service";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser"
import {FormGroup, FormBuilder} from "@angular/forms";
import {
    Component as OMTDComponent, ResourceIdentifier,
    ResourceIdentifierSchemeNameEnum, ComponentInfo, ComponentDistributionInfo, ComponentDistributionFormEnum
} from "../../../domain/openminted-model"
import {ResourceService} from "../../../services/resource.service";
import {WorkflowDefinition} from "../../../domain/galaxy-workflow";
import {ComponentRegistrationFormComponent} from "../../resourceregistration/component/component-registration-form.component";

@Component({
    selector: 'build-a-workflow',
    templateUrl: './build-a-workflow.component.html',
})
export class BuildAWorkflowComponent implements OnInit, OnDestroy {

    constructor(private _sanitizer : DomSanitizer,
                private route : ActivatedRoute,
                private galaxyService : GalaxyService,
                private resourceService: ResourceService,
                private renderer : Renderer2){}

    galaxyId = '';
    metadataFormPage = false;
    componentForm: FormGroup;
    componentValue : OMTDComponent;
    componentFormErrorMessage: string = null;
    tocValid : boolean;
    errorMessage: string = null;
    successfulMessage: string = null;
    workflowDefinition : WorkflowDefinition = null;
    listener : any;
    defaultValues : any = {
        componentInfo: {
            application: true,
            distributionInfos: [
                {
                    componentDistributionForm: "GALAXY_WORKFLOW",
                }
            ]
        }
    };

    @ViewChild('componentForm') componentRegistrationForm : ComponentRegistrationFormComponent;

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.galaxyId = params['id'];
        });
        this.galaxyService.getWorkflowDefinition(this.galaxyId).subscribe(_ => this.workflowDefinition = _);
        this.listener = this.renderer.listen('window','message',data =>{
            setTimeout(()=>{
                if(data['origin'] == location.origin) {
                    console.log(data['data']);
                }
                this.fillMetadata();
            },500);
        });
    }

    ngOnDestroy() {
        this.listener && this.listener();
    }
    get workflowURL() {
        console.log(this.galaxyId);
        let url = this._sanitizer.sanitize(SecurityContext.URL, this.galaxyService.getGalaxyUrl(this.galaxyId));
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    public fillMetadata() {
        this.metadataFormPage = true;
        setTimeout(() => {
            this.defaultValues.componentInfo.distributionInfos[0].distributionLocation = this.galaxyService.workflowDefinitionURL+this.galaxyId;
            this.componentRegistrationForm.loadComponent(this.defaultValues);
            this.componentRegistrationForm.myForm.get('componentInfo.application').disable();
            this.componentRegistrationForm.myForm.get('componentInfo.distributionInfos').disable();

        }, 500);
    }

    handleError(error : any) {
        console.log(error);
    }

    handleComponent(component : any) {
        this.componentForm = component;
    }

    onSubmit() {

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

            resourceIdentifier.resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OMTD;

            resourceIdentifier.value = this.workflowDefinition.workflowName;
            component.componentInfo.identificationInfo.resourceIdentifiers = [resourceIdentifier];
            this.resourceService.uploadComponent(this.componentForm.value).subscribe(
                res => {
                    this.successfulMessage = 'Component registered successfully';
                    window.scrollTo(0,0);
                }, error => this.handleError(error)
            );
        } else {
            window.scrollTo(0,0);
        }
    }
}