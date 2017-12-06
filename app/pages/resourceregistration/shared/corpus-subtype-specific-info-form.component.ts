import { Component, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { TextClassificationInfoFormControl } from "./text-classification-info-form.component";
import {
    corpusTextPartInfoDesc,
    Description, domainInfoDesc,
    languageDesc,
    textClassificationInfoDesc
} from "../../../domain/omtd.description";
import { SimpleLanguageTypeForm2 } from "./language-type-form.component";
import { DomainInfoFormControl } from "./domain-info-form";
/**
 * Created by stefanos on 19/1/2017.
 */

@Component({
    selector: 'corpusSubtypeSpecificInfo-form',
    template: `    
    <div [formGroup]="group">

        <div class="form-group">
            <lingualityInfo-form [parentGroup]="group.get('rawCorpusInfo')" [name]="'lingualityInfo'"
                                 [languageCount]="group.get('rawCorpusInfo.languages')?.controls.length"></lingualityInfo-form>
        </div>

        <div class="form-group-divider"></div>

        <form-repeat-inline [component]="languageInfoType" [parentGroup]="group.get('rawCorpusInfo')"
                            [name]="'languages'" [required]="true" [description]="languageDesc">

        </form-repeat-inline>

        <div class="form-group-divider"></div>

        <form-repeat-inline [component]="domainInfoType" [parentGroup]="group.get('rawCorpusInfo')"
                            [name]="'domains'" [description]="domainInfoDesc">

        </form-repeat-inline>

        <div class="form-group-divider"></div>
        
        <form-repeat [component]="textClassificationInfoType" [parentGroup]="group.get('rawCorpusInfo')"
                     [name]="'textClassifications'" [description]="textClassificationInfoDesc">

        </form-repeat>
        
        
        <!--<form-repeat [component]="textPartType" [parentGroup]="getMyControl('rawCorpusInfo.corpusMediaPartsType')" -->
                            <!--[name]="'corpusTextParts'" [required]="true" [description]="corpusTextPartInfoDesc">-->
        <!--</form-repeat>-->
        
    </div>
`,
    styleUrls: ['./templates/common.css']
})
export class CorpusSubtypeSpecificInfoForm extends MyGroup {

    name = 'corpusSubtypeSpecificInfo';

    groupDefinition = {
        rawCorpusInfo :  this._fb.group({
            // corpusMediaPartsType :  this._fb.group({
            //
            // }),
            corpusSubtype : "rawCorpus",
            mediaType : 'text'
        })
    };

    readonly corpusTextPartInfoDesc : Description = corpusTextPartInfoDesc;
    domainInfoType : Type<any> = DomainInfoFormControl;
    domainInfoDesc : Description = domainInfoDesc;
    languageInfoType : Type<any> = SimpleLanguageTypeForm2;

    languageDesc : Description = Object.assign({},languageDesc);

    textClassificationInfoType : Type<any> = TextClassificationInfoFormControl;
    textClassificationInfoDesc : Description = textClassificationInfoDesc;

    ngOnInit() {
        super.ngOnInit();
        this.languageDesc.desc = null;
        this.languageDesc.mandatory = true;
    }

}