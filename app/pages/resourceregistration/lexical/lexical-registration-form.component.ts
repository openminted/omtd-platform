/**
 * Created by stefanos on 10/19/16.
 */
import { Component, OnInit, Type } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ResourceService } from "../../../services/resource.service";
import { Lexical } from "../../../domain/openminted-model";
import { Description, relationTypeDesc, resourceDocumentationInfoDesc } from "../../../domain/omtd.description";
import { RelationInfoFormControl } from "../shared/relationInfo.component";
import { ResourceDocumentationFormControl } from "../shared/resourceDocumentationInfo.component";

@Component({
    selector: 'lexical-registration-form',
    templateUrl: './lexical-registration-form.component.html',
    styleUrls: ['./lexical-registration-form.component.css', '../shared/templates/common.css'],
})

export class LexicalRegistrationFormComponent implements OnInit {


    myForm: FormGroup;

    production = process.env.PRODUCTION;

    resourceDocumentationType: Type<any> = ResourceDocumentationFormControl;
    resourceDocumentationDesc : Description = resourceDocumentationInfoDesc;
    relationType : Type<any> = RelationInfoFormControl;
    relationTypeDesc : Description = relationTypeDesc;

    testValue: any = {
        "lexicalConceptualResourceInfo": {
            "resourceType": "lexicalConceptualResource",
            "identificationInfo": {
                "resourceShortName": "Stefanos Test Component",
                "resourceNames": [
                    {
                        "value": "Stefanos Test Component",
                        "lang": "en"
                    }
                ],
                "descriptions": [
                    {
                        "value": "Stefanos Test Component",
                        "lang": "en"
                    }
                ]
            },
            "contactInfo": {
                "contactPoint": "stevengatsios@gmail.com",
                "contactType": 1
            },
            "versionInfo": {
                "version": "1.0.0"
            },
            "rightsInfo": {
                "rightsStatement": "OPEN_ACCESS",
                "licenceInfos": [
                    {
                        "licence": "CC_BY_4_0"
                    }
                ]
            },
            "datasetDistributionInfo": {
                "sizes": [
                    {
                        "size": "123",
                        "sizeUnit": "ENTRIES"
                    }
                ],
                "textFormats": [
                    {
                        "dataFormatInfo": {
                            "dataFormat": "APPLICATION_XHTML_XML"
                        }
                    }
                ]
            }
        }
    };

    constructor(private _fb: FormBuilder) {
    }

    loadLexical(lexical : Lexical) {
        let temp = JSON.stringify(lexical, (key, value) => {
            return (value == null) ? "" : value
        });
        lexical = JSON.parse(temp);
        this.myForm.patchValue(ResourceService.toForms(lexical));
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            lexicalConceptualResourceInfo:this._fb.group({
                resourceType : 'lexicalConceptualResource',
            })

        });
    }

    public get debugValue() {
        return ResourceService.removeNulls(this.myForm.value);
    }

    public get formValid() : boolean {
        return this.myForm.valid;
    }

    public get formValue() : any {
        return this.myForm.value;
    }

    public setAsTouched() {
        let ret = {};
        console.log(this.myForm.controls['lexicalConceptualResourceInfo'] as FormGroup);
        this.setAsTouched_(this.myForm.controls['lexicalConceptualResourceInfo'] as FormGroup, ret);
        console.log(ret);
    }

    private setAsTouched_(form : FormGroup, ret : any) {
        Object.keys(form.controls).forEach(control =>{
            let control_ = form.controls[control];
            if( !control_.valid) {
                ret[control] = {};
                if (control_.hasOwnProperty('controls')) {
                    this.setAsTouched_(control_ as FormGroup, ret[control]);
                } else {
                    if (control_.enabled && !control_.valid) {
                        ret[control] = control_.valid;
                        (control_ as FormGroup).markAsDirty();
                        (control_ as FormGroup).markAsTouched();
                        console.log(control, form.controls[control].valid);
                    }
                }
            }
        });
    }

    public get(path : string) : AbstractControl {
        return this.myForm.get(path);
    }
}