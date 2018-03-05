/**
 * Created by stefania on 23/02/2018.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { corpusBrowserRouting } from "./corpus-browser.routing";
import { ReusableComponentsModule } from "../../shared/reusablecomponents/reusable-components.module";
import { CorpusBrowserComponent } from "./corpus-browser.component";
import { ContentConnectorService } from "../../services/content-connector.service";


@NgModule({
    imports: [
        CommonModule,
        corpusBrowserRouting,
        ReusableComponentsModule
    ],
    declarations: [
        CorpusBrowserComponent,
    ],
    providers: [
        ContentConnectorService
    ]
})

export class CorpusBrowserModule {}