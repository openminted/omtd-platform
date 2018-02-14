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

    tocForm : FormGroup;


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
        this.tocForm = _fb.group({
            toc: [!this.production, Validators.requiredTrue]
        })
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

    public get tocValid() : boolean{
        return this.tocForm.valid;
    }

    public get formValid() : boolean {
        return this.myForm.valid;
    }

    public get formValue() : any {
        return this.myForm.value;
    }

    public setAsTouched() {
        console.log("Not yet implemented");
    }

    public get(path : string) : AbstractControl {
        return this.myForm.get(path);
    }
}