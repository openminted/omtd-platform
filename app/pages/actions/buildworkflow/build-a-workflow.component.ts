/**
 * Created by stefania on 6/7/17.
 */
import { Component } from '@angular/core';
import {GalaxyService} from "../../../services/galaxy.service";

@Component({
    selector: 'build-a-workflow',
    templateUrl: './build-a-workflow.component.html',
})
export class BuildAWorkflowComponent {

    constructor(private galaxyService : GalaxyService){}

    public createWorkflow() {
        this.galaxyService.createWorkflow().subscribe(
            id => window.location.href = this.galaxyService.getGalaxyUrl(id),
            error => this.handleError
        );
    }

    handleError(error : any) {
        console.log(error);
    }
}