/**
 * Created by stefania on 4/6/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';

import { ReadMoreComponent } from "./read-more.component";
import { HelpContentComponent, AsideHelpContentComponent } from "./help-content.component";
import { HelpContentService } from "../../services/help-content.service";
import { ConfirmationDialogComponent } from "../confirmation-dialog.component";
import { ModalModule } from "ngx-bootstrap";


const modules = [
    ReadMoreComponent,
    HelpContentComponent,
    AsideHelpContentComponent,
    ConfirmationDialogComponent
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        ModalModule.forRoot(),
    ],
    declarations: [
        ...modules
    ],
    exports: [
        ...modules
    ],
    providers: [
        HelpContentService
    ],
})

export class ReusableComponentsModule {}