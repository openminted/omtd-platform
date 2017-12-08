/**
 * Created by stefania on 6/7/17.
 */

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildAWorkflowComponent } from "./buildworkflow/build-a-workflow.component";
import { RunApplicationComponent } from "./runapplication/run-application.component";
import { BrowseCorporaComponent } from "./utils/browse-corpora.component";
import { BrowseApplicationsComponent } from "./utils/browse-applications.component";
import {CanActivateViaAuthGuard} from "../../services/can-activate-auth-guard.service";

const actionsRoutes: Routes = [
    {
        path: 'runApplication',
        component: RunApplicationComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'buildWorkflow/:id',
        component: BuildAWorkflowComponent
    },
    {
        path: 'browseCorpora',
        component: BrowseCorporaComponent,
    },
    {
        path: 'browseApplications',
        component: BrowseApplicationsComponent,
    },
];

export const actionsRouting: ModuleWithProviders = RouterModule.forChild(actionsRoutes);