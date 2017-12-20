/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { UsageInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'usage-info',
    templateUrl: './usage-info.component.html',
})

export class UsageInfoComponent {
    @Input() usageInfo: UsageInfo;
}