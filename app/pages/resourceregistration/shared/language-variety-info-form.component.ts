/**
 * Created by stefania on 1/19/17.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EnumValues, languageVarietyTypeEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'language-variety-info-form',
    templateUrl : './templates/language-variety-info-form.component.html',
    styleUrls : ['./templates/common.css']
})

export class LanguageVarietyInfoFormControl implements OnInit {

    @Input('group')
    public parentForm: FormGroup;

    @Input('index')
    index: number = -1;

    public myForm : FormGroup;

    languageVarietyTypes: EnumValues[];

    validate(c : AbstractControl) {
        //null otan einai swsto
        // {my_error : "vale kati"} : otan einai lathos
    }

    constructor(private _fb: FormBuilder) {
        this.languageVarietyTypes = languageVarietyTypeEnum;
    }

    public static generate(_fb: FormBuilder) {
        return _fb.group({
            languageVarietyName : '',
            languageVarietyType: '',
            sizePerLanguagevariety: ''
        });
    }

    ngOnInit() {
        this.myForm = LanguageVarietyInfoFormControl.generate(this._fb);
        if(this.index == -1) {
            this.parentForm.addControl("languageVarietyInfo", this.myForm);
        } else {
            this.myForm = this.parentForm;
        }
    }
}