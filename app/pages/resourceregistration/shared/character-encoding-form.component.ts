/**
 * Created by stefania on 1/17/17.
 */
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { MyGroup } from "../myform/my-group.interface";
import { characterEncodingEnum, EnumValues } from "../../../domain/omtd.enum";


@Component({
    selector: 'characterEncodingSetFormControl',
    template : `
        <div [formGroup]="group">
            <select name="role" class="uk-select uk-width-2-5" formControlName="entry">
                <option *ngFor="let value of characterEncodingEnum" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                </option>
            </select>
        </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class CharacterEncodingSetFormControl extends MyGroup {

    characterEncodingEnum : EnumValues[] = characterEncodingEnum;
    public groupDefinition : any = {
        entry : ['', Validators.required],
    };
}

