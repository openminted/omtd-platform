/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { DatasetDistributionInfo } from "../../../domain/openminted-model";


@Component({
    selector: 'dataset-distribution-info',
    templateUrl: './dataset-distribution-info.component.html',
})

export class DatasetDistributionInfoComponent {
    @Input() datasetDistributionInfo: DatasetDistributionInfo;
}