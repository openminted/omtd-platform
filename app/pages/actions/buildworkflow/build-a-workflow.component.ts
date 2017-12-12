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
        }`]
})
export class BuildAWorkflowComponent implements OnInit, OnDestroy {

    constructor(private _sanitizer : DomSanitizer,
                private route : ActivatedRoute,
                private galaxyService : GalaxyService,
                private resourceService: ResourceService,
                private renderer : Renderer2){}

    loading = false;
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
        this.loading = true;
        this.route.params.subscribe(params => {
            this.galaxyId = params['id'];
        });


        this.listener = this.renderer.listen('window','message',data =>{
            setTimeout(()=>{
                if(data['origin'] == location.origin && data['data']=='workflowSaved') {
                    this.fillMetadata();
                }
            },500);
        });
    }

    ngOnDestroy() {
        this.listener && this.listener();
    }
    get workflowURL() {
        let url = this._sanitizer.sanitize(SecurityContext.URL, this.galaxyService.getGalaxyUrl(this.galaxyId));
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    public fillMetadata() {
        this.metadataFormPage = true;
        this.loading = true;
        setTimeout(() => {
            this.galaxyService.updateWorkflow(this.galaxyId).subscribe(_ => {
                this.loading = false;
                this.metadataFormPage = true;
                this.defaultValues.componentInfo.distributionInfos[0].distributionLocation = location.origin + this.galaxyService.workflowDefinitionURL+this.galaxyId;
                this.componentRegistrationForm.loadComponent(this.defaultValues);
                this.componentRegistrationForm.myForm.get('componentInfo.application').disable();
                this.componentRegistrationForm.myForm.get('componentInfo.distributionInfos').disable();
            },this.handleError);
        }, 500);
    }

    handleError(error : any) {
        this.loading = false;
        this.errorMessage = error;
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
            this.componentForm.get('componentInfo.application').enable();
            this.componentForm.get('componentInfo.distributionInfos').enable();
            let component : OMTDComponent = Object.assign({},this.componentForm.value);
            let resourceIdentifier : ResourceIdentifier = new ResourceIdentifier();

            resourceIdentifier.resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OMTD;
            this.galaxyService.getWorkflowDefinition(this.galaxyId).subscribe(_ => {
                this.loading = true;
                this.workflowDefinition = _;
                resourceIdentifier.value = this.workflowDefinition.workflowName;
                component.componentInfo.identificationInfo.resourceIdentifiers = [resourceIdentifier];
                this.resourceService.uploadComponent(this.componentForm.value,'application').subscribe(
                    res => {
                        this.successfulMessage = 'Application registered successfully';
                        window.scrollTo(0,0);
                        this.loading = false;
                    }, error => {
                        this.componentForm.get('componentInfo.application').disable();
                        this.componentForm.get('componentInfo.distributionInfos').disable();
                        this.handleError(error);
                    }
                );

            },error => {
                this.componentForm.get('componentInfo.application').disable();
                this.componentForm.get('componentInfo.distributionInfos').disable();
                this.handleError(error);
            });
        } else {
            window.scrollTo(0,0);
        }
    }
}