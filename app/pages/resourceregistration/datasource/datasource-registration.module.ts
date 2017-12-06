/**
 * Created by stefania on 6/7/17.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { datasourceRegistrationRouting } from "./datasource-registration.routing";
import { DatasourceRegistrationComponent } from "./datasource-registration.component";
import { ReusableComponentsModule } from "../../../shared/reusablecomponents/reusable-components.module";


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        datasourceRegistrationRouting,
        ReusableComponentsModule
    ],
    declarations: [
        DatasourceRegistrationComponent
    ],
})

export class DatasourceRegistrationModule {}