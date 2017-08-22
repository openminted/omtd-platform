/**
 * Created by stefania on 10/19/16.
 */
import {Component, OnInit, Input, Output, EventEmitter, Type} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import {Component as OMTDComponent} from "../../../domain/openminted-model";
import {Observable} from 'rxjs/Rx';
import {ExampleFormControl} from "../shared/example.component";
import {ContactPersonFormControl} from "../shared/contactPerson.component";
import {MyStringFormGroup} from "../shared/my-string-form.component";

@Component({
    selector: 'component-registration-form',
    templateUrl: './component-registration-form.component.html',
    styleUrls: ['./component-registration-form.component.css'],
})

export class ComponentRegistrationFormComponent implements OnInit {

    @Input('group')
    myForm: FormGroup;

    @Input('component')
    component: Observable<OMTDComponent> = null;

    @Output('componentForm')
    componentForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    componentPatch: any = {
        "metadataHeaderInfo": {
            "metadataRecordIdentifier": {
                "value": "stefTopicInferenceprivate1423",
                "metadataIdentifierSchemeName": "HANDLE",
                "schemeURI": "http://www.altova.com"
            },
            "metadataCreationDate": 1496782800000,
            "metadataCreators": [{
                "separateNames": {
                    "surnames": [{"value": "Labropoulou", "lang": "en"}],
                    "givenNames": [{"value": "Penny", "lang": "en"}]
                },
                "names": [],
                "personIdentifiers": [{
                    "value": "0931731331613278@openminted.eu",
                    "personIdentifierSchemeName": "ORCID"
                }],
                "sex": "FEMALE",
                "communicationInfo": {
                    "emails": ["penny@ilsp.gr", ""],
                    "homepages": [],
                    "telephoneNumbers": [],
                    "faxNumbers": []
                },
                "affiliations": [{
                    "position": "Senior researcher",
                    "affiliatedOrganization": {
                        "organizationNames": [{"value": "Athena RC", "lang": "en"}],
                        "organizationAlternativeNames": [],
                        "organizationIdentifiers": [],
                        "departmentNames": [{"value": "Institute for Language and Speech Processing", "lang": "en"}]
                    }
                }]
            }]
        },
        "componentInfo": {
            "resourceType": "COMPONENT",
            "identificationInfo": {
                "resourceNames": [
                    {"value": "Stefania's amazing Component !", "lang": "en-us"},
                    {"value": "Stefania's amazing Component ! 2", "lang": "en-us"}
                    ],
                "descriptions": [{
                    "value": "A workflow of components that aim at topic extraction; it includes the DKProCore component MalletLdaTopicModelInferencer that infers the topic distribution over documents using a Mallet ParallelTopicModel.",
                    "lang": "en-us"
                }],
                "resourceShortNames": [{"value": "Stefania's amazing Component 1!", "lang": "en-us"},
                    {"value": "Stefania's amazing Component 2!", "lang": "en-us"}],
                "resourceIdentifiers": [{"value": "TopicInference", "resourceIdentifierSchemeName": "OTHER"}],
                "public": false
            },
            "versionInfo": {"version": "0.0.1"},
            "contactInfo": {
                "contactPersons": [{
                    "separateNames": {
                        "surnames": [{"value": "Galanis", "lang": "en"}],
                        "givenNames": [{"value": "Dimitris", "lang": "en"}]
                    },
                    "names": [],
                    "personIdentifiers": [],
                    "sex": "MALE",
                    "communicationInfo": {
                        "emails": ["galanisd@ilsp.gr"],
                        "homepages": [],
                        "telephoneNumbers": [],
                        "faxNumbers": []
                    },
                    "affiliations": [{
                        "position": "Researcher",
                        "affiliatedOrganization": {
                            "organizationNames": [{
                                "value": "Athena Research Center",
                                "lang": "en"
                            }],
                            "organizationAlternativeNames": [],
                            "organizationIdentifiers": [],
                            "departmentNames": [{"value": "Institute for Language and Speech Processing", "lang": "en"}]
                        }
                    }]
                }, {
                    "separateNames": {
                        "surnames": [{"value": "Gkirtzou", "lang": "en"}],
                        "givenNames": [{"value": "Katerina", "lang": "en"}]
                    },
                    "names": [],
                    "personIdentifiers": [{"value": "0000-0002-4725-3094", "personIdentifierSchemeName": "ORCID"}],
                    "sex": "FEMALE",
                    "communicationInfo": {
                        "emails": ["katerina.gkirtzou@ilsp.gr"],
                        "homepages": [],
                        "telephoneNumbers": [],
                        "faxNumbers": []
                    },
                    "affiliations": []
                }], "contactGroups": [], "mailingLists": []
            },
            "validationInfos": [{
                "validated": true,
                "validationMode": "INTERACTIVE",
                "validationModeDetails": "test validation",
                "validationExtentDetails": "with OMTD- demo Dataset 1",
                "validationReports": [],
                "validationSwComponents": [],
                "validators": []
            }],
            "resourceCreationInfo": {
                "resourceCreators": [{
                    "relatedPerson": {
                        "separateNames": {
                            "surnames": [{
                                "value": "Galanis",
                                "lang": "en"
                            }], "givenNames": [{"value": "Dimitris", "lang": "en"}]
                        },
                        "names": [],
                        "personIdentifiers": [],
                        "sex": "MALE",
                        "communicationInfo": {
                            "emails": ["galanisd@ilsp.gr"],
                            "homepages": [],
                            "telephoneNumbers": [],
                            "faxNumbers": []
                        },
                        "affiliations": [{
                            "position": "Researcher",
                            "affiliatedOrganization": {
                                "organizationNames": [{
                                    "value": "Athena Research Center",
                                    "lang": "en"
                                }],
                                "organizationAlternativeNames": [],
                                "organizationIdentifiers": [],
                                "departmentNames": [{
                                    "value": "Institute for Language and Speech Processing",
                                    "lang": "en"
                                }]
                            }
                        }]
                    }
                }, {
                    "relatedPerson": {
                        "separateNames": {
                            "surnames": [{"value": "Gkirtzou", "lang": "en"}],
                            "givenNames": [{"value": "Katerina", "lang": "en"}]
                        },
                        "names": [],
                        "personIdentifiers": [{"value": "0000-0002-4725-3094", "personIdentifierSchemeName": "ORCID"}],
                        "sex": "FEMALE",
                        "communicationInfo": {
                            "emails": ["katerina.gkirtzou@ilsp.gr"],
                            "homepages": [],
                            "telephoneNumbers": [],
                            "faxNumbers": []
                        },
                        "affiliations": []
                    }
                }, {
                    "relatedGroup": {
                        "groupNames": [{"value": "DKPro Team", "lang": "en"}],
                        "affiliatedOrganization": {
                            "organizationNames": [{"value": "DKPro Core", "lang": "en"}],
                            "organizationAlternativeNames": [],
                            "organizationIdentifiers": [],
                            "departmentNames": []
                        }
                    }
                }],
                "fundingProjects": [{
                    "projectNames": [{
                        "value": "Open Mining INfrastructure for TExt and Data",
                        "lang": "en"
                    }],
                    "projectShortNames": [{"value": "OpenMinTeD", "lang": "en"}],
                    "projectIdentifiers": [{"value": "654021", "projectIdentifierSchemeName": "EU-2020"}],
                    "webpages": ["www.openminted.eu"],
                    "funders": [{
                        "organizationNames": [{"value": "EU", "lang": "en"}],
                        "organizationAlternativeNames": [],
                        "organizationIdentifiers": [],
                        "departmentNames": []
                    }],
                    "fundingTypes": ["EU_FUNDS"],
                    "fundingProgramme": "H2020",
                    "fundingCountries": []
                }],
                "creationDate": {"date": {"day": 7, "month": 6, "year": 2017}}
            },
            "componentType": "TOPIC_EXTRACTOR",
            "application": true,
            "applicationFunction": "OTHER",
            "workflow": true,
            "distributionInfos": [{
                "componentLoc": {
                    "componentDistributionForm": "WEB_SERVICE",
                    "distributionLocation": "http://github.com/galanisd/omtd-simple-workflows"
                },
                "command" : "command!",
                "operatingSystems": [],
                "rightsInfo": {
                    "licenceInfos": [{
                        "licenceInfo": [{
                            "licence": "APACHE_2_0",
                            "nonStandardLicenceName": [],
                            "nonStandaradLicenceTermsText": [],
                            "conditionOfUse": []
                        }]
                    }], "rightsStatement": ["OPEN_ACCESS","OPEN_ACCESS"]
                },
                "copyrightStatements": [],
                "attributionTexts": [{
                    "value": "Topic extractor based on the MalletLdaTopicModelInferencer licensed under Apache Licence 2.0",
                    "lang": "en"
                }],
                "rightsHolders": [],
                "userTypes": []
            }],
            "inputContentResourceInfo": {
                "processingResourceTypes": ["DOCUMENT", "CORPUS"],
                "dataFormats": [{
                    "dataFormat": "APPLICATION_PDF",
                    "mimeType": "APPLICATION_PDF",
                    "fileExtension": "pdf"
                }],
                "characterEncodings": ["UTF_8"],
                "languages": [{"languageTag": "en"}],
                "annotationLevels": [],
                "parameterInfos": [],
                "domains": [],
                "keywords": []
            },
            "outputResourceInfo": {
                "processingResourceTypes": ["DOCUMENT"],
                "dataFormats": [{"dataFormat": "APPLICATION_VND_XMI_XML", "mimeType": "APPLICATION_VND_XMI_XML"}],
                "characterEncodings": ["UTF_8"],
                "languages": [],
                "typesystem": {
                    "resourceNames": [{"value": "DKPro Core type system", "lang": "en"}],
                    "resourceIdentifiers": []
                },
                "annotationLevels": ["SEMANTIC_ANNOTATION"],
                "parameterInfos": [],
                "domains": [],
                "keywords": []
            },
            "componentDependencies": {
                "typesystem": {
                    "resourceNames": [{
                        "value": "DKPro Core type system",
                        "lang": "en"
                    }], "resourceIdentifiers": []
                },
                "annotationResources": [{
                    "resourceNames": [{
                        "value": "MALLET LDA topic model trained on CORE abstracts (2015-09 dump)",
                        "lang": "en"
                    }], "resourceIdentifiers": []
                }],
                "softwareLibraries": []
            },
            "componentCreationInfo": {
                "framework": "UIMA",
                "implementationLanguage": "java",
                "hasOriginalSource": [],
                "tdmmethod": "MACHINE_AND_STATISTICAL_LEARNING"
            },
            "relations": [],
            "componentEvaluationInfo": {
                "evaluated": false,
                "evaluationLevels": [],
                "evaluationTypes": [],
                "evaluationCriteria": [],
                "evaluationMeasures": [],
                "performanceIndicators": [],
                "evaluationReports": [],
                "evaluationSwComponents": [],
                "evaluators": []
            }
        }
    }

    type: Type<any> = MyStringFormGroup;

    constructor(private _fb: FormBuilder) {
    }

    loadComponent(component: OMTDComponent) {
        let temp = JSON.stringify(component, (key, value) => {
            return (value == null) ? "" : value
        });
        component = JSON.parse(temp);

        this.myForm.patchValue(component);
        // this.myForm.patchValue(component);
    }

    ngOnInit() {

        this.myForm = this._fb.group({
            componentInfo: this._fb.group({
                // resourceType : 'component'
            })

        });
        this.myForm.valueChanges.subscribe(component => this.componentForm.emit(this.myForm));

        if (this.component) {
            this.component.subscribe(
                component => this.loadComponent(component),
                error => console.log(error));
        }

    }
}