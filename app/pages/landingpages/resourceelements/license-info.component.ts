/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import {LicenceInfo} from "../../../domain/openminted-model";
import {EnumValues, licenceEnum} from "../../../domain/omtd.enum";

@Component({
    selector: 'license-info',
    templateUrl: './license-info.component.html',
})

export class LicenseInfoComponent {

    licenseValues : EnumValues[] = licenceEnum;
    @Input() licenseInfo: LicenceInfo;

    private licence(l : string) {
        let licence = this.licenseValues.find(v => v.key === l);
        return licence && licence.value;
    }
}