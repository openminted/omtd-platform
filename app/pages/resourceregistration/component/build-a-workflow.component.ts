/**
 * Created by stefania on 6/7/17.
 */
import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, OnDestroy, OnInit, Renderer2,
    SecurityContext
} from "@angular/core";
import { GalaxyService } from "../../../services/galaxy.service";
import { DomSanitizer } from "@angular/platform-browser";
import {
    Component as OMTDComponent,
    ResourceIdentifier,
    ResourceIdentifierSchemeNameEnum
} from "../../../domain/openminted-model";
import { WorkflowDefinition } from "../../../domain/galaxy-workflow";
import { ComponentRegistrationUsingFormComponent } from "./component-registration-using-form.component";

@Component({
    selector: 'build-a-workflow',
    templateUrl: './build-a-workflow.component.html',
    styleUrls : ['./component-registration-form.component.css'],
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class BuildAWorkflowComponent extends ComponentRegistrationUsingFormComponent implements OnInit, OnDestroy {

    private _sanitizer;
    private galaxyService;
    private renderer;
    private _cd : ChangeDetectorRef;
    workflowDefinitionID = '';
    galaxyID = '';
    metadataFormPage = false;
    workflowName : string = '';
    workflowDefinition : WorkflowDefinition = null;
    production = process.env.PRODUCTION;

    listener : any;

    readonly defaultValues : any = {
        componentInfo: {
            application: true,
            distributionInfos: [
                {
                    componentDistributionForm: "GALAXY_WORKFLOW",
                }
            ]
        }
    };

    constructor(injector : Injector){
        super(injector);
        this._sanitizer = injector.get(DomSanitizer);
        this.galaxyService = injector.get(GalaxyService);
        this.renderer = injector.get(Renderer2);
        this._cd = injector.get(ChangeDetectorRef);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.workflowDefinitionID = params['id'];
            this.galaxyService.getWorkflowDefinition(this.workflowDefinitionID).subscribe(
                definition => {
                    console.log(definition);
                    this.galaxyID = definition.workflow_id;
                    this.workflowName = definition.workflowName;
                    if(!this.galaxyID) {
                        this.handleError({error : "Workflow does not exist"},'Error loading workflow');
                    }
                    this._cd.markForCheck();
                },
                error => this.handleError(error,'Error loading workflow')
            );
        });
        this.listener = this.renderer.listen('window','message',data =>{
            setTimeout(()=>{
                if(data['origin'] == location.origin && data['data']=='workflowSaved') {
                    this._cd.reattach();
                    this.fillMetadata();
                }
            },500);
        });
    }

    ngOnDestroy() {
        this.listener && this.listener();
    }

    get workflowURL() {
        let url = this._sanitizer.sanitize(SecurityContext.URL, this.galaxyService.getGalaxyUrl(this.galaxyID));
        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    public fillMetadata() {
        this.metadataFormPage = true;
        this.loading = true;
        this._cd.markForCheck();
        setTimeout(() => {
            this.galaxyService.updateWorkflow(this.workflowDefinitionID).subscribe(_ => {
                this._cd.markForCheck();
                this.metadataFormPage = true;
                this.defaultValues.componentInfo.distributionInfos[0].distributionLocation = location.origin + this.galaxyService.workflowDefinitionURL+this.workflowDefinitionID;
                this.componentForm.loadComponent(this.defaultValues);
                this.componentForm.get('componentInfo.distributionInfos').disable();
                this.loading = false;
                this._cd.markForCheck();
            },this.handleError);
        }, 500);
    }

    onSubmit() {
        this._cd.markForCheck();
        if(!this.validate())
            return;

        this.componentForm.get('componentInfo.distributionInfos').enable();

        let component : OMTDComponent = Object.assign({},this.componentForm.formValue);
        let resourceIdentifier : ResourceIdentifier = new ResourceIdentifier();

        resourceIdentifier.resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OMTD;
        this.galaxyService.getWorkflowDefinition(this.workflowDefinitionID).subscribe(_ => {
            this.loading = true;
            this._cd.markForCheck();
            this.workflowDefinition = _;
            resourceIdentifier.value = this.workflowDefinition.workflowName;
            component.componentInfo.identificationInfo.resourceIdentifiers = [resourceIdentifier];
            this.resourceService.upload<OMTDComponent>(this.componentForm.formValue,'application').subscribe(
                application => {
                    this.componentMetadata = application.metadataHeaderInfo;
                    this.successfulMessage = `Application registered successfully`;
                    window.scrollTo(0,0);
                    this.loading = false;
                    this._cd.markForCheck();
                }, error => {
                    this.handleError(error, 'Error saving application');
                }
            );

        },error => {
            this.handleError(error, 'Error updating workflow');
        });
        this._cd.markForCheck();
    }

    handleError(error : any, msg : string) {
        if(this.componentForm) {
            this.componentForm.get('componentInfo.distributionInfos').disable();
        }
        super.handleError(error,msg);
        this._cd.markForCheck();
    }
}

