/**
 * Created by stefanos on 16/1/2017.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TooltipModule, TypeaheadModule } from "ngx-bootstrap";
import { MetadataHeaderInfoFormControl } from "./shared/metadata-header-info-form.component";
import { ValuesPipe } from "./shared/values-pipe";
import {
    SimpleLanguageTypeForm,
    SimpleLanguageTypeForm2
} from "./shared/language-type-form.component";
import {
    MySimpleStringControl,
    MySingleStringForm,
    MyStringAreaFormGroup,
    MyStringArrayFormGroup,
    MyStringDescFormGroup,
    MyStringFormControl,
    MyStringFormGroup
} from "./shared/my-string-form.component";
import { IdentificationInfoFormControl } from "./shared/identification-info-form.component";
import { EnumCommonForm } from "./shared/enum-common-form";
import { ContactInfoFormControl } from "./shared/contact-info-form.component";
import { SizeInfoFormControl } from "./shared/sizeInfo.component";
import { LingualityInfoFormControl } from "./shared/lingualityInfo.component";
import { LicenseInfoForm, RightsInfoForm } from "./shared/rights-info-form.component";
import { LanguageVarietyInfoFormControl } from "./shared/language-variety-info-form.component";
import { LanguageInfoFormControl } from "./shared/languageInfo.component";
import {
    DatasetDistributionInfoFormControl,
    DatasetDistributionLocInfoFormControl,
    DatasetDistributionsInfoFormControl
} from "./shared/datasetDistributionInfo.component";
import { ZipUploadComponent } from "./shared/zip-upload-form.component";
import {
    ComponentDistributionInfoFormControl,
    ComponentDistributionsInfoFormControl
} from "./shared/componentDistributionInfo";
import { ExampleFormControl } from "./shared/example.component";
import { MyArray, MyArrayInline, MyArrayWrapper, MyInlineArrayWrapper } from "./myform/my-array.interface";
import { MyFormDirective } from "./myform/my-form.directive";
import { VersionFormControl } from "./shared/versionInfo.component";
import { ComponentGenericFormControl } from "./shared/componentGeneric.component";
import { InlineFormWrapper, MyGroup } from "./myform/my-group.interface";
import { ContactPersonFormControl } from "./shared/contactPerson.component";
import { IdentifierCommonFormControl } from "./shared/identifierCommon.component";
import { ComponentCreationInfoFormControl } from "./shared/componentCreationInfo.component";
import {
    TextClassificationInfoFormControl
} from "./shared/text-classification-info-form.component";
import { CorpusSubtypeSpecificInfoForm } from "./shared/corpus-subtype-specific-info-form.component";
import { ReusableComponentsModule } from "../../shared/reusablecomponents/reusable-components.module";
import { MyChoice, MyChoiceWrapper } from "./myform/my-choice.interface";
import { RawCorpusInfoFormControl } from "./shared/raw-corpus-info-form.component";
import { DistributionMedium, DistributionMediums } from "./shared/distribution-mediums.component";
import { ProcessingResourceInfoFormComponent } from "./shared/processing-resource-info-form.component";
import { ParameterInfoFormComponent } from "./shared/parameter-info-form.component";
import { AccordionComponent } from "./shared/accordion-section.component";
import { DataFormatInfoFormControl } from "./shared/data-format-info-form.component";
import { CharacterEncodingSetFormControl } from "./shared/character-encoding-form.component";
import { TextFormatInfoFormControl } from "./shared/text-format-info-form.component";
import { DomainInfoFormControl } from "./shared/domain-info-form";
import { TreeModule } from "angular-tree-component";
import { LexicalGenericFormControl } from "./shared/lexical-generic-info-form.component";
import { LexicalTextInfoFormControl } from "./shared/lexical-text-info-form.component";

const entryComponents = [
    DomainInfoFormControl,
    TextClassificationInfoFormControl,
    TextFormatInfoFormControl,
    SimpleLanguageTypeForm,
    SimpleLanguageTypeForm2,
    CharacterEncodingSetFormControl,
    DataFormatInfoFormControl,
    ExampleFormControl,
    MyArrayWrapper,
    ContactInfoFormControl,
    MyChoice,
    MyChoiceWrapper,
    ContactPersonFormControl,
    ParameterInfoFormComponent,
    MyInlineArrayWrapper,
    MyStringFormGroup,
    MyStringArrayFormGroup,
    DatasetDistributionLocInfoFormControl,
    MyStringAreaFormGroup,
    IdentifierCommonFormControl,
    ComponentDistributionInfoFormControl,
    DatasetDistributionInfoFormControl,
    LicenseInfoForm,
    SizeInfoFormControl,
    MyStringDescFormGroup,
    LanguageInfoFormControl,
    MySingleStringForm
];

const declarations = [
    ...entryComponents,
    AccordionComponent,
    ComponentCreationInfoFormControl,
    ComponentDistributionsInfoFormControl,
    ComponentGenericFormControl,
    CorpusSubtypeSpecificInfoForm,
    DatasetDistributionsInfoFormControl,
    DistributionMedium,
    DistributionMediums,
    EnumCommonForm,
    IdentificationInfoFormControl,
    InlineFormWrapper,
    LanguageVarietyInfoFormControl,
    LingualityInfoFormControl,
    MetadataHeaderInfoFormControl,
    MyArray,
    MyArrayInline,
    MyFormDirective,
    MyGroup,
    MySimpleStringControl,
    MyStringFormControl,
    ProcessingResourceInfoFormComponent,
    RawCorpusInfoFormControl,
    RightsInfoForm,
    ValuesPipe,
    VersionFormControl,
    ZipUploadComponent,
    LexicalGenericFormControl,
    LexicalTextInfoFormControl
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TooltipModule.forRoot(),
        TypeaheadModule.forRoot(),
        ReusableComponentsModule,
        TreeModule
    ],
    entryComponents: [
        ...entryComponents
    ],
    declarations: [
        ...declarations
    ],
    
    exports: [
        ...declarations
    ]
})

export class ResourceRegistrationModule {}
