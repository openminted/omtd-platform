/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { RightsInfo } from "../../../domain/openminted-model";
import { EnumValues, rightsStatementEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'rights-info',
    templateUrl: './rights-info.component.html',
})

export class RightsInfoComponent {

    rightsStatementValues : EnumValues[] = rightsStatementEnum;
    @Input() rightsInfo: RightsInfo;

    private rightsStatement(l : string) {
        let rightsStatement = this.rightsStatementValues.find(v => v.key === l);
        return rightsStatement && rightsStatement.value;
    }
}