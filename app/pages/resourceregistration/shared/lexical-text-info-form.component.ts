import { Component, Injector, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import {
    Description,
    domainInfoDesc,
    keywordDesc,
    languageDesc,
    metalanguageInfoDesc
} from "../../../domain/omtd.description";
import { SimpleLanguageTypeForm2 } from "./language-type-form.component";
import { DomainInfoFormControl } from "./domain-info-form";
import { MySingleStringForm } from "./my-string-form.component";

@Component({
    selector: 'lexical-text-info-form',
    template : `
        <div [formGroup]="group">
            <div class="form-group">
                <lingualityInfo-form [parentGroup]="group" [name]="'lingualityInfo'"
                                     [languageCount]="group.get('languages')?.controls.length"></lingualityInfo-form>
            </div>

            <div class="form-group-divider"></div>

            <form-repeat-inline [component]="languageInfoType" [parentGroup]="group"
                                [name]="'languages'" [required]="true" [description]="languageDesc">

            </form-repeat-inline>

            <div class="form-group-divider"></div>

            <form-repeat-inline [component]="languageInfoType" [parentGroup]="group" [initEmpty]="true"
                                [name]="'metalanguages'" [description]="metalanguageDesc">

            </form-repeat-inline>

            <div class="form-group-divider"></div>

            <form-repeat-inline [component]="domainInfoType" [parentGroup]="group" [initEmpty]="true"
                                [name]="'domains'" [description]="domainInfoDesc">

            </form-repeat-inline>

            <div class="form-group-divider"></div>

            <form-repeat-inline [component]="simpleStringType" [parentGroup]="group" [initEmpty]="true"
                                [name]="'keywords'" [description]="keywordDesc">

            </form-repeat-inline>
        </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class LexicalTextInfoFormControl extends MyGroup {

    readonly groupDefinition = {
        mediaType : 'text'
    };

    domainInfoType : Type<any> = DomainInfoFormControl;
    domainInfoDesc : Description = domainInfoDesc;
    languageInfoType : Type<any> = SimpleLanguageTypeForm2;
    languageDesc : Description = Object.assign({},languageDesc);
    metalanguageDesc : Description = metalanguageInfoDesc;
    keywordDesc: Description = Object.assign({}, keywordDesc);
    simpleStringType: Type<any> = MySingleStringForm;

    constructor(injector : Injector) {
        super(injector);
        this.languageDesc.mandatory=true;
        this.keywordDesc.mandatory=false;
        this.metalanguageDesc.mandatory=false;
    }
}