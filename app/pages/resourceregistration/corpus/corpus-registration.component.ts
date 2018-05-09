/**
 * Created by stefania on 11/24/16.
 */
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ContentConnectorStatus } from "../../../domain/content-connector-status";
import { ContentConnectorService } from "../../../services/content-connector.service";

@Component({
    selector: 'corpus-registration-options',
    templateUrl: './corpus-registration.component.html',
    styleUrls:  ['./corpus-registration.component.css'],
})

export class CorpusRegistrationComponent implements OnInit {

    activeTab;

    contentConnectorStatus: ContentConnectorStatus;

    constructor(private router: Router, private contentConnectorService: ContentConnectorService) {}

    ngOnInit() {

        this.contentConnectorService.getContentConnectorStatus().subscribe(
            contentConnectorStatus => this.contentConnectorStatus = contentConnectorStatus,
            error => console.log('System error retrieving content connector status', <any>error));
    }

    corpusBuilder() {
        this.router.navigate(['/resourceRegistration/corpus/searchForPublications']);
    }

    corpusBuilderWithProvider(provider: string) {

        var map: { [name: string]: string; } = { };
        map['source'] = provider;

        this.router.navigate(['/resourceRegistration/corpus/searchForPublications', map]);
    }

    uploadCorpus() {
        this.router.navigate(['/resourceRegistration/corpus/upload']);
    }

    registerUsingXML() {
        this.router.navigate(['/resourceRegistration/corpus/xml']);
    }
}