/**
 * Created by stefania on 1/19/17.
 */
import {Component, Type} from '@angular/core';
import { MyGroup } from "../myform/my-group.interface";
import {SizeInfoFormControl} from "./sizeInfo.component";
import {Description, sizeInfoDesc, languageDesc} from "../../../domain/omtd.description";
import {LanguageInfoFormControl} from "./languageInfo.component";
import {FormArray} from "@angular/forms";
import {LanguageTypeForm} from "./language-type-form.component";

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

    <form-repeat-inline [component]="sizeInfoType" [parentGroup]="group"
                        [name]="'sizes'" [required]="true" [description]="sizeInfoDesc">

    </form-repeat-inline>
</div>
`,
    styleUrls : ['./templates/common.css']
})

export class CorpusTextPartInfoFormControl extends MyGroup {
    readonly groupDefinition = {
        mediaType : 'text'
    };

    sizeInfoType : Type<any> = SizeInfoFormControl;
    languageInfoType : Type<any> = LanguageTypeForm;

    sizeInfoDesc : Description = sizeInfoDesc;
    languageDesc : Description = Object.assign({},languageDesc);

    ngOnInit() {
        super.ngOnInit();
        this.languageDesc.desc = null;
    }
}