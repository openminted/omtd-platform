/**
 * Created by stefania on 11/24/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorpusRegistrationComponent } from "./corpus-registration.component";
import { SearchForPublicationsComponent } from "./search-for-publications.component";
import { CorpusUploadComponent } from "./corpus-upload.component";
import { CorpusBuilderComponent } from "./corpus-builder.component";
import { CanActivateViaAuthGuard } from "../../../services/can-activate-auth-guard.service";
import { CorpusUpdateUsingFormComponent } from "./corpus-update-using-form.component";

const corpusRegistrationRoutes: Routes = [
    {
        path: 'resourceRegistration/corpus',
        component: CorpusRegistrationComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'resourceRegistration/corpus/searchForPublications',
        component: SearchForPublicationsComponent
    },
    {
        path: 'resourceRegistration/corpus/upload',
        component: CorpusUploadComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'resourceRegistration/corpus/build',
        component: CorpusBuilderComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'resourceRegistration/corpus/form/edit/:id',
        component: CorpusUpdateUsingFormComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    }
];

export const corpusRegistrationRouting: ModuleWithProviders = RouterModule.forChild(corpusRegistrationRoutes);