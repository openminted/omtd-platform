/**
 * Created by stefania on 10/5/16.
 */
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CanActivateViaAuthGuard } from "../../../services/can-activate-auth-guard.service";
import { LexicalRegistrationComponent } from "./lexical-registration.component";
import { LexicalUploadComponent } from "./lexical-upload.component";
import { ComingSoonPageComponent } from "../../../shared/reusablecomponents/coming-soon-page.component";
import { LexicalUploadXMLComponent } from "./lexical-registration-xml.component";
import { LanguageUpdateUsingFormComponent } from "../language/language-update-using-form.component";
import { LexicalUpdateUsingFormComponent } from "./lexical-update-using-form.component";


const lexicalRegistrationRoutes: Routes = [
    {
        path: 'resourceRegistration/lexical',
        component: LexicalRegistrationComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'lexical'}
    },
    {
        path: 'resourceRegistration/lexical/form',
        component: LexicalUploadComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'lexical', update : false }
    },
    {
        path: 'resourceRegistration/lexical/xml',
        component: LexicalUploadXMLComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {title : 'Upload an XML file for your Annotation Resource', resourceType : 'lexical'}
    },
    {
        path: 'resourceRegistration/lexical/form/edit/:id',
        component: LexicalUpdateUsingFormComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'lexical', update : false }
    },
];

export const lexicalRegistrationRouting: ModuleWithProviders = RouterModule.forChild(lexicalRegistrationRoutes);