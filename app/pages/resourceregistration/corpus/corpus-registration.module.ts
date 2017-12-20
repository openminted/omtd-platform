/**
 * Created by stefania on 11/24/16.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

import { ResourceService } from "../../../services/resource.service";
import { corpusRegistrationRouting } from "./corpus-registration.routing";
import { CorpusRegistrationComponent } from "./corpus-registration.component";
import { SearchForPublicationsComponent } from "./search-for-publications.component";
import { ContentConnectorService } from "../../../services/content-connector.service";
import { CorpusRegistrationFormComponent } from "./corpus-registration-form.component";
import { ResourceRegistrationModule } from "../resource-registration.module";
import { AccordionModule, TypeaheadModule } from "ngx-bootstrap";
import { CorpusUploadComponent } from "./corpus-upload.component";
import { CorpusBuilderComponent } from "./corpus-builder.component";
import { ReusableComponentsModule } from "../../../shared/reusablecomponents/reusable-components.module";
import { CorpusUpdateUsingFormComponent } from "./corpus-update-using-form.component";
import { CorpusBaseUsingFormComponent } from "./corpus-base-using-form.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        corpusRegistrationRouting,
        AccordionModule.forRoot(),
        TypeaheadModule.forRoot(),
        ResourceRegistrationModule,
        ReusableComponentsModule
    ],
    declarations: [
        CorpusUploadComponent,
        CorpusRegistrationComponent, 
        SearchForPublicationsComponent,
        CorpusRegistrationFormComponent,
        CorpusBuilderComponent,
        CorpusUpdateUsingFormComponent,
        CorpusBaseUsingFormComponent
    ],
    providers: [
        ResourceService, 
        ContentConnectorService
    ]
})

export class CorpusRegistrationModule {}