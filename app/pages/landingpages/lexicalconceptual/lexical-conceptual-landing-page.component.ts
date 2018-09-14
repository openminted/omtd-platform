/**
 * Created by stefania on 1/13/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Component as OMTDComponent, Lexical} from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { Subscription } from "rxjs/Subscription";
import { dataFormatTypeEnum, EnumValues, lexicalConceptualResourceTypeEnum } from "../../../domain/omtd.enum";
import {saveAs} from "file-saver";
import {HttpResponse} from "@angular/common/http";

@Component({
    selector: 'lexical-conceptual-landing-page',
    templateUrl: './lexical-conceptual-landing-page.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class LexicalConceptualLandingPageComponent implements OnInit {

    public lexicalConceptual: Lexical;
    public errorMessage: string;
    private sub: Subscription;

    lexicalConceptualResourceTypeValues : EnumValues[] = lexicalConceptualResourceTypeEnum;
    dataFormatTypeValues : EnumValues[] = dataFormatTypeEnum;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.resourceService.get<Lexical>(id,'lexical').subscribe(
                lexicalConceptual => this.lexicalConceptual = lexicalConceptual,
                error => this.handleError(<any>error));
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    goBack() {
        window.history.back();
    }

    handleError(error) {
        this.errorMessage = 'System error loading lexical conceptual (Server responded: ' + error.error + ')';
    }

    private lexicalConceptualResourceType(l : string) {
        let lexicalConceptualResourceType = this.lexicalConceptualResourceTypeValues.find(v => v.key === l);
        return lexicalConceptualResourceType && lexicalConceptualResourceType.value;
    }

    private dataFormatType(l : string) {
        let dataFormatType = this.dataFormatTypeValues.find(v => v.key === l);
        return dataFormatType && dataFormatType.value;
    }

    downloadResource(lexicalConceptual: Lexical, mediaType : string) : void {
        let id = lexicalConceptual.metadataHeaderInfo.metadataRecordIdentifier.value;
        this.resourceService.getBlob(id,'lexical',mediaType).subscribe(data => {
            console.log(data);
            if (data instanceof HttpResponse) {
                saveAs((data as HttpResponse<any>).body, `${id}.${mediaType}`);
            }
        });
    }
}