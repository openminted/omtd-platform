/**
 * Created by stefania on 1/18/17.
 */
import {Component, Injector, Type} from '@angular/core';
import {
    Description, contactInfoDesc, contactPointDesc, languageDesc, characterEncodingDesc, processingResourceTypeDesc,
    dataFormatTypeDesc, parameterNameDesc, parameterLabelDesc, parameterDescriptionDesc, parameterTypeDesc,
    optionalDesc, multiValueDesc, defaultValueDesc
} from "../../../domain/omtd.description";
import {MyGroup} from "../myform/my-group.interface";
import {MyChoiceComponents} from "../myform/my-choice.interface";
import {AuthenticationService} from "../../../services/authentication.service";
import {Validators} from "@angular/forms";
import {ContactTypeEnum} from "../../../domain/openminted-model";
import {DataFormatInfoFormControl} from "./data-format-info-form.component";
import {MySingleStringForm} from "./my-string-form.component";

@Component({
    selector: 'parameter-info-form',
    template : `
        <div [formGroup]="group">
            <div>
                <form-inline [description]="parameterNameDesc" [valid]="getMyControl('parameterName').valid">
                    <input type="text" class="uk-input" formControlName="parameterName" placeholder="">
                </form-inline>

                <div class="form-group-divider"></div>

                <form-inline [description]="parameterLabelDesc" [valid]="getMyControl('parameterLabel').valid">
                    <input type="text" class="uk-input" formControlName="parameterLabel" placeholder="">
                </form-inline>

                <div class="form-group-divider"></div>

                <form-inline [description]="parameterDescriptionDesc" [valid]="getMyControl('parameterDescription').valid">
                    <input type="text" class="uk-input" formControlName="parameterDescription" placeholder="">
                </form-inline>

                <div class="form-group-divider"></div>

                <form-inline [description]="parameterTypeDesc" [valid]="getMyControl('parameterType').valid">
                    <input type="text" class="uk-input" formControlName="parameterType" placeholder="">
                </form-inline>

                <div class="form-group-divider"></div>

                <form-inline [description]="optionalDesc" [valid]="getMyControl('optional').valid">
                    <label>
                        <input type="checkbox" formControlName="optional" class="uk-checkbox">
                    </label>
                    <!--<input type="text" class="uk-input" formControlName="optional" placeholder="">-->
                </form-inline>

                <div class="form-group-divider"></div>

                <form-inline [description]="multiValueDesc" [valid]="getMyControl('multiValue').valid">
                    <label>
                        <input type="checkbox" formControlName="multiValue" class="uk-checkbox">
                    </label>
                    <!--<input type="text" class="uk-input" formControlName="multiValue" placeholder="">-->
                </form-inline>

                <div class="form-group-divider"></div>
                
                <form-repeat-inline [component]="singleStringType" [parentGroup]="group"
                                    [name]="'defaultValue'" [description]="defaultValueDesc">
                </form-repeat-inline>

                <div class="form-group-divider"></div>
                
                <form-repeat-inline [component]="dataFormatType" [parentGroup]="group"
                                    [name]="'dataFormats'" [description]="dataFormatsDesc">
                </form-repeat-inline>
                

                
                
            </div>
        </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class ParameterInfoFormComponent extends MyGroup {

    public groupDefinition = {
        parameterName : "",
        parameterLabel : "",
        parameterDescription : "",
        parameterType : "",
        optional : "",
        multiValue : "",
        // defaultValue : ""
    };

    singleStringType : Type<any> = MySingleStringForm;
    dataFormatType : Type<any> = DataFormatInfoFormControl;

    parameterNameDesc : Description = parameterNameDesc;
    parameterLabelDesc : Description = parameterLabelDesc;
    parameterDescriptionDesc : Description = parameterDescriptionDesc;
    parameterTypeDesc : Description = parameterTypeDesc;
    optionalDesc : Description = optionalDesc;
    multiValueDesc : Description = multiValueDesc;
    defaultValueDesc : Description = defaultValueDesc;
    dataFormatsDesc : Description = dataFormatTypeDesc;

}