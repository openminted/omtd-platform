/**
 * Created by stefania on 11/16/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentLandingPageComponent } from "./component/component-landing-page.component";
import { CorpusLandingPageComponent } from "./corpus/corpus-landing-page.component";
import { LanguageDescriptionLandingPageComponent } from "./languagedescription/language-description-landing-page.component";
import { LexicalConceptualLandingPageComponent } from "./lexicalconceptual/lexical-conceptual-landing-page.component";
import { ModelLandingPageComponent } from "./model/model-landing-page.component";

const landingPageRoutes: Routes = [
    {
        path: 'landingPage/component/:id',
        component: ComponentLandingPageComponent,
        data : {resourceType : 'component' }
    },
    {
        path: 'landingPage/application/:id',
        component: ComponentLandingPageComponent,
        data : {resourceType : 'application' }
    },
    {
        path: 'landingPage/corpus/:id',
        component: CorpusLandingPageComponent,
    },
    {
        path: 'landingPage/language/:id',
        component: LanguageDescriptionLandingPageComponent,
    },
    {
        path: 'landingPage/lexical/:id',
        component: LexicalConceptualLandingPageComponent,
    },
    {
        path: 'landingPage/model/:id',
        component: ModelLandingPageComponent,
    },
];

export const landingPageRouting: ModuleWithProviders = RouterModule.forChild(landingPageRoutes);