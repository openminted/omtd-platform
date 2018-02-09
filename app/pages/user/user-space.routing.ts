/**
 * Created by stefania on 7/6/17.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from "../../services/can-activate-auth-guard.service";
import { MyCorporaComponent } from "./corpora/my-corpora.component";
import { MyServicesComponent } from "./components/my-services.component";
import { MyOperationsComponent } from "./operations/my-operations.component";
import { MyLexicalsComponent } from "./lexical/my-lexicals.component";
import { MyLanguagesComponent } from "./language/my-languages.component";

const userSpaceRoutes: Routes = [
    {
        path: 'mySpace/corpora',
        component: MyCorporaComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'corpus' }
    },
    {
        path: 'mySpace/components',
        component: MyServicesComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'component' }
    },
    {
        path: 'mySpace/applications',
        component: MyServicesComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'application' }
    },
    {
        path: 'mySpace/lexicals',
        component: MyLexicalsComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'lexical' }
    },
    {
        path: 'mySpace/languages',
        component: MyLanguagesComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        data : {resourceType : 'language' }
    },
    {
        path: 'mySpace/operations',
        component: MyOperationsComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'mySpace/profile',
        component: MyCorporaComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
];

export const userSpaceRouting: ModuleWithProviders = RouterModule.forChild(userSpaceRoutes);