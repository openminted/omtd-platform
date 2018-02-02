/**
 * Created by stefania on 02/02/2018.
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ResourceService } from "../../../services/resource.service";
import { AccordionModule, TypeaheadModule } from "ngx-bootstrap";
import { ResourceRegistrationModule } from "../resource-registration.module";
import { ReusableComponentsModule } from "../../../shared/reusablecomponents/reusable-components.module";
import { AceEditorModule } from "ng2-ace-editor";
import { languageDescriptionRegistrationRouting } from "./language-description-registration.routing";
import { LanguageDescriptionRegistrationComponent } from "./language-description-registration.component";

@NgModule({
    imports: [
        languageDescriptionRegistrationRouting,
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
        LanguageDescriptionRegistrationComponent,
    ],
    providers: [
        ResourceService
    ]
})

export class LanguageDescriptionRegistrationModule {}
