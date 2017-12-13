/**
 * Created by stefania on 10/19/16.
 */
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Corpus as OMTDCorpus } from "../../../domain/openminted-model";
import { Observable } from "rxjs/Rx";
import { ResourceService } from "../../../services/resource.service";

@Component({
    selector: 'corpus-registration-form',
    templateUrl: './corpus-registration-form.component.html',
    styleUrls:  ['./corpus-registration-form.component.css'],
})

export class CorpusRegistrationFormComponent implements OnInit {

    @Input('group')
    myForm: FormGroup;

    tocForm : FormGroup;

    @Input('corpus')
    corpus : Observable<OMTDCorpus> = null;

    @Output('corpusForm')
    corpusForm : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    @Output()
    tocValid : EventEmitter<boolean> = new EventEmitter<boolean>();

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

    debugValue : any = {};

    constructor(private _fb: FormBuilder) {
        this.tocForm = _fb.group({
            toc : [false,Validators.requiredTrue]
        })
    }


    private markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            console.log(control);
            control.markAsTouched();
            control.updateValueAndValidity();
            if (control.controls) {
                control.controls.forEach(c => this.markFormGroupTouched(c));
            }
        });
    }

    public markAsTouched() {
        this.markFormGroupTouched(this.myForm);
        this.myForm.markAsTouched();
        this.myForm.updateValueAndValidity();
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
                // distributionInfos : this._fb.array([this._fb.group({})])
            })

        });
        this.myForm.valueChanges.subscribe(corpus => {
            this.corpusForm.emit(this.myForm);
            this.debugValue = ResourceService.removeNulls(this.myForm.value);
        });

        this.tocForm.valueChanges.subscribe(value => {
            this.tocValid.emit(this.tocForm.valid);
        });

        // //TODO remove
        // this.corpus = this.resourceService.getCorpus("rawCorpus_almostall");

        if (this.corpus) {
            this.corpus.subscribe(
                corpus => this.loadCorpus(corpus),
                error => console.log(error));
        }
    }

    testCorpusData : any;

    testCorpus() {
        let temp = JSON.stringify(this.testValue,(key,value)=>{return (value == null) ? "" : value});
        this.testCorpusData = JSON.parse(temp);
        console.log(this.testCorpusData);

        this.myForm.patchValue(this.testCorpusData);
        //setTimeout(this.myForm.patchValue,2000,this.testCorpusData);
    }

    get removeNullValue() {
        return  ResourceService.removeNulls(this.myForm.value || {});
    }
}