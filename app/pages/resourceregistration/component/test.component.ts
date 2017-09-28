/**
 * Created by stefania on 10/6/16.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder} from "@angular/forms";
import {MyChoiceComponents} from "../myform/my-choice.interface";
import {MyStringDescFormGroup} from "../shared/my-string-form.component";
import {contactEmailDesc, contactInfoDesc, Description, personInfoDesc} from "../../../domain/omtd.description";
import {ContactPersonFormControl} from "../shared/contactPerson.component";

@Component({
    selector: 'test-form-component',
    template: `        
        <a (click)="patch()">Click here to patch</a>
        <!--<json-schema-form-->
                <!--[form]="mySchema"-->
                <!--(onSubmit)="log($event)"-->
                <!--framework="bootstrap-3">-->
        <!--</json-schema-form>-->
    
    `,
})

export class TestComponent {

    mySchema = {
        "schema": {
            "type": "object",
            "title": "Comment",
            "properties": {
                "name": {
                    "title": "Name",
                    "type": "string"
                },
                "email": {
                    "title": "Email",
                    "type": "string",
                    "pattern": "^\\S+@\\S+$",
                    "description": "Email will be used for evil."
                },
                "comment": {
                    "title": "Comment",
                    "type": "string",
                    "maxLength": 20,
                    "validationMessage": "Don't be greedy!"
                }
            },
            "required": [
                "name",
                "email",
                "comment"
            ]
        },
        "form": [
            {
                "type": "submit",
                "style": "uk-button uk-button-default",
                "title": "REGISTER COMPONENT"
            },
            {
                type : "section",
                items : [
                    "name",
                    "email"
                ]
            },
            {
                "key": "comment",
                "type": "textarea",
                "placeholder": "Make a comment"
            }
        ]
    };

    public patch() {
        //this.myForm.patchValue(this.patchData);
    }

    public log(data : any) {
        console.log(data);
    }

}