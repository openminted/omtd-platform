/**
 * Created by stefania on 10/19/16.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
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

    @Input('corpus')
    corpus : Observable<OMTDCorpus> = null;

    @Output('corpusForm')
    corpusForm : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    private production = process.env.PRODUCTION;

    private testValue : any = {"metadataHeaderInfo":{"metadataRecordIdentifier":{"value":"c07f0a49-0d43-4823-86d4-4cc068e91746","metadataIdentifierSchemeName":"OTHER","schemeURI":null},"metadataCreationDate":null,"metadataCreators":[],"sourceOfMetadataRecord":null,"userQuery":null,"metadataLastDateUpdated":null,"revision":null},"corpusInfo":{"resourceType":"corpus","identificationInfo":{"resourceNames":[{"value":"OpenMinTeD subset of OpenAIRE publications","lang":"en"}],"descriptions":[{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 447 publications from OpenAIRE in French","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 355 publications from OpenAIRE in English","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 203 publications from OpenAIRE in Spanish; Castilian","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 103 publications from OpenAIRE in Undetermined","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 39 publications from OpenAIRE in Afrikaans","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 30 publications from OpenAIRE in Spanish; Castilian","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 20 publications from OpenAIRE in Portuguese","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 9 publications from OpenAIRE in Slovenian","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 7 publications from OpenAIRE in Turkish","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 5 publications from OpenAIRE in Dutch; Flemish","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 4 publications from OpenAIRE in German","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 4 publications from OpenAIRE in Croatian","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 3 publications from OpenAIRE in Japanese","lang":"en"},{"value":"A corpus generated automatically by Steve Gatsios on Fri Jul 21 10:53:57 GMT 2017 via OpenMinTeD services. The corpus includes 2 publications from OpenAIRE in Italian","lang":"en"}],"resourceShortNames":[],"resourceIdentifiers":[{"value":"7a2ba1c3-8266-4968-866d-3812ca930e47","resourceIdentifierSchemeName":null,"schemeURI":null}],"public":false},"contactInfo":{"contactEmail":"stevengatsios@gmail.com","landingPage":null,"contactPersons":[{"separateNames":null,"names":[{"value":"Steve Gatsios","lang":"en"},{"value":"Gatsios","lang":"en"},{"value":"Steve","lang":"en"},{"value":null,"lang":"en"}],"personIdentifiers":[],"sex":null,"communicationInfo":{"emails":["stevengatsios@gmail.com"],"homepages":[],"postalAddress":null,"telephoneNumbers":[],"faxNumbers":[]},"affiliations":[]}],"contactGroups":[],"mailingLists":[]},"versionInfo":null,"validationInfos":[],"usageInfo":null,"resourceDocumentationInfo":null,"resourceCreationInfo":null,"relations":[],"distributionInfos":[{"distributionLoc":[{"distributionMedium":"DOWNLOADABLE","distributionLocation":"http://83.212.101.85:8080/omtd-registry/request/corpus/download?archiveId=0a8dc186-a8c4-4574-910c-51da50c80592"}],"textFormats":[],"characterEncodings":[],"sizes":[],"rightsInfo":null,"copyrightStatements":[],"attributionTexts":[],"rightsHolders":[],"availabilityStartDate":null,"availabilityEndDate":null,"fee":null,"userTypes":[]}],"corpusSubtypeSpecificInfo":{"rawCorpusInfo":{"corpusSubtype":"rawCorpus","corpusMediaPartsType":{"corpusTextParts":[{"mediaType":"text","lingualityInfo":{"lingualityType":"MULTILINGUAL","multilingualityType":null,"multilingualityTypeDetails":null},"languages":[{"language":{"languageTag":"French","languageId":"fr","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"447","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"English","languageId":"en","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"355","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"Spanish; Castilian","languageId":"es","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"203","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"Undetermined","languageId":"und","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"103","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"Afrikaans","languageId":"af","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"39","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"Spanish; Castilian","languageId":"es","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"30","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"Portuguese","languageId":"pt","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"20","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"Slovenian","languageId":"sl","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"9","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"Turkish","languageId":"tr","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"7","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"Dutch; Flemish","languageId":"nl","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"5","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"German","languageId":"de","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"4","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"Croatian","languageId":"hr","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"4","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"Japanese","languageId":"ja","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"3","sizeUnit":"TEXTS"},"languageVarieties":[]},{"language":{"languageTag":"Italian","languageId":"it","scriptId":null,"regiontId":null,"variantId":null},"sizePerLanguage":{"size":"2","sizeUnit":"TEXTS"},"languageVarieties":[]}],"sizes":[{"size":"1231","sizeUnit":"TEXTS"}],"textFormats":[],"characterEncodings":[],"domains":[],"textClassifications":[],"timeClassifications":[],"geographicClassifications":[],"creationInfo":null}]}},"annotatedCorpusInfo":null,"annotationsInfo":null}}};

    constructor(private _fb: FormBuilder) {
    }

    loadCorpus(corpus : OMTDCorpus) {
        let temp = JSON.stringify(corpus,(key,value)=>{return (value == null) ? "" : value});
        corpus = JSON.parse(temp);
        corpus.corpusInfo.resourceType = "corpus";
        this.myForm.patchValue(corpus);
        this.myForm.patchValue(corpus);
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            corpusInfo:this._fb.group({
                resourceType : 'corpus'
            })

        });
        this.myForm.valueChanges.subscribe(corpus => this.corpusForm.emit(this.myForm));

        // //TODO remove
        // this.corpus = this.resourceService.getCorpus("rawCorpus_almostall");

        if (this.corpus) {
            this.corpus.subscribe(
                corpus => this.loadCorpus(corpus),
                error => console.log(error));
        }
    }

    testCorpus() {
        let temp = JSON.stringify(this.testValue,(key,value)=>{return (value == null) ? "" : value});
        let corpus = JSON.parse(temp);
        console.log(corpus);
        this.myForm.patchValue(corpus);
        this.myForm.patchValue(corpus);
    }

}