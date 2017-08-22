/**
 * Created by stefanos on 16/1/2017.
 */

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { AccordionModule, TypeaheadModule, TooltipModule } from "ngx-bootstrap";
import { MetadataIdentifierFormControl } from "./shared/metadata-identifier-form.component";
import { MetadataHeaderInfoFormControl } from "./shared/metadata-header-info-form.component";
import { ValuesPipe } from "./shared/values-pipe";
import { RelatedCommonsForm, RelatedCommonForm } from "./shared/related-common-form.component";
import { LanguageTypeForm } from "./shared/language-type-form.component";
import { IdentifierFormControl } from "./shared/identifier-common-form.component";
import { MyStringFormControl, MyStringFormGroup } from "./shared/my-string-form.component";
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
import { InlineFormWrapper } from "./myform/my-group.interface";
import { ContactPersonFormControl } from "./shared/contactPerson.component";
import { IdentifierCommonFormControl } from "./shared/identifierCommon.component";
import { ComponentCreationInfoFormControl } from "./shared/componentCreationInfo.component";
import { CorpusTextPartInfoFormControl } from "./shared/corpusTextPartInfo.component";
import { CorpusSubtypeSpecificInfoForm } from "./shared/corpus-subtype-specific-info-form.component";
import { AppModule } from "../../app.module";
import { ReusableComponentsModule } from "../../shared/reusablecomponents/reusable-components.module";


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
        ExampleFormControl,
        MyArrayWrapper,
        ContactPersonFormControl,
        MyInlineArrayWrapper,
        MyStringFormGroup,
        DatasetDistributionLocInfoFormControl,
        IdentifierCommonFormControl,
        ComponentDistributionInfoFormControl,
        DatasetDistributionInfoFormControl,
        CorpusTextPartInfoFormControl,
        LicenseInfoForm,
        SizeInfoFormControl,
        LanguageTypeForm,
        LanguageInfoFormControl
    ],
    declarations: [
        MyArrayWrapper,
        MyStringFormGroup,
        DatasetDistributionLocInfoFormControl,
        InlineFormWrapper,
        CorpusSubtypeSpecificInfoForm,
        MyInlineArrayWrapper,
        ContactPersonFormControl,
        CorpusTextPartInfoFormControl,
        MyArray,
        MyArrayInline,
        ComponentCreationInfoFormControl,
        MyFormDirective,
        ExampleFormControl,
        MetadataIdentifierFormControl,
        MetadataHeaderInfoFormControl,
        VersionFormControl,
        ValuesPipe,
        IdentifierCommonFormControl,
        ComponentGenericFormControl,
        RelatedCommonsForm,
        RelatedCommonForm,
        LanguageTypeForm,
        IdentifierFormControl,
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
        MyArrayWrapper,
        InlineFormWrapper,
        MyArray,
        MyArrayInline,
        MyStringFormGroup,
        MyInlineArrayWrapper,
        VersionFormControl,
        DatasetDistributionLocInfoFormControl,
        ComponentCreationInfoFormControl,
        ContactPersonFormControl,
        ComponentGenericFormControl,
        IdentifierCommonFormControl,
        CorpusTextPartInfoFormControl,
        MyFormDirective,
        ExampleFormControl,
        MetadataIdentifierFormControl,
        MetadataHeaderInfoFormControl,
        ValuesPipe,
        RelatedCommonsForm,
        CorpusSubtypeSpecificInfoForm,
        RelatedCommonForm,
        LanguageTypeForm,
        IdentifierFormControl,
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
        ComponentDistributionsInfoFormControl
    ]
})

export class ResourceRegistrationModule {}
