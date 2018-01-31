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
import { lexicalRegistrationRouting } from "./lexical-registration.routing";
import { LexicalRegistrationFormComponent } from "./lexical-registration-form.component";
import { LexicalRegistrationComponent } from "./lexical-registration.component";
import { LexicalUploadComponent } from "./lexical-upload.component";
import { LexicalBaseUsingFormComponent } from "./lexical-base-using-form.component";
import { LexicalUploadXMLComponent } from "./lexical-registration-xml.component";




@NgModule({
    imports: [
        lexicalRegistrationRouting,
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
        LexicalRegistrationFormComponent,
        LexicalRegistrationComponent,
        LexicalUploadComponent,
        LexicalBaseUsingFormComponent,
        LexicalUploadXMLComponent
    ],
    providers: [
        ResourceService
    ]
})

export class LexicalRegistrationModule {}