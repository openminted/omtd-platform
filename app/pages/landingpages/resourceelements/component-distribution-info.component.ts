/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { ComponentDistributionInfo } from "../../../domain/openminted-model";
import {
    componentDistributionFormEnum, EnumValues, operatingSystemEnum,
    webServiceTypeEnum
} from "../../../domain/omtd.enum";

@Component({
    selector: 'component-distribution-info',
    templateUrl: './component-distribution-info.component.html',
})

export class ComponentDistributionInfoComponent {

    componentDistributionFormValues : EnumValues[] = componentDistributionFormEnum;
    webServiceTypeValues : EnumValues[] = webServiceTypeEnum;
    operatingSystemValues : EnumValues[] = operatingSystemEnum;
    @Input() componentDistributionInfos: ComponentDistributionInfo[];

    private componentDistributionForm(l : string) {
        let componentDistributionForm = this.componentDistributionFormValues.find(v => v.key === l);
        return componentDistributionForm && componentDistributionForm.value;
    }

    private webServiceType(l : string) {
        let webServiceType = this.webServiceTypeValues.find(v => v.key === l);
        return webServiceType && webServiceType.value;
    }

    private operatingSystem(l : string) {
        let operatingSystem = this.operatingSystemValues.find(v => v.key === l);
        return operatingSystem && operatingSystem.value;
    }
}