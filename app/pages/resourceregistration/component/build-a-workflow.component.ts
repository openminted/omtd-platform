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
    galaxyId = '';
    metadataFormPage = false;

    workflowDefinition : WorkflowDefinition = null;

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
        this._cd.reattach();
        this.metadataFormPage = true;
        this.loading = true;
        setTimeout(() => {
            this.galaxyService.updateWorkflow(this.galaxyId).subscribe(_ => {
                this.loading = false;
                this.metadataFormPage = true;
                this.defaultValues.componentInfo.distributionInfos[0].distributionLocation = location.origin + this.galaxyService.workflowDefinitionURL+this.galaxyId;
                this.componentForm.loadComponent(this.defaultValues);
                this.componentForm.get('componentInfo.distributionInfos').disable();
            },this.handleError);
        }, 500);
    }

    onSubmit() {

        if(!this.validate())
            return;

        this.componentForm.get('componentInfo.distributionInfos').enable();

        let component : OMTDComponent = Object.assign({},this.componentForm.formValue);
        let resourceIdentifier : ResourceIdentifier = new ResourceIdentifier();

        resourceIdentifier.resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OMTD;
        this.galaxyService.getWorkflowDefinition(this.galaxyId).subscribe(_ => {
            this.loading = true;
            this.workflowDefinition = _;
            resourceIdentifier.value = this.workflowDefinition.workflowName;
            component.componentInfo.identificationInfo.resourceIdentifiers = [resourceIdentifier];
            this.resourceService.uploadComponent(this.componentForm.formValue,'application').subscribe(
                () => {
                    this.successfulMessage = 'Application registered successfully';
                    window.scrollTo(0,0);
                    this.loading = false;
                }, error => {
                    this.handleError(error);
                }
            );

        },error => {
            this.handleError(error);
        });

    }

    handleError(error : any) {
        this.componentForm.get('componentInfo.distributionInfos').disable();
        super.handleError(error);
    }
}

