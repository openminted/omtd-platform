/**
 * Created by stefanos on 21/11/2016.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Description, revisionDesc} from "../../../domain/omtd.description";
import {EnumValues, personIdentifierSchemeNameEnum} from "../../../domain/omtd.enum";

@Component({
    selector: 'metadata-header-info-form',
    templateUrl : './templates/metadata-header-info-form.component.html',
    styleUrls : ['./templates/common.css']
})


export class MetadataHeaderInfoFormControl implements OnInit{

    revisionDesc : Description;

    @Input('group')
    public parentForm: FormGroup;

    public myForm : FormGroup;

    personEnum : EnumValues[];

    public customClass: string = 'customAccordionPanel';

    public get formGroup() {
        return this.myForm;
    }

    constructor(private _fb: FormBuilder) {
        this.revisionDesc =  revisionDesc;
        this.personEnum = personIdentifierSchemeNameEnum;
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            revision : ''
        });
        this.parentForm.addControl("metadataHeaderInfo", this.myForm);
    }
}