/**
 * Created by stefania on 10/19/16.
 */
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Corpus as OMTDCorpus } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";

@Component({
    selector: 'corpus-registration-form',
    templateUrl: './corpus-registration-form.component.html',
    styleUrls:  ['./corpus-registration-form.component.css'],
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

    constructor(private _fb: FormBuilder) {
        this.tocForm = _fb.group({
            toc: [false, Validators.requiredTrue]
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
        console.log("Not yet implemented");
    }

    public get(path : string) : AbstractControl {
        return this.myForm.get(path);
    }
}