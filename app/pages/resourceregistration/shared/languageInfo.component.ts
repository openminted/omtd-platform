/**
 * Created by stefania on 1/19/17.
 */
import { Component, Injector } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { Description, sizeInfoDesc } from "../../../domain/omtd.description";

@Component({
    selector: 'languageInfo-form',
    template : `

<div [formGroup]="group">
    <simplelanguageType-form [parentGroup]="group" [name]="'language'" [required]="true"></simplelanguageType-form>
    
    <div class="form-group-divider"></div>
    <form-inline [description]="sizeInfoDesc">
        <sizeInfo-form [parentGroup]="group" [name]="'sizePerLanguage'" [required]="true"></sizeInfo-form>
    </form-inline>
</div>

`,
    styleUrls : ['./templates/common.css']
})

export class LanguageInfoFormControl extends MyGroup {

    readonly groupDefinition = {

    };

    readonly sizeInfoDesc : Description;

    constructor(injector : Injector) {
        super(injector);
        this.sizeInfoDesc = Object.assign({},sizeInfoDesc);
        this.sizeInfoDesc.mandatory = true;
    }
}