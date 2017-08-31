/**
 * Created by stefania on 1/17/17.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {MyGroup} from "../myform/my-group.interface";

@Component({
    selector: 'my-string',
    template : `
    <div [formGroup]="parentForm">
        <div class="col-sm-8 col-md-8" [ngClass]="{'has-error':!parentForm.valid}">
            <input type="text" class="form-control" formControlName="value" placeholder="Name">
        </div>
        <div class="col-sm-1 col-md-1" [hidden]="!hiddenLang">
            <input type="{{ !hiddenLang ? 'hidden' : 'text'}}" class="form-control" formControlName="lang" placeholder="Language">
            <div *ngIf="hiddenLang">
                <a class="remove-element" (click)="toggle()">{{parentForm.controls['lang'].value}} <i
                                    class="fa fa-pencil" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class MyStringFormControl implements OnInit {

    @Input('group')
    public parentForm: FormGroup;


    @Input('required')
    private required : boolean = false;

    private hiddenLang = false;

    ngOnInit() {
    }

    validate(c : AbstractControl) {
    }

    private toggle() {
        this.hiddenLang =!this.hiddenLang;
    }

    constructor(private _fb: FormBuilder) {}

    public static generate(_fb: FormBuilder, validate : boolean = false) {
        let required = (validate) ? ['', Validators.required] : '' ;
        return _fb.group({
            value : required,
            lang : 'en'
        });
    }
}

@Component({
    selector: 'myString',
    template : `
<div [formGroup]="group">
    <!--<div class="form-group" [attr.formGroupName]="isArray ? name : null" [ngClass]="{'has-error':!group.valid}">-->
        <input type="text" class="uk-input" formControlName="value" placeholder="Name">
        <input type="hidden" class="form-control" formControlName="lang" placeholder="Language">
    <!--</div>-->
</div>
    `,
    styleUrls : ['./templates/common.css']
})

export class MyStringFormGroup extends MyGroup {

    public groupDefinition : any = {
        value : ['', Validators.required],
        lang : 'en'
    };
}

@Component({
    selector: 'myStringArea',
    template : `
        <div [formGroup]="group">
            <!--<div class="form-group" [attr.formGroupName]="isArray ? name : null" [ngClass]="{'has-error':!group.valid}">-->
            <textarea type="text" class="uk-textarea" formControlName="value" placeholder="Name"></textarea>
            <input type="hidden" class="form-control" formControlName="lang" placeholder="Language">
            <!--</div>-->
        </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class MyStringAreaFormGroup extends MyGroup {

    public groupDefinition : any = {
        value : ['', Validators.required],
        lang : 'en'
    };
}
