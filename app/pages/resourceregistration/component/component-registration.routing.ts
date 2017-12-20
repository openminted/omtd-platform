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
import { EditAWorkflowComponent } from "./edit-a-workflow.component";
import { ApplicationRegistrationComponent } from "./application-registration.component";

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
        ],
        data : {resourceType : 'component' }
    },
    {
        path: 'resourceRegistration/application/xml',
        component: ComponentRegistrationXMLComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'application' }
    },
    {
        path: 'resourceRegistration/component/form',
        component: ComponentRegistrationUsingFormComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'component' }
    },
    {
        path: 'resourceRegistration/application/form',
        component: ComponentRegistrationUsingFormComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'application' }
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
    {
        path: 'editWorkflow/:id',
        component: EditAWorkflowComponent,
        data : {application : false}
    },
    {
        path: 'editWorkflowApplication/:id',
        component: EditAWorkflowComponent,
        data : {application : true}
    },
    {
        path: 'resourceRegistration/application',
        component: ApplicationRegistrationComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
];

export const componentRegistrationRouting: ModuleWithProviders = RouterModule.forChild(componentRegistrationRoutes);