/**
 * Created by stefania on 11/16/16.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ResourceService } from "../../services/resource.service";
import { landingPageRouting } from "./landing-page.routing";
import { ComponentLandingPageComponent } from "./component/component-landing-page.component";
import { CorpusLandingPageComponent } from "./corpus/corpus-landing-page.component";
import { MetadataHeaderInfoComponent } from "./resourceelements/metadata-header-info.component";
import { TabsModule } from "ngx-bootstrap";
import { VersionInfoComponent } from "./resourceelements/version-info.component";
import { ContactInfoComponent } from "./resourceelements/contact-info.component";
import { ValidationInfoComponent } from "./resourceelements/validation-info.component";
import { UsageInfoComponent } from "./resourceelements/usage-info.component";
import { ResourceCreationInfoComponent } from "./resourceelements/resource-creation-info.component";
import { ComponentDistributionInfoComponent } from "./resourceelements/component-distribution-info.component";
import { RightsInfoComponent } from "./resourceelements/rights-info.component";
import { LicenseInfoComponent } from "./resourceelements/license-info.component";
import { ProcessingResourceInfoComponent } from "./resourceelements/processing-resource-info.component";
import { ComponentDependenciesComponent } from "./resourceelements/component-dependencies.component";
import { ResourceDocumentationInfoComponent } from "./resourceelements/resource-documentation-info.component";
import { ComponentEvaluationInfoComponent } from "./resourceelements/component-evaluation-info.component";
import { ComponentCreationInfoComponent } from "./resourceelements/component-creation-info.component";
import { DatasetDistributionInfoComponent } from "./resourceelements/dataset-distribution-info.component";
import { AnnotationInfoComponent } from "./resourceelements/annotation-info.component";
import { CorpusTextPartInfoComponent } from "./resourceelements/corpus-text-part-info.component";
import { AnnotatedCorpusInfoComponent } from "./resourceelements/annotated-corpus-info.component";
import { RawCorpusInfoComponent } from "./resourceelements/raw-corpus-info.component";
import { AnnotationsInfoComponent } from "./resourceelements/annotations-info.component";
import { LanguageDescriptionLandingPageComponent } from "./languagedescription/language-description-landing-page.component";
import { LexicalConceptualLandingPageComponent } from "./lexicalconceptual/lexical-conceptual-landing-page.component";
import { ModelLandingPageComponent } from "./model/model-landing-page.component";
import { ReusableComponentsModule } from "../../shared/reusablecomponents/reusable-components.module";
import { PersonInfoComponent } from "./resourceelements/person-info.component";
import { GroupInfoComponent } from "./resourceelements/group-info.component";
import { CommunicationInfoComponent } from "./resourceelements/communication-info.component";
import { OrganizationInfoComponent } from "./resourceelements/organisation-info.component";
import { ComponentExecutionInfoComponent } from "./resourceelements/component-execution-info.component";
import { FunctionInfoComponent } from "./resourceelements/function-info.component";
import { RelationInfoComponent } from "./resourceelements/relation-info.component";
import { DomainsInfoComponent } from "./resourceelements/domains-info.component";
import { KeywordsInfoComponent } from "./resourceelements/keywords-info.component";
import { ResourceCreationInfoShortComponent } from "./resourceelements/resource-creation-info-short.component";
import { SlickModule } from "ngx-slick";
import { MultilingualityTypeAndLanguagesComponent } from "./resourceelements/multilinguality-type-and-languages.component";
import { TextFormatsAndCharacterEncodingsComponent } from "./resourceelements/text-formats-and-character-encodings.component";
import { MetalanguagesInfoComponent } from "./resourceelements/metalanguages-info.component";

@NgModule({
    imports: [
        CommonModule,
        landingPageRouting,
        TabsModule.forRoot(),
        ReusableComponentsModule,
        SlickModule.forRoot()
    ],
    declarations: [
        ComponentLandingPageComponent,
        CorpusLandingPageComponent,
        LanguageDescriptionLandingPageComponent,
        LexicalConceptualLandingPageComponent,
        ModelLandingPageComponent,
        MetadataHeaderInfoComponent, 
        VersionInfoComponent, 
        ContactInfoComponent, 
        ValidationInfoComponent,
        UsageInfoComponent, 
        ResourceCreationInfoComponent, 
        ResourceDocumentationInfoComponent, 
        ComponentDistributionInfoComponent, 
        RightsInfoComponent,
        LicenseInfoComponent, 
        ProcessingResourceInfoComponent, 
        ComponentDependenciesComponent, 
        ComponentEvaluationInfoComponent,
        ComponentCreationInfoComponent, 
        DatasetDistributionInfoComponent,
        AnnotationInfoComponent,
        CorpusTextPartInfoComponent, 
        AnnotatedCorpusInfoComponent, 
        RawCorpusInfoComponent,
        AnnotationsInfoComponent,
        PersonInfoComponent,
        GroupInfoComponent,
        CommunicationInfoComponent,
        OrganizationInfoComponent,
        ComponentExecutionInfoComponent,
        FunctionInfoComponent,
        RelationInfoComponent,
        DomainsInfoComponent,
        KeywordsInfoComponent,
        ResourceCreationInfoShortComponent,
        MultilingualityTypeAndLanguagesComponent,
        TextFormatsAndCharacterEncodingsComponent,
        MetalanguagesInfoComponent
    ],
    providers: [
        ResourceService
    ],
    exports: [
        ResourceCreationInfoShortComponent,
        FunctionInfoComponent
    ]
})

export class LandingPageModule {}