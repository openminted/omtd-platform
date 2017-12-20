/**
 * Created by stefania on 12/14/17.
 */
import { Component, Input } from '@angular/core';
import { DomainInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'domains-info',
    templateUrl: './domains-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class DomainsInfoComponent {

    @Input() domains: DomainInfo[];
}