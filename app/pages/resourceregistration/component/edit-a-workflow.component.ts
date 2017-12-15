/**
 * Created by stefanos on 14/11/2017
 */
import { Component, Injector, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { GalaxyService } from "../../../services/galaxy.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SafeUrl } from "@angular/platform-browser";
import { ResourceService } from "../../../services/resource.service";

declare var UIkit : any;

@Component({
    selector: 'build-a-workflow',
    templateUrl: './edit-a-workflow.component.html',
    styleUrls : ['./component-registration-form.component.css']
})
export class EditAWorkflowComponent implements OnInit, OnDestroy {

    private renderer : Renderer2;
    private galaxyService : GalaxyService;
    private resourceService : ResourceService;
    private route : ActivatedRoute;
    private router : Router;
    application : boolean = false;
    galaxyId = '';
    omtdId = '';
    galaxyURL : SafeUrl = null;
    listener : any;

    constructor(injector : Injector){
        this.galaxyService = injector.get(GalaxyService);
        this.route = injector.get(ActivatedRoute);
        this.renderer = injector.get(Renderer2);
        this.router = injector.get(Router);
        this.resourceService = injector.get(ResourceService);
        this.application = this.route.snapshot.data['application'];
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.galaxyId = params['id'];
            if(!this.application) {
                this.galaxyURL = this.galaxyService.workflowURLSanitized(this.galaxyId);
            } else {
                this.omtdId = this.galaxyId;
                this.resourceService.getComponent(this.omtdId,'application').subscribe(
                    application => {
                        let extractedId = application.componentInfo.distributionInfos[0].distributionLocation;
                        extractedId = extractedId.match(/\/(\w+)$/)[1];
                        this.galaxyURL = this.galaxyService.workflowURLSanitized(extractedId);
                    },
                    console.log
                );
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
                    })
                }
            },1000);
        });
    }

    ngOnDestroy() {
        this.listener && this.listener();
    }

    editMetadata() {
        this.router.navigate(['/resourceRegistration/application/form/edit/',this.omtdId]);
    }
}

