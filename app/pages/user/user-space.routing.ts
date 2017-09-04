/**
 * Created by stefania on 7/6/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from "../../services/can-activate-auth-guard.service";
import { MyCorporaComponent } from "./corpora/my-corpora.component";
import { MyServicesComponent } from "./components/my-services.component";
import { MyOperationsComponent } from "./operations/my-operations.component";

const userSpaceRoutes: Routes = [
    {
        path: 'mySpace/corpora',
        component: MyCorporaComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
    },
    {
        path: 'mySpace/services',
        component: MyServicesComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ]
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