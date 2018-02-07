/**
 * Created by stefania on 10/19/16.
 */
import { Component, OnInit, Type } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Corpus as OMTDCorpus } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { Description, relationTypeDesc, resourceDocumentationInfoDesc } from "../../../domain/omtd.description";
import { ResourceDocumentationFormControl } from "../shared/resourceDocumentationInfo.component";
import { RelationInfoFormControl } from "../shared/relationInfo.component";

@Component({
    selector: 'corpus-registration-form',
    templateUrl: './corpus-registration-form.component.html',
    styleUrls:  ['./corpus-registration-form.component.css', '../shared/templates/common.css'],
})

export class CorpusRegistrationFormComponent implements OnInit {

    myForm: FormGroup;

    tocForm : FormGroup;


    production = process.env.PRODUCTION;

    testValue: any = {
        "corpusInfo": {
            "resourceType": "corpus",
            "distributionInfos": [
                {
                    "sizes": [
                        {
                            "size": "450",
                            "sizeUnit": "KB"
                        }
                    ]
                }
            ],
            "identificationInfo": {
                "public": false,
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
                "version": "1.0.0",
                "revision": ""
            },
            "corpusSubtypeSpecificInfo": {
                "rawCorpusInfo": {
                    "corpusMediaPartsType": {
                        "corpusTextParts": [
                            {
                                "mediaType": "text",
                                "lingualityInfo": {
                                    "lingualityType": "MONOLINGUAL"
                                },
                                "languages": [
                                    {
                                        "language": "fr"
                                    }
                                ]
                            }
                        ]
                    },
                    "corpusSubtype": "rawCorpus"
                }
            },
            "rightsInfo": {
                "rightsStatement": "OPEN_ACCESS",
                "licenceInfos": [
                    {
                        "licence": "CC_BY_4_0"
                    }
                ]
            }
        }
    };

    resourceDocumentationType: Type<any> = ResourceDocumentationFormControl;
    resourceDocumentationDesc : Description = resourceDocumentationInfoDesc;
    relationType : Type<any> = RelationInfoFormControl;
    relationTypeDesc : Description = relationTypeDesc;


    constructor(private _fb: FormBuilder) {
        this.tocForm = _fb.group({
            toc: [!this.production, Validators.requiredTrue]
        })
    }

    loadCorpus(corpus : OMTDCorpus) {
        let temp = JSON.stringify(corpus, (key, value) => {
            return (value == null) ? "" : value
        });
        corpus = JSON.parse(temp);
        this.myForm.patchValue(ResourceService.toForms(corpus));
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            corpusInfo:this._fb.group({
                resourceType : 'corpus',
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
        let ret = {};
        this.setAsTouched_(this.myForm.controls['corpusInfo'] as FormGroup, ret);
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