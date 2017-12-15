/**
 * Created by stefanos on 14/11/2017
 */
import { Component, Injector, OnDestroy, OnInit, Renderer2 } from "@angular/core";
import { GalaxyService } from "../../../services/galaxy.service";
import { ActivatedRoute } from "@angular/router";
import { SafeUrl } from "@angular/platform-browser";

@Component({
    selector: 'build-a-workflow',
    templateUrl: './edit-a-workflow.component.html',
    styleUrls : ['./component-registration-form.component.css']
})
export class EditAWorkflowComponent implements OnInit, OnDestroy {

    private renderer : Renderer2;
    private galaxyService : GalaxyService;
    private route : ActivatedRoute;
    galaxyId = '';
    galaxyURL : SafeUrl = null;
    listener : any;

    constructor(injector : Injector){
        this.galaxyService = injector.get(GalaxyService);
        this.route = injector.get(ActivatedRoute);
        this.renderer = injector.get(Renderer2);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.galaxyId = params['id'];
            this.galaxyURL = this.galaxyService.workflowURLSanitized(this.galaxyId);
        });
        this.listener = this.renderer.listen('window','message',data =>{
            setTimeout(()=>{
                if(data['origin'] == location.origin && data['data']=='workflowSaved') {
                    this.galaxyService.updateWorkflow(this.galaxyId).subscribe(() => {
                        console.log("Workflow Updated");
                    })
                }
            },1000);
        });
    }

    ngOnDestroy() {
        this.listener && this.listener();
    }
}

