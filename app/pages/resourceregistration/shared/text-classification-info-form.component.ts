/**
 * Created by stefania on 1/19/17.
 */
import { Component, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { Description, keywordDesc } from "../../../domain/omtd.description";
import { MySingleStringForm } from "./my-string-form.component";

@Component({
    selector: 'textClassificationInfoForm-form',
    template: `
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
    styleUrls: ['./templates/common.css']
})

export class TextClassificationInfoFormControl extends MyGroup {
    readonly groupDefinition = {};
    keywordDesc: Description = Object.assign({}, keywordDesc);
    simpleStringType: Type<any> = MySingleStringForm;

    ngOnInit() {
        super.ngOnInit();
        this.keywordDesc.mandatory = false;
    }
}