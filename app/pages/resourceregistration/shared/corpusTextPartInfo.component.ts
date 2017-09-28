/**
 * Created by stefania on 1/19/17.
 */
import {Component, Type} from '@angular/core';
import { MyGroup } from "../myform/my-group.interface";
import {SizeInfoFormControl} from "./sizeInfo.component";
import {Description, sizeInfoDesc, languageDesc} from "../../../domain/omtd.description";
import {LanguageInfoFormControl} from "./languageInfo.component";

@Component({
    selector: 'corpusTextPartInfo-form',
    template : `
<div [formGroup]="group">
    <div class="form-group">
        <lingualityInfo-form [parentGroup]="group" [name]="'lingualityInfo'"></lingualityInfo-form>
    </div>

    <div class="form-group-divider"></div>

    <form-repeat [component]="languageInfoType" [parentGroup]="group"
                        [name]="'languages'" [required]="true" [description]="languageDesc">

    </form-repeat>


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
    languageInfoType : Type<any> = LanguageInfoFormControl;

    sizeInfoDesc : Description = sizeInfoDesc;
    languageDesc : Description = languageDesc;
}