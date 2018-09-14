/**
 * Created by stefanos on 14/11/2017
 */
import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, OnDestroy, OnInit,
    Renderer2
} from "@angular/core";
import { GalaxyService } from "../../../services/galaxy.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SafeUrl } from "@angular/platform-browser";
import { ResourceService } from "../../../services/resource.service";
import { Component as OMTDComponent} from "../../../domain/openminted-model";

declare var UIkit : any;

@Component({
    selector: 'edit-a-workflow',
    templateUrl: './edit-a-workflow.component.html',
    styleUrls : ['./component-registration-form.component.css'],
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class EditAWorkflowComponent implements OnInit, OnDestroy {

    private renderer : Renderer2;
    private galaxyService : GalaxyService;
    private resourceService : ResourceService;
    private route : ActivatedRoute;
    private router : Router;
    private _cd : ChangeDetectorRef;
    application : boolean = false;
    omtdId : string = '';
    galaxyId : string = '';
    galaxyURL : SafeUrl = null;
    listener : any;
    production = process.env.PRODUCTION;

    constructor(injector : Injector){
        this.galaxyService = injector.get(GalaxyService);
        this.route = injector.get(ActivatedRoute);
        this.renderer = injector.get(Renderer2);
        this.router = injector.get(Router);
        this.resourceService = injector.get(ResourceService);
        this._cd = injector.get(ChangeDetectorRef);
        this.application = this.route.snapshot.data['application'];
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.omtdId = params['id'];
            if(!this.application) {
                this.galaxyURL = this.galaxyService.workflowURLSanitized(this.omtdId);
            } else {
                this.resourceService.get<OMTDComponent>(this.omtdId,'application')
                    .map(application => application.componentInfo.distributionInfos[0].distributionLocation.match(/\/([\w\d-]+)$/)[1])
                    .mergeMap( galaxyId => this.galaxyService.restoreWorkflow(galaxyId))
                    .map( workflow => {
                        this.galaxyId = workflow.omtdId;
                        return workflow.workflow_id;
                    })
                    .subscribe(workflow_id => this.showIframe(workflow_id));
            }
        });
        this.listener = this.renderer.listen('window','message',data =>{
            setTimeout(()=>{
                if(data['origin'] == location.origin && data['data']=='workflowSaved') {
                    this.galaxyService.updateWorkflow(this.galaxyId).subscribe(() => {
                        UIkit.notification({
                            message: `<i class="fa fa-check" aria-hidden="true"></i> Workflow Updated`,
                            status: 'success',
                            pos : 'top-center',
                            timeout:1000
                        });
                        this.editMetadata();
                    })
                }
            },1000);
        });
    }

    showIframe(workflow_id : string) : void {
        this.galaxyURL = this.galaxyService.workflowURLSanitized(workflow_id);
        this._cd.markForCheck();
    }

    ngOnDestroy() {
        this.listener && this.listener();
    }

    editMetadata() {
        this.router.navigate(['/resourceRegistration/application/form/edit/',this.omtdId]);
    }

    debugSave() {
        window.postMessage("workflowSaved","*");
    }
}

