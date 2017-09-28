///<reference path="../../../../node_modules/@angular/forms/src/model.d.ts"/>
/**
 * Created by stefanos on 22/11/2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
import {Description, personIdentifierDesc} from "../../../domain/omtd.description";
import {EnumValues} from "../../../domain/omtd.enum";
import {IdentifierFormControl} from "./identifier-common-form.component";
import {MyStringFormControl} from "./my-string-form.component";


@Component({
    selector: 'related-commons',
    template : `
    
<div [formGroup]="formArray">
    <div *ngFor="let c of formArray.controls; let i=index" class="group">
        <div class="form-group">
            <div class="col-md-offset-2 col-sm-offset-2 col-sm-10 col-md-10">
                <div class="group-label">
                    <span>{{topLabel}}</span>
                    <a class="remove-element" (click)="delete_creator(i)">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div> 
        <div formGroupName="{{i}}">
            <related-common [personEnum]="schemeEnum" [group]="c" [personLabel]="label" [index]="i" [type]="type"></related-common>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-md-offset-2 col-sm-9 col-md-9">
            <a class="add-new-element add-new-group" (click)="add_new()"><i class="fa fa-plus" aria-hidden="true"></i>
                Add New {{label}}</a>
        </div>
    </div>
</div>
`,
    styleUrls : ['./templates/common.css']
})
export class RelatedCommonsForm implements OnInit{

    @Input('group')
    public parentForm: FormGroup;

    @Input('name')
    name : string;

    @Input('type')
    type : string;

    @Input('schemeEnum')
    schemeEnum : EnumValues[];

    @Input('topLabel')
    topLabel : string;

    @Input('required')
    required : boolean = false;

    @Input('label')
    label : string;

    // private myForm : FormGroup;
    formArray : FormArray;

    public add_new() {
        this.formArray.push(RelatedCommonForm.generate(this._fb,this.type,this.required));
    }

    public delete_creator(i : number) {
        this.formArray.removeAt(i);
    }

    constructor(private _fb: FormBuilder) {

    }

    ngOnInit() {
        // this.myForm = this._fb.group(this._fb.array([]));
        this.formArray = this._fb.array([RelatedCommonForm.generate(this._fb,this.type,this.required)]);
        this.parentForm.addControl(this.name,this.formArray);

        var self = this;
        this.formArray.patchValue = (value: {[key: string]: any}, {onlySelf, emitEvent}: {onlySelf?: boolean, emitEvent?: boolean} = {}) =>{
            for(var i = self.formArray.length; i < Object.keys(value).length; i++ ) {
                    self.add_new();
            }
            Object.keys(value).forEach(name => {
                if (self.formArray.controls[name]) {
                    self.formArray.controls[name].patchValue(value[name], {onlySelf: true, emitEvent});
                }
            });
            self.formArray.updateValueAndValidity({onlySelf, emitEvent});
        }
    }
}


@Component({
    selector: 'related-common',
    templateUrl : './templates/related-common-form.component.html',
    styleUrls : ['./templates/common.css']
})
export class RelatedCommonForm implements OnInit{

    @Input('group')
    public parentForm: FormGroup;

    @Input('personLabel')
    personLabel : string;

    @Input('index')
    index : number;

    @Input('personEnum')
    personEnum : EnumValues[];

    @Input('type')
    type : string;


    myFormPerson : FormArray;

    myFormIdentifier : FormArray;

    relatedPerson : Description;
    relatedPersonIdentifier : Description;

    radioButton : string[] = ["Names","Identifiers"];
    radioButtonSelected : string;

    personDesc : Description;

    constructor(private _fb: FormBuilder) {
        this.relatedPersonIdentifier = personIdentifierDesc;
        this.radioButtonSelected = this.radioButton[0];
        this.personDesc = personIdentifierDesc;
    }

    public static newPerson(_fb : FormBuilder, type : string, schemeName? : string, validate : boolean = true) : any {
        let required = (validate) ? ['', Validators.required] : '' ;
        if(type=="Names") {
            return MyStringFormControl.generate(_fb);
        } else if (type === "Identifiers"){
            return _fb.group(IdentifierFormControl.generate(schemeName,validate));
        }
    }


    public applyChanges() {
        if(this.radioButtonSelected == "Names") {
            this.parentForm.removeControl(this.type + 'Identifiers');
            this.parentForm.addControl(this.type + 'Names',this.myFormPerson);
        } else if(this.radioButtonSelected == "Identifiers") {
            this.parentForm.removeControl(this.type + 'Names');
            this.parentForm.addControl(this.type + 'Identifiers',this.myFormIdentifier);
        }

    }
    public changeType(choice: string) :void {
        if (this.radioButtonSelected !== choice) {
            this.radioButtonSelected = choice;
            this.applyChanges();
        }
    }

    public deletePerson(type:string, i : number) : void {
        if(type=="Names") {
            const control = <FormArray>this.parentForm.controls[this.type + 'Names'];
            control.removeAt(i);
        } else if (type === "Identifiers"){
            const control = <FormArray>this.parentForm.controls[this.type + 'Identifiers'];
            control.removeAt(i);
        }
    }

    public addNew(type : string) : void {
        if(type=="Names") {
            const control = <FormArray>this.parentForm.controls[this.type + 'Names'];
            control.push(
                RelatedCommonForm.newPerson(this._fb,this.radioButtonSelected,this.type + "IdentifierSchemeName")
            );
        } else if (type === "Identifiers"){
            const control = <FormArray>this.parentForm.controls[this.type + 'Identifiers'];
            control.push(
                RelatedCommonForm.newPerson(this._fb,this.radioButtonSelected, this.type + "IdentifierSchemeName")
            );
        }


    }

    public static generate(_fb: FormBuilder, type : string,validate : boolean = true) {
        const group = {};
        group[type + 'Names'] = _fb.array([RelatedCommonForm.newPerson(_fb,'Names','',validate)]);
        group[type + "Identifiers"] = _fb.array([RelatedCommonForm.newPerson(_fb,"Identifiers",type + "IdentifierSchemeName",validate)]);
        return _fb.group(group);
    }

    ngOnInit() {
        this.myFormPerson = <FormArray>this.parentForm.get(this.type + 'Names');
        this.myFormIdentifier = <FormArray>this.parentForm.get(this.type + 'Identifiers');
        this.applyChanges();
        var self = this;
        this.parentForm.patchValue =(value: {[key: string]: any}, {onlySelf, emitEvent}: {onlySelf?: boolean, emitEvent?: boolean} = {}) =>{
            Object.keys(value).forEach(name => {
                const control = <FormArray>this.parentForm.controls[this.type + 'Names'];
                for(var i = control.length;i < value[name].length; i++) {
                    self.addNew(name);
                }
            });
            Object.keys(value).forEach(name => {
                if (self.parentForm.controls[name]) {
                    self.parentForm.controls[name].patchValue(value[name], {onlySelf: true, emitEvent});
                }
            });
            self.parentForm.updateValueAndValidity({onlySelf, emitEvent});
        }

    }
}