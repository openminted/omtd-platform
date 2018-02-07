import { Component, Injector, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import {
    Description,
    domainInfoDesc,
    keywordDesc,
    languageDesc, lexicalConceptualResourceTypeDesc,
    metalanguageInfoDesc
} from "../../../domain/omtd.description";
import { SimpleLanguageTypeForm2 } from "./language-type-form.component";
import { DomainInfoFormControl } from "./domain-info-form";
import { MySingleStringForm } from "./my-string-form.component";
import { Validators } from "@angular/forms";
import { EnumValues, lexicalConceptualResourceTypeEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'lexicalGeneric-form',
    template : `
        <div [formGroup]="group">
            <form-inline [description]="lexicalConceptualResourceTypeDesc">
                <select name="role" class="uk-select" formControlName="lexicalConceptualResourceType">
                    <option *ngFor="let value of lexicalConceptualResourceTypeEnum" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </form-inline>
            <div class="form-group-divider"></div>
        </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class LexicalGenericFormControl extends MyGroup {

    readonly groupDefinition = {
        lexicalConceptualResourceType : ["", Validators.required]
    };

    lexicalConceptualResourceTypeDesc : Description = lexicalConceptualResourceTypeDesc;
    lexicalConceptualResourceTypeEnum : EnumValues[] = lexicalConceptualResourceTypeEnum;

    constructor(injector : Injector) {
        super(injector);
    }
}