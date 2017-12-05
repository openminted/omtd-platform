/**
 * Created by stefania on 1/19/17.
 */
import {Component, Type} from '@angular/core';
import { MyGroup } from "../myform/my-group.interface";
import {Description, languageDesc} from "../../../domain/omtd.description";
import { SimpleLanguageTypeForm2 } from "./language-type-form.component";

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

</div>
`,
    styleUrls : ['./templates/common.css']
})

export class CorpusTextPartInfoFormControl extends MyGroup {
    readonly groupDefinition = {
        mediaType : 'text'
    };

    languageInfoType : Type<any> = SimpleLanguageTypeForm2;

    languageDesc : Description = Object.assign({},languageDesc);

    ngOnInit() {
        super.ngOnInit();
        this.languageDesc.desc = null;
    }
}