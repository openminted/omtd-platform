/**
 * Created by stefania on 6/7/17.
 */
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DatasourceRegistrationComponent } from "./datasource-registration.component";

const datasourceRegistrationRoutes: Routes = [
    {
        path: 'resourceRegistration/dataSource',
        component: DatasourceRegistrationComponent
    },
];

export const datasourceRegistrationRouting: ModuleWithProviders = RouterModule.forChild(datasourceRegistrationRoutes);