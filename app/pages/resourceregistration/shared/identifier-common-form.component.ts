/**
 * Created by stefanos on 5/12/2016.
 */

import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray, AbstractControl} from '@angular/forms';
import {Description, metadataIdentifierTypeDesc} from "../../../domain/omtd.description";
import {EnumValues} from "../../../domain/omtd.enum";

@Component({
    selector: 'identifier-common',
    templateUrl : './templates/identifier-common-form.component.html',
    styleUrls : ['./templates/common.css']
})
export class IdentifierFormControl implements OnInit{

    revisionDesc : Description;

    @Input('group')
    public parentForm: FormGroup;

    @Input('control-name')
    name : string;


    @Input('scheme-name')
    schemeName : string;

    @Input('scheme-desc')
    public schemeUriDesc : Description;

    @Input('scheme-values')
    public schemeUriValues : EnumValues;

    @Input('label')
    label : string;

    @Input('index')
    index: number = -1;

    @Input('required')
    required: boolean = false;

    identifierDesc : Description;

    identifierSchemeDesc : Description;

    public myForm : FormGroup;


    public static generate(schemeName : string,validate : boolean = true) {
        let required = (validate) ? ['', Validators.required] : '' ;
        var temporary = {
            value : required,
            schemeURI : ''
        };
        temporary[schemeName] = required;
        return temporary;
    }

    constructor(private _fb: FormBuilder) {

        this.identifierDesc = metadataIdentifierTypeDesc;
        this.identifierDesc.label = "Identifier";
        this.schemeUriDesc = {desc: "Any URI", label: "URI"};
        this.identifierSchemeDesc = {desc : "Enum" , label : "One of the options"};
    }

    ngOnInit() {
        this.myForm = this._fb.group(IdentifierFormControl.generate(this.schemeName,this.required));
        if(this.index == -1) {
            this.parentForm.addControl(this.name, this.myForm);
        } else {
            this.myForm = this.parentForm;
        }
    }
}