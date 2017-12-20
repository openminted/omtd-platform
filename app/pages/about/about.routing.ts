/**
 * Created by stefania on 6/7/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from "./aboutus/about-us.component";
import { CommunitiesComponent } from "./communitites/communities.component";

const aboutRoutes: Routes = [
    {
        path: 'about/aboutUs',
        component: AboutUsComponent,
    },
    {
        path: 'about/communities',
        component: CommunitiesComponent,
    },
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);