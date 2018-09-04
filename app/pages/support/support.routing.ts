/**
 * Created by stefania on 6/7/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliciesComponent } from "./faqs/faqs-policies.component";
import { FAQsComponent } from "./faqs/faqs-legal.component";
import { SupportComponent } from "./support.component";
import { TermsAndConditionsComponent } from "./termsandconditions/terms-and-conditions.component";
import {OperationalLevelAgreementComponent} from "./operationallevelagreement/operational-level-agreement.component";

const supportRoutes: Routes = [
    {
        path: 'support',
        component: SupportComponent,
    },
    {
        path: 'support/faqPolicies',
        component: PoliciesComponent,
    },
    {
        path: 'support/faqLegal',
        component: FAQsComponent,
    },
    {
        path: 'support/termsAndConditions',
        component: TermsAndConditionsComponent,
    },
    {
        path: 'support/operationalLevelAgreement',
        component: OperationalLevelAgreementComponent,
    },
];

export const supportRouting: ModuleWithProviders = RouterModule.forChild(supportRoutes);