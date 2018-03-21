import { Component, Injector } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { Description, languageDescriptionTypeDesc } from "../../../domain/omtd.description";
import { Validators } from "@angular/forms";
import { EnumValues, languageDescriptionTypeEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'languageGeneric-form',
    template : `
        <div [formGroup]="group">
            <form-inline [description]="languageDescriptionTypeDesc">
                <select name="role" class="uk-select" formControlName="languageDescriptionType">
                    <option *ngFor="let value of languageDescriptionTypeEnum" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </form-inline>
            <div class="form-group-divider"></div>
        </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class LanguageGenericFormControl extends MyGroup {

    readonly groupDefinition = {
        languageDescriptionType : ["", Validators.required]
    };

    languageDescriptionTypeDesc : Description = languageDescriptionTypeDesc;
    languageDescriptionTypeEnum : EnumValues[] = languageDescriptionTypeEnum;

    constructor(injector : Injector) {
        super(injector);
    }
}