/**
 * Created by stefania on 7/6/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceService } from "../../services/resource.service";
import { userSpaceRouting } from "./user-space.routing";
import { MyCorporaComponent } from "./corpora/my-corpora.component";
import { MyServicesComponent } from "./components/my-services.component";
import { ReusableComponentsModule } from "../../shared/reusablecomponents/reusable-components.module";
import { MyOperationsComponent } from "./operations/my-operations.component";
import { MyLexicalsComponent } from "./lexical/my-lexicals.component";
import { MyLanguagesComponent } from "./language/my-languages.component";
import { MyResourceComponent } from "./my-resource.component";
import { DisplayResourceDirective } from "./display-resource.directive";
import { MyResourceWrapper } from "./my-resource-wrapper.component";

@NgModule({
    imports: [
        CommonModule,
        userSpaceRouting,
        ReusableComponentsModule
    ],
    declarations: [
        MyCorporaComponent,
        MyServicesComponent,
        MyOperationsComponent,
        MyLexicalsComponent,
        MyLanguagesComponent,
        MyResourceComponent,
        DisplayResourceDirective,
        MyResourceWrapper
    ],
    providers: [
        ResourceService
    ]
})

export class UserSpaceModule {}