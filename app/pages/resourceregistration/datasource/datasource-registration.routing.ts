/**
 * Created by stefania on 6/7/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatasourceRegistrationComponent } from "./datasource-registration.component";
import {CanActivateViaAuthGuard} from "../../../services/can-activate-auth-guard.service";

const datasourceRegistrationRoutes: Routes = [
    {
        path: 'resourceRegistration/dataSource',
        component: DatasourceRegistrationComponent
    },
];

export const datasourceRegistrationRouting: ModuleWithProviders = RouterModule.forChild(datasourceRegistrationRoutes);