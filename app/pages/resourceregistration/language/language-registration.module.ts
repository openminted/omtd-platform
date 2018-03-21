/**
 * Created by stefania on 10/5/16.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ResourceService } from "../../../services/resource.service";
import { AccordionModule, TypeaheadModule } from "ngx-bootstrap";
import { ResourceRegistrationModule } from "../resource-registration.module";
import { ReusableComponentsModule } from "../../../shared/reusablecomponents/reusable-components.module";
import { AceEditorModule } from "ng2-ace-editor";
import { languageRegistrationRouting } from "./language-registration.routing";
import { LanguageRegistrationFormComponent } from "./language-registration-form.component";
import { LanguageRegistrationComponent } from "./language-registration.component";
import { LanguageUploadComponent } from "./language-upload.component";
import { LanguageBaseUsingFormComponent } from "./language-base-using-form.component";
import { LanguageUploadXMLComponent } from "./language-registration-xml.component";
import { LanguageUpdateUsingFormComponent } from "./language-update-using-form.component";


@NgModule({
    imports: [
        languageRegistrationRouting,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AccordionModule.forRoot(),
        TypeaheadModule.forRoot(),
        ResourceRegistrationModule,
        ReusableComponentsModule,
        AceEditorModule,
    ],
    declarations: [
        LanguageRegistrationFormComponent,
        LanguageRegistrationComponent,
        LanguageUploadComponent,
        LanguageBaseUsingFormComponent,
        LanguageUploadXMLComponent,
        LanguageUpdateUsingFormComponent
    ],
    providers: [
        ResourceService
    ]
})

export class LanguageRegistrationModule {}