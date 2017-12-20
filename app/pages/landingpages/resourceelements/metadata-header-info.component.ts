/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { MetadataHeaderInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'metadata-header-info',
    templateUrl: './metadata-header-info.component.html',
})

export class MetadataHeaderInfoComponent {
    @Input() metadataHeaderInfo: MetadataHeaderInfo;
}