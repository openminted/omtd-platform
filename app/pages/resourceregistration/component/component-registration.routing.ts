/**
 * Created by stefania on 10/5/16.
 */
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentRegistrationComponent } from "./component-registration.component";
import { ComponentRegistrationXMLComponent } from "./component-registration-xml.component";
import { ComponentRegistrationUsingFormComponent } from "./component-registration-using-form.component";
import { CanActivateViaAuthGuard } from "../../../services/can-activate-auth-guard.service";
import { ComponentUpdateUsingFormComponent } from "./component-update-using-form.component";
import { BuildAWorkflowComponent } from "./build-a-workflow.component";
import { ComponentRegistrationUsingMavenCoordinatesComponent } from "./component-registration-using-maven-coordinates.component";

const componentRegistrationRoutes: Routes = [
    {
        path: 'resourceRegistration/component',
        component: ComponentRegistrationComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'resourceRegistration/component/xml',
        component: ComponentRegistrationXMLComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'resourceRegistration/component/form',
        component: ComponentRegistrationUsingFormComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'resourceRegistration/component/mavenCoordinates',
        component: ComponentRegistrationUsingMavenCoordinatesComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'resourceRegistration/component/form/edit/:id',
        component: ComponentUpdateUsingFormComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'component' }
    },
    {
        path: 'resourceRegistration/application/form/edit/:id',
        component: ComponentUpdateUsingFormComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'application' }
    },
    {
        path: 'buildWorkflow/:id',
        component: BuildAWorkflowComponent
    },
];

export const componentRegistrationRouting: ModuleWithProviders = RouterModule.forChild(componentRegistrationRoutes);