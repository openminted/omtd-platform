/**
 * Created by stefania on 02/02/2018.
 */
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CanActivateViaAuthGuard } from "../../../services/can-activate-auth-guard.service";
import { ComingSoonPageComponent } from "../../../shared/reusablecomponents/coming-soon-page.component";
import { LanguageDescriptionRegistrationComponent } from "./language-description-registration.component";



const languageDescriptionRegistrationRoutes: Routes = [
    {
        path: 'resourceRegistration/language',
        component: LanguageDescriptionRegistrationComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'lexical'}
    },
    {
        path: 'resourceRegistration/language/form',
        component: ComingSoonPageComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {title : 'Fill in the metadata for your Model or Grammar'}
    },
    {
        path: 'resourceRegistration/language/xml',
        component: ComingSoonPageComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {title : 'Upload an XML file for your Model or Grammar'}
    }
];

export const languageDescriptionRegistrationRouting: ModuleWithProviders = RouterModule.forChild(languageDescriptionRegistrationRoutes);