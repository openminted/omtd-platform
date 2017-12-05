/**
 * Created by stefania on 1/18/17.
 */
import {Component, Injector, Type} from '@angular/core';
import {
    Description, contactInfoDesc, contactPointDesc, languageDesc, characterEncodingDesc, processingResourceTypeDesc,
    dataFormatTypeDesc
} from "../../../domain/omtd.description";
import {MyGroup} from "../myform/my-group.interface";
import {MyChoiceComponents} from "../myform/my-choice.interface";
import {AuthenticationService} from "../../../services/authentication.service";
import {Validators} from "@angular/forms";
import {ContactTypeEnum} from "../../../domain/openminted-model";
import {EnumValues, processingResourceTypeEnum} from "../../../domain/omtd.enum";
import {DataFormatInfoFormControl} from "./data-format-info-form.component";
import {MySingleStringForm} from "./my-string-form.component";
import {CharacterEncodingSetFormControl} from "./character-encoding-form.component";
import {SimpleLanguageTypeForm} from "./language-type-form.component";

@Component({
    selector: 'processing-resource-info-form',
    template : `
        <div [formGroup]="group">
            <div>
                <form-inline [description]="processingResourceTypeDesc" [valid]="getMyControl('processingResourceType').valid">
                    <select name="role" class="uk-select" formControlName="processingResourceType">
                        <option *ngFor="let value of processingResourceTypeEnum" [value]="value.key" [selected]="value.key == ''">
                            {{value.value}}
                        </option>
                    </select>
                </form-inline>

                <div class="form-group-divider"></div>

                <form-repeat-inline [component]="dataFormatType" [parentGroup]="group"
                                    [name]="'dataFormats'" [description]="dataFormatsDesc">
                </form-repeat-inline>

                <div class="form-group-divider"></div>

                <form-repeat-inline [component]="characterEncodingSetFormatType" [parentGroup]="group"
                                    [name]="'characterEncodings'" [description]="characterEncodingsDesc">
                </form-repeat-inline>
                
                <!--<form-inline [description]="characterEncodingsDesc" [valid]="getMyControl('characterEncodings').valid">-->
                    <!--<div formArrayName="characterEncodings">-->
                        <!--<form-inline-repeat-wrapper [description]="characterEncodingsDesc">-->
                            <!--<div *ngFor="let cE of getMyControl('characterEncodings').controls; let i = index">-->
                                <!--<input type="text" class="uk-input" formControlName="{{i}}" placeholder="">-->
                            <!--</div>-->
                        <!--</form-inline-repeat-wrapper>-->
                    <!--</div>-->
                <!--</form-inline>-->

                <div class="form-group-divider"></div>

                <form-repeat-inline [component]="languageType" [parentGroup]="group"
                                    [name]="'languages'" [description]="languagesDesc">
                </form-repeat-inline>
                
                <!--<form-inline [description]="languagesDesc" [valid]="getMyControl('languages').valid">-->
                    <!--<div formArrayName="languages">-->
                        <!--<input type="text" class="uk-input" formControlName="0" placeholder="">-->
                    <!--</div>-->
                <!--</form-inline>-->

                <!--<div class="form-group-divider"></div>-->
                
            </div>
        </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class ProcessingResourceInfoFormComponent extends MyGroup {

    public groupDefinition = {
        processingResourceType : "",
        // dataFormats : this._fb.array([""]),
        // characterEncodings:this._fb.array([""]),
        // languages: this._fb.array([""])
    };


    singleStringType : Type<any> = MySingleStringForm;
    dataFormatType : Type<any> = DataFormatInfoFormControl;
    characterEncodingSetFormatType : Type<any> = CharacterEncodingSetFormControl;
    languageType : Type<any> =SimpleLanguageTypeForm;

    processingResourceTypeDesc :Description = processingResourceTypeDesc;
    processingResourceTypeEnum : EnumValues[] = processingResourceTypeEnum;
    dataFormatsDesc :Description = dataFormatTypeDesc;
    characterEncodingsDesc :Description = characterEncodingDesc;
    languagesDesc :Description = languageDesc;

}