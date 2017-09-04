/**
 * Created by stefania on 10/5/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentRegistrationComponent } from "./component-registration.component";
import { ComponentRegistrationXMLComponent } from "./component-registration-xml.component";
import { ComponentRegistrationUsingFormComponent } from "./component-registration-using-form.component";
import {CanActivateViaAuthGuard} from "../../../services/can-activate-auth-guard.service";

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
    }
];

export const componentRegistrationRouting: ModuleWithProviders = RouterModule.forChild(componentRegistrationRoutes);