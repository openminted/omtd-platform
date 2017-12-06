/**
 * Created by stefania on 12/5/17.
 */
import { Component, Input } from '@angular/core';
import { CommunicationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'communication-info',
    templateUrl: './communication-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class CommunicationInfoComponent {
    @Input() communicationInfo: CommunicationInfo;
}