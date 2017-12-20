/**
 * Created by stefania on 6/7/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { supportRouting } from "./support.routing";
import { PoliciesComponent } from "./faqs/faqs-policies.component";
import { FAQsComponent } from "./faqs/faqs-legal.component";
import { FAQService } from "../../services/faq.service";
import { ReusableComponentsModule } from "../../shared/reusablecomponents/reusable-components.module";
import { SupportComponent } from "./support.component";

    
@NgModule({
    imports: [
        CommonModule,
        supportRouting,
        ReusableComponentsModule
    ],
    declarations: [
        PoliciesComponent,
        FAQsComponent,
        SupportComponent
    ],
    providers: [
        FAQService
    ]
})

export class SupportModule {}