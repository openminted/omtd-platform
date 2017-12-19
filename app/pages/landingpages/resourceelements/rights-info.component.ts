/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input, OnInit } from '@angular/core';
import { RightsInfo } from "../../../domain/openminted-model";
import { EnumValues, licenceEnum, rightsStatementEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'rights-info',
    templateUrl: './rights-info.component.html',
})

export class RightsInfoComponent implements OnInit {

    rightsStatementValues : EnumValues[] = rightsStatementEnum;
    licenseValues : EnumValues[] = licenceEnum;
    @Input() rightsInfo: RightsInfo;
    rightsStatementValue : any;
    
    ngOnInit(): void {
        this.rightsStatementValue = this.rightsInfo.rightsStatement;
    }

    private rightsStatement(l : string) {
        let rightsStatement = this.rightsStatementValues.find(v => v.key === l);
        return rightsStatement && rightsStatement.value;
    }

    private licence(l : string) {
        let licence = this.licenseValues.find(v => v.key === l);
        return licence && licence.value;
    }
}