/**
 * Created by stefania on 6/7/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { aboutRouting } from "./about.routing";
import { AboutUsComponent } from "./aboutus/about-us.component";
import { CommunitiesComponent } from "./communitites/communities.component";
import { ReusableComponentsModule } from "../../shared/reusablecomponents/reusable-components.module";



@NgModule({
    imports: [
        CommonModule,
        aboutRouting,
        ReusableComponentsModule
    ],
    declarations: [
        AboutUsComponent,
        CommunitiesComponent
    ],
})

export class AboutModule {}