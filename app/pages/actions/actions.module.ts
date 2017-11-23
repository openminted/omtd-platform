/**
 * Created by stefania on 6/7/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';

import { actionsRouting } from "./actions.routing";
import { BuildAWorkflowComponent } from "./buildworkflow/build-a-workflow.component";
import { RunApplicationComponent } from "./runapplication/run-application.component";
import { ResourceService } from "../../services/resource.service";
import { BrowseCorporaComponent } from "./utils/browse-corpora.component";
import { BrowseApplicationsComponent } from "./utils/browse-applications.component";
import { ReusableComponentsModule } from "../../shared/reusablecomponents/reusable-components.module";
import { WorkflowService } from "../../services/workflow.service";
import {GalaxyService} from "../../services/galaxy.service";


@NgModule({
    imports: [
        CommonModule,
        actionsRouting,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        ReusableComponentsModule
    ],
    declarations: [
        // BuildAWorkflowComponent,
        RunApplicationComponent,
        BrowseCorporaComponent,
        BrowseApplicationsComponent
    ],
    providers: [
        ResourceService, WorkflowService, GalaxyService
    ],
})

export class ActionsModule {}