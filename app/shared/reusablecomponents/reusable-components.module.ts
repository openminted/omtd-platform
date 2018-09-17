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
import { ComingSoonPageComponent } from "./coming-soon-page.component";
import { DownloadComponent } from "./download.component";
import { PaginationDirective } from "./pagination.directive";
import { RouterModule } from "@angular/router";
import { ForbiddenPageComponent } from "./403-forbidden-page.component";
import { reusableComponentsRouting } from "./reusable-components.routing";
import { ShortNumberPipe } from "./short-number.pipe";
import { PromptComponent } from "../prompt.component";
import { CategoryFilterPipe } from "./category-filter.pipe";


const modules = [
    ReadMoreComponent,
    HelpContentComponent,
    AsideHelpContentComponent,
    ConfirmationDialogComponent,
    PromptComponent,
    ComingSoonPageComponent,
    DownloadComponent,
    PaginationDirective,
    ForbiddenPageComponent,
    ShortNumberPipe,
    CategoryFilterPipe
];

@NgModule({
    imports: [
        reusableComponentsRouting,
        BrowserModule,
        CommonModule,
        RouterModule,
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