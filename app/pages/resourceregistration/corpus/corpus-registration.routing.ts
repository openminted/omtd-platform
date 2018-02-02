/**
 * Created by stefania on 11/24/16.
 */
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CorpusRegistrationComponent } from "./corpus-registration.component";
import { SearchForPublicationsComponent } from "./search-for-publications.component";
import { CorpusUploadComponent } from "./corpus-upload.component";
import { CorpusBuilderComponent } from "./corpus-builder.component";
import { CanActivateViaAuthGuard } from "../../../services/can-activate-auth-guard.service";
import { CorpusUpdateUsingFormComponent } from "./corpus-update-using-form.component";
import { ComingSoonPageComponent } from "../../../shared/reusablecomponents/coming-soon-page.component";

const corpusRegistrationRoutes: Routes = [
    {
        path: 'resourceRegistration/corpus',
        component: CorpusRegistrationComponent,
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
        ],
        data : {resourceType : 'corpus' }
    },
    {
        path: 'resourceRegistration/corpus/xml',
        component: ComingSoonPageComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {title : 'Upload an XML file for your Corpus' }
    },
    {
        path: 'resourceRegistration/corpus/build',
        component: CorpusBuilderComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'corpus' }
    },
    {
        path: 'resourceRegistration/corpus/form/edit/:id',
        component: CorpusUpdateUsingFormComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'corpus', update : true }
    }
];

export const corpusRegistrationRouting: ModuleWithProviders = RouterModule.forChild(corpusRegistrationRoutes);