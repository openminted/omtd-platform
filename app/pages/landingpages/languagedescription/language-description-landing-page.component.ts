/**
 * Created by stefania on 1/13/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LanguageDescription, Lexical} from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";
import {saveAs} from "file-saver";
import {HttpResponse} from "@angular/common/http";
import {
    dataFormatTypeEnum,
    EnumValues,
    languageDescriptionTypeEnum,
    lexicalConceptualResourceTypeEnum
} from "../../../domain/omtd.enum";

@Component({
    selector: 'language-description-landing-page',
    templateUrl: './language-description-landing-page.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class LanguageDescriptionLandingPageComponent implements OnInit {

    public languageDescription: LanguageDescription;
    public errorMessage: string;
    private sub: Subscription;

    languageDescriptionResourceTypeValues : EnumValues[] = languageDescriptionTypeEnum;
    dataFormatTypeValues : EnumValues[] = dataFormatTypeEnum;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.resourceService.get<LanguageDescription>(id,'language').subscribe(
                languageDescription => this.languageDescription = languageDescription,
                error => this.handleError(<any>error));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    goBack() {
        window.history.back();
    }

    private languageDescriptionResourceType(l : string) {
        let languageDescriptionResourceType = this.languageDescriptionResourceTypeValues.find(v => v.key === l);
        return languageDescriptionResourceType && languageDescriptionResourceType.value;
    }

    private dataFormatType(l : string) {
        let dataFormatType = this.dataFormatTypeValues.find(v => v.key === l);
        return dataFormatType && dataFormatType.value;
    }

    handleError(error) {
        this.errorMessage = 'System error loading language description (Server responded: ' + error.error + ')';
    }

    downloadResource(languageDescription: LanguageDescription, mediaType : string) : void {
        let id = languageDescription.metadataHeaderInfo.metadataRecordIdentifier.value;
        this.resourceService.getBlob(id,'language',mediaType).subscribe(data => {
            console.log(data);
            if (data instanceof HttpResponse) {
                saveAs((data as HttpResponse<any>).body, `${id}.${mediaType}`);
            }
        });
    }
}