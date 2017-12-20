/**
 * Created by stefania on 12/14/17.
 */
import { Component, Input } from '@angular/core';
import { ResourceCreationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'resource-creation-info-short',
    templateUrl: './resource-creation-info-short.component.html',
})

export class ResourceCreationInfoShortComponent {
    @Input() resourceCreationInfo: ResourceCreationInfo;
}