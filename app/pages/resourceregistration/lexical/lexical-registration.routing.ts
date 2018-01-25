/**
 * Created by stefania on 10/5/16.
 */
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CanActivateViaAuthGuard } from "../../../services/can-activate-auth-guard.service";
import { LexicalRegistrationComponent } from "./lexical-registration.component";
import { LexicalUploadComponent } from "./lexical-upload.component";



const lexicalRegistrationRoutes: Routes = [
    {
        path: 'resourceRegistration/lexical',
        component: LexicalRegistrationComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'resourceRegistration/lexical/form',
        component: LexicalUploadComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'lexical', update : true }
    },
];

export const lexicalRegistrationRouting: ModuleWithProviders = RouterModule.forChild(lexicalRegistrationRoutes);