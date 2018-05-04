/**
 * Created by stefania on 20/04/2018.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenPageComponent } from "./403-forbidden-page.component";

const reusableComponentRoutes: Routes = [
    {
        path: '403-forbidden',
        component: ForbiddenPageComponent,
    },
];

export const reusableComponentsRouting: ModuleWithProviders = RouterModule.forChild(reusableComponentRoutes);