/**
 * Created by stefania on 23/02/2018.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorpusBrowserComponent } from "./corpus-browser.component";

const corpusBrowserRoutes: Routes = [
    {
        path: 'corpusBrowser/:id',
        component: CorpusBrowserComponent,
    },
];

export const corpusBrowserRouting: ModuleWithProviders = RouterModule.forChild(corpusBrowserRoutes);