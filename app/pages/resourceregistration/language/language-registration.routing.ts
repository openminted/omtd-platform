/**
 * Created by stefania on 10/5/16.
 */
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CanActivateViaAuthGuard } from "../../../services/can-activate-auth-guard.service";
import { LanguageRegistrationComponent } from "./language-registration.component";
import { LanguageUploadComponent } from "./language-upload.component";
import { ComingSoonPageComponent } from "../../../shared/reusablecomponents/coming-soon-page.component";
import { LanguageUpdateUsingFormComponent } from "./language-update-using-form.component";
import { LanguageUploadXMLComponent } from "./language-registration-xml.component";


const languageRegistrationRoutes: Routes = [
    {
        path: 'resourceRegistration/language',
        component: LanguageRegistrationComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'language'}
    },
    {
        path: 'resourceRegistration/language/form',
        component: LanguageUploadComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'language', update : false }
    },
    {
        path: 'resourceRegistration/language/xml',
        component: LanguageUploadXMLComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {title : 'Upload an XML file for your Model or  Grammar',resourceType : 'language'}
    },
    {
        path: 'resourceRegistration/language/form/edit/:id',
        component: LanguageUpdateUsingFormComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'language', update : false }
    },
    // {
    //     path: 'resourceRegistration/language/xml',
    //     language: LanguageUploadXMLComponent,
    //     canActivate: [
    //         CanActivateViaAuthGuard
    //     ],
    //     data : {resourceType : 'language'}
    // }
];

export const languageRegistrationRouting: ModuleWithProviders = RouterModule.forChild(languageRegistrationRoutes);