/**
 * Created by stefanos on 16/1/2017.
 */

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { AccordionModule, TypeaheadModule, TooltipModule } from "ngx-bootstrap";
import { MetadataHeaderInfoFormControl } from "./shared/metadata-header-info-form.component";
import { ValuesPipe } from "./shared/values-pipe";
import {LanguageTypeForm, SimpleLanguageTypeForm, SimpleLanguageTypeForm2} from "./shared/language-type-form.component";
import {
    MySimpleStringControl, MySingleStringForm,
    MyStringAreaFormGroup, MyStringArrayFormGroup, MyStringDescFormGroup, MyStringFormControl,
    MyStringFormGroup
} from "./shared/my-string-form.component";
import { IdentificationInfoFormControl } from "./shared/identification-info-form.component";
import { EnumCommonForm } from "./shared/enum-common-form";
import { ContactInfoFormControl } from "./shared/contact-info-form.component";
import { SizeInfoFormControl } from "./shared/sizeInfo.component";
import { LingualityInfoFormControl } from "./shared/lingualityInfo.component";
import { RightsInfoForm, LicenseInfoForm } from "./shared/rights-info-form.component";
import { LanguageVarietyInfoFormControl } from "./shared/language-variety-info-form.component";
import { LanguageInfoFormControl } from "./shared/languageInfo.component";
import {
    DatasetDistributionInfoFormControl, DatasetDistributionLocInfoFormControl,
    DatasetDistributionsInfoFormControl
} from "./shared/datasetDistributionInfo.component";
import { ZipUploadComponent } from "./shared/zip-upload-form.component";
import { ComponentDistributionInfoFormControl, ComponentDistributionsInfoFormControl } from "./shared/componentDistributionInfo";
import { ExampleFormControl } from "./shared/example.component";
import { MyArray, MyArrayInline, MyArrayWrapper, MyInlineArrayWrapper } from "./myform/my-array.interface";
import { MyFormDirective } from "./myform/my-form.directive";
import { VersionFormControl } from "./shared/versionInfo.component";
import { ComponentGenericFormControl } from "./shared/componentGeneric.component";
import {InlineFormWrapper, MyGroup} from "./myform/my-group.interface";
import {ContactPersonFormControl} from "./shared/contactPerson.component";
import { IdentifierCommonFormControl } from "./shared/identifierCommon.component";
import { ComponentCreationInfoFormControl } from "./shared/componentCreationInfo.component";
import { CorpusTextPartInfoFormControl } from "./shared/corpusTextPartInfo.component";
import { CorpusSubtypeSpecificInfoForm } from "./shared/corpus-subtype-specific-info-form.component";
import { ReusableComponentsModule } from "../../shared/reusablecomponents/reusable-components.module";
import {MyChoice, MyChoiceWrapper} from "./myform/my-choice.interface";
import {RawCorpusInfoFormControl} from "./shared/raw-corpus-info-form.component";
import {DistributionMedium, DistributionMediums} from "./shared/distribution-mediums.component";
import {ProcessingResourceInfoFormComponent} from "./shared/processing-resource-info-form.component";
import {ParameterInfoFormComponent} from "./shared/parameter-info-form.component";
import {AccordionComponent} from "./shared/accordion-section.component";
import {DataFormatInfoFormControl} from "./shared/data-format-info-form.component";
import {CharacterEncodingSetFormControl} from "./shared/character-encoding-form.component";
import {TextFormatInfoFormControl} from "./shared/text-format-info-form.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TooltipModule.forRoot(),
        // AccordionModule.forRoot(),
        TypeaheadModule.forRoot(),
        ReusableComponentsModule
    ],
    entryComponents: [
        TextFormatInfoFormControl,
        SimpleLanguageTypeForm,
        SimpleLanguageTypeForm2,
        CharacterEncodingSetFormControl,
        DataFormatInfoFormControl,
        ExampleFormControl,
        MyArrayWrapper,
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
        CorpusTextPartInfoFormControl,
        LicenseInfoForm,
        SizeInfoFormControl,
        MyStringDescFormGroup,
        LanguageTypeForm,
        LanguageInfoFormControl,
        MySingleStringForm
    ],
    declarations: [
        TextFormatInfoFormControl,
        SimpleLanguageTypeForm,
        SimpleLanguageTypeForm2,
        CharacterEncodingSetFormControl,
        MySingleStringForm,
        MyGroup,
        MyArrayWrapper,
        MyStringFormGroup,
        MyStringAreaFormGroup,
        ProcessingResourceInfoFormComponent,
        DatasetDistributionLocInfoFormControl,
        InlineFormWrapper,
        ParameterInfoFormComponent,
        CorpusSubtypeSpecificInfoForm,
        MyInlineArrayWrapper,
        ContactPersonFormControl,
        CorpusTextPartInfoFormControl,
        MyArray,
        MyArrayInline,
        MyChoice,
        MyChoiceWrapper,
        DataFormatInfoFormControl,
        ComponentCreationInfoFormControl,
        MyFormDirective,
        ExampleFormControl,
        RawCorpusInfoFormControl,
        DistributionMediums,
        DistributionMedium,
        MyStringArrayFormGroup,
        MySimpleStringControl,
        MetadataHeaderInfoFormControl,
        VersionFormControl,
        ValuesPipe,
        AccordionComponent,
        MyStringDescFormGroup,
        IdentifierCommonFormControl,
        ComponentGenericFormControl,
        LanguageTypeForm,
        DatasetDistributionInfoFormControl,
        DatasetDistributionsInfoFormControl,
        MyStringFormControl,
        IdentificationInfoFormControl,
        EnumCommonForm,
        ContactInfoFormControl,
        SizeInfoFormControl,
        LingualityInfoFormControl,
        ContactInfoFormControl,
        RightsInfoForm,
        LicenseInfoForm,
        LanguageVarietyInfoFormControl,
        LanguageInfoFormControl, 
        ZipUploadComponent,
        ComponentDistributionInfoFormControl,
        ComponentDistributionsInfoFormControl,
    ],
    
    exports: [
        TextFormatInfoFormControl,
        SimpleLanguageTypeForm,
        SimpleLanguageTypeForm2,
        CharacterEncodingSetFormControl,
        MyArrayWrapper,
        InlineFormWrapper,
        MyArray,
        MyGroup,
        MyArrayInline,
        MyStringFormGroup,
        MyInlineArrayWrapper,
        MyChoice,
        MyChoiceWrapper,
        VersionFormControl,
        MyStringAreaFormGroup,
        MyStringDescFormGroup,
        MyStringArrayFormGroup,
        DataFormatInfoFormControl,
        ParameterInfoFormComponent,
        DatasetDistributionLocInfoFormControl,
        ComponentCreationInfoFormControl,
        ContactPersonFormControl,
        ProcessingResourceInfoFormComponent,
        ComponentGenericFormControl,
        IdentifierCommonFormControl,
        CorpusTextPartInfoFormControl,
        MyFormDirective,
        ExampleFormControl,
        MetadataHeaderInfoFormControl,
        ValuesPipe,
        AccordionComponent,
        CorpusSubtypeSpecificInfoForm,
        LanguageTypeForm,
        MySimpleStringControl,
        DatasetDistributionInfoFormControl,
        DatasetDistributionsInfoFormControl,
        MyStringFormControl,
        IdentificationInfoFormControl,
        EnumCommonForm,
        ContactInfoFormControl,
        SizeInfoFormControl,
        LingualityInfoFormControl,
        ContactInfoFormControl,
        RightsInfoForm,
        LicenseInfoForm,
        LanguageVarietyInfoFormControl,
        LanguageInfoFormControl, 
        ZipUploadComponent,
        ComponentDistributionInfoFormControl,
        ComponentDistributionsInfoFormControl,
        MySingleStringForm
    ]
})

export class ResourceRegistrationModule {}
