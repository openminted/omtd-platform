/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { ResourceCreationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'resource-creation-info',
    templateUrl: './resource-creation-info.component.html',
})

export class ResourceCreationInfoComponent {
    @Input() resourceCreationInfo: ResourceCreationInfo;
}