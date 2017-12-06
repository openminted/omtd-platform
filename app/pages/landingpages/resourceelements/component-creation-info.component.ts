/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { ComponentCreationInfo } from "../../../domain/openminted-model";
import { EnumValues, frameworkEnum, TDMMethodTypeEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'component-creation-info',
    templateUrl: './component-creation-info.component.html',
})

export class ComponentCreationInfoComponent {

    frameworkValues : EnumValues[] = frameworkEnum;
    tdmMethodTypeValues : EnumValues[] = TDMMethodTypeEnum;
    @Input() componentCreationInfo: ComponentCreationInfo;

    private framework(l : string) {
        let framework = this.frameworkValues.find(v => v.key === l);
        return framework && framework.value;
    }

    private tdmMethodType(l : string) {
        let tdmMethodType = this.tdmMethodTypeValues.find(v => v.key === l);
        return tdmMethodType && tdmMethodType.value;
    }
}