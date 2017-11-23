/**
 * Created by stefania on 10/19/16.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Corpus as OMTDCorpus } from "../../../domain/openminted-model";
import { Observable } from 'rxjs/Rx';
import {ResourceService} from "../../../services/resource.service";

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
            "contactInfo": {
                "contactEmail": "stevengatsios@gmail.com",
                "contactGroups": [],
                "contactPersons": [{
                    "affiliations": [],
                    "communicationInfo": {
                        "emails": ["stevengatsios@gmail.com"],
                        "faxNumbers": [],
                        "homepages": [],
                        "postalAddress": null,
                        "telephoneNumbers": []
                    },
                    "names": [{"lang": "en", "value": "Steve Gatsios"}, {"lang": "en", "value": "Gatsios"}, {
                        "lang": "en",
                        "value": "Steve"
                    }, {"lang": "en", "value": null}],
                    "personIdentifiers": [],
                    "separateNames": null,
                    "sex": null
                }],
                "landingPage": null,
                "mailingLists": []
            },
            "corpusSubtypeSpecificInfo": {
                "annotatedCorpusInfo": null,
                "annotationsInfo": null,
                "rawCorpusInfo": {
                    "corpusMediaPartsType": {
                        "corpusTextParts": [{
                            "characterEncodings": [],
                            "creationInfo": null,
                            "domains": [],
                            "geographicClassifications": [],
                            "languages": [{
                                "language": {
                                    "languageId": "fr",
                                    "languageTag": "French",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "447", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "en",
                                    "languageTag": "English",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "355", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "es",
                                    "languageTag": "Spanish; Castilian",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "203", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "und",
                                    "languageTag": "Undetermined",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "103", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "af",
                                    "languageTag": "Afrikaans",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "39", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "es",
                                    "languageTag": "Spanish; Castilian",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "30", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "pt",
                                    "languageTag": "Portuguese",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "20", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "sl",
                                    "languageTag": "Slovenian",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "9", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "tr",
                                    "languageTag": "Turkish",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "7", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "nl",
                                    "languageTag": "Dutch; Flemish",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "5", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "de",
                                    "languageTag": "German",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "4", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "hr",
                                    "languageTag": "Croatian",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "4", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "ja",
                                    "languageTag": "Japanese",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "3", "sizeUnit": "TEXTS"}
                            }, {
                                "language": {
                                    "languageId": "it",
                                    "languageTag": "Italian",
                                    "regiontId": null,
                                    "scriptId": null,
                                    "variantId": null
                                }, "languageVarieties": [], "sizePerLanguage": {"size": "2", "sizeUnit": "TEXTS"}
                            }],
                            "lingualityInfo": {
                                "lingualityType": "MULTILINGUAL",
                                "multilingualityType": null,
                                "multilingualityTypeDetails": null
                            },
                            "mediaType": "text",
                            "sizes": [{"size": "1231", "sizeUnit": "TEXTS"}],
                            "textClassifications": [],
                            "textFormats": [],
                            "timeClassifications": []
                        }]
                    }, "corpusSubtype": "rawCorpus"
                }
            },
            "distributionInfos": [{
                "attributionTexts": [],
                "availabilityEndDate": null,
                "availabilityStartDate": null,
                "characterEncodings": [],
                "copyrightStatements": [],
                "distributionLoc": [{
                    "distributionLocation": "https://dev.openminted.eu/api/request/corpus/download?archiveId=0a8dc186-a8c4-4574-910c-51da50c80592",
                    "distributionMedium": "DOWNLOADABLE"
                }],
                "fee": null,
                "rightsHolders": [],
                "rightsInfo": null,
                "sizes": [],
                "textFormats": [],
                "userTypes": []
            }],
            "identificationInfo": {
                "descriptions": [{
                    "lang": "en",
                    "value": "A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 447 publications from OpenAIRE in French"
                }, {
                    "lang": "en",
                    "value": "A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 355 publications from OpenAIRE in English"
                }],
                "public": false,
                "resourceIdentifiers": [{
                    "resourceIdentifierSchemeName": null,
                    "schemeURI": null,
                    "value": "7a2ba1c3-8266-4968-866d-3812ca930e47"
                }],
                "resourceNames": [{"lang": "en", "value": "OpenMinTeD subset of OpenAIRE publications"}, {
                    "lang": "en",
                    "value": "OpenMinTeD subset of OpenAIRE publications 1"
                }],
                "resourceShortNames": []
            },
            "relations": [],
            "resourceCreationInfo": null,
            "resourceDocumentationInfo": null,
            "resourceType": "corpus",
            "usageInfo": null,
            "validationInfos": [],
            "versionInfo": {
                "version": "1.0.0",
                "revision": "THis is a revision text",
                "versionType": "",
                "updateFrequency": ""
            }
        },
        "metadataHeaderInfo": {
            "metadataCreationDate": null,
            "metadataCreators": [],
            "metadataLastDateUpdated": null,
            "metadataRecordIdentifier": {
                "metadataIdentifierSchemeName": "OTHER",
                "schemeURI": null,
                "value": "c07f0a49-0d43-4823-86d4-4cc068e91746"
            },
            "revision": null,
            "sourceOfMetadataRecord": null,
            "userQuery": null
        }
    };

    constructor(private _fb: FormBuilder) {
        this.tocForm = _fb.group({
            toc : [false,Validators.requiredTrue]
        })
    }

    loadCorpus(corpus : OMTDCorpus) {
        let temp = JSON.stringify(corpus,(key,value)=>{return (value == null) ? "" : value});
        corpus = JSON.parse(temp);
        corpus.corpusInfo.resourceType = "corpus";
        // TODO check on test
        // for(let language of corpus.corpusInfo.corpusSubtypeSpecificInfo.rawCorpusInfo.corpusMediaPartsType.corpusTextParts[0].languages) {
        //     language.language.languageId = language.language.languageId.toLowerCase();
        // }
        this.myForm.patchValue(corpus);
        this.myForm.patchValue(corpus);
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            corpusInfo:this._fb.group({
                resourceType : 'corpus'
            })

        });
        this.myForm.valueChanges.subscribe(corpus => {
            this.corpusForm.emit(this.myForm);
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
        let ret = Object.assign({},this.myForm.value);
        ResourceService.removeNulls(ret);
        return ret;
    }
}