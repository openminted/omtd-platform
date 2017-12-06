/**
 * Created by stefania on 1/19/17.
 */
import { Component, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { Description, keywordDesc, languageDesc, textClassificationInfoDesc } from "../../../domain/omtd.description";
import { SimpleLanguageTypeForm2 } from "./language-type-form.component";
import { MySingleStringForm } from "./my-string-form.component";

@Component({
    selector: 'corpusTextPartInfo-form',
    template : `
<div [formGroup]="group">
    <div class="form-group">
        <lingualityInfo-form [parentGroup]="group" [name]="'lingualityInfo'" 
                             [languageCount]="this.parentGroup.controls['languages']?.controls.length"></lingualityInfo-form>
    </div>

    <div class="form-group-divider"></div>

    <form-repeat-inline [component]="languageInfoType" [parentGroup]="group"
                        [name]="'languages'" [required]="true" [description]="languageDesc">

    </form-repeat-inline>

    <div class="form-group-divider"></div>
    
    <form-repeat [component]="textClassificationInfoType" [parentGroup]="group"
                        [name]="'textClassifications'" [description]="textClassificationInfoDesc">

    </form-repeat>

</div>
`,
    styleUrls : ['./templates/common.css']
})

export class CorpusTextPartInfoFormControl extends MyGroup {
    readonly groupDefinition = {
        mediaType : 'text'
    };

    languageInfoType : Type<any> = SimpleLanguageTypeForm2;
    textClassificationInfoType : Type<any> = TextClassificationInfoFormControl;

    languageDesc : Description = Object.assign({},languageDesc);
    textClassificationInfoDesc : Description = textClassificationInfoDesc;

    ngOnInit() {
        super.ngOnInit();
        this.languageDesc.desc = null;
        this.languageDesc.mandatory = true;
    }
}

@Component({
    selector: 'textClassificationInfoForm-form',
    template : `
        <div [formGroup]="group">
            <form-repeat-inline [component]="simpleStringType" [parentGroup]="group"
                                [name]="'keywords'" [description]="keywordDesc">

            </form-repeat-inline>

            <!--<div class="form-group-divider"></div>-->
            
            <!--<sizeInfo-form [parentGroup]="group" [name]="'sizePerTextClassification'"></sizeInfo-form>-->
            <!--<form-inline [description]="surnameDesc" [valid]="group.valid">-->
                <!--<input type="text" class="uk-input" formControlName="surname" placeholder="Surname">-->
            <!--</form-inline>-->
        </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class TextClassificationInfoFormControl extends MyGroup {
    readonly groupDefinition = {

    };
    keywordDesc : Description = Object.assign({},keywordDesc);
    simpleStringType : Type<any> = MySingleStringForm;

    ngOnInit() {
        super.ngOnInit();
        this.keywordDesc.mandatory = false;
    }
}