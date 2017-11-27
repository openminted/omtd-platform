/**
 * Created by stefania on 1/18/17.
 */
import { Component, Injector } from '@angular/core';
import {
    Description, contactInfoDesc, contactPointDesc, languageDesc, characterEncodingDesc, processingResourceTypeDesc,
    dataFormatTypeDesc
} from "../../../domain/omtd.description";
import {MyGroup} from "../myform/my-group.interface";
import {MyChoiceComponents} from "../myform/my-choice.interface";
import {AuthenticationService} from "../../../services/authentication.service";
import {Validators} from "@angular/forms";
import {ContactTypeEnum} from "../../../domain/openminted-model";

@Component({
    selector: 'processing-resource-info-form',
    template : `
        <div [formGroup]="group">
            <div>
                <form-inline [description]="processingResourceTypesDesc" [valid]="getMyControl('processingResourceTypes').valid">
                    <div formArrayName="processingResourceTypes">
                        <input type="text" class="uk-input" formControlName="0" placeholder="">
                    </div>
                </form-inline>

                <div class="form-group-divider"></div>

                <form-inline [description]="dataFormatsDesc" [valid]="getMyControl('dataFormats').valid">
                    <div formArrayName="dataFormats">
                        <input type="text" class="uk-input" formControlName="0" placeholder="">
                    </div>
                </form-inline>

                <div class="form-group-divider"></div>

                <form-inline [description]="characterEncodingsDesc" [valid]="getMyControl('characterEncodings').valid">
                    <div formArrayName="characterEncodings">
                        <input type="text" class="uk-input" formControlName="0" placeholder="">
                    </div>
                </form-inline>

                <div class="form-group-divider"></div>

                <form-inline [description]="languagesDesc" [valid]="getMyControl('languages').valid">
                    <div formArrayName="languages">
                        <input type="text" class="uk-input" formControlName="0" placeholder="">
                    </div>
                </form-inline>

                <div class="form-group-divider"></div>
                
            </div>
        </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class ProcessingResourceInfoFormComponent extends MyGroup {

    public groupDefinition = {
        processingResourceTypes : this._fb.array([""]),
        dataFormats : this._fb.array([""]),
        characterEncodings:this._fb.array([""]),
        languages: this._fb.array([""])
    };

    processingResourceTypesDesc :Description = processingResourceTypeDesc;
    dataFormatsDesc :Description = dataFormatTypeDesc;
    characterEncodingsDesc :Description = characterEncodingDesc;
    languagesDesc :Description = languageDesc;

}