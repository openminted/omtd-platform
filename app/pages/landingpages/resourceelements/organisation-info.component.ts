/**
 * Created by stefania on 12/5/17.
 */
import { Component, Input } from '@angular/core';
import { OrganizationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'organization-info',
    templateUrl: './organisation-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class OrganizationInfoComponent {
    @Input() organizationInfo: OrganizationInfo;
}