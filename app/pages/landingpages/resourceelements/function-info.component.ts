/**
 * Created by stefania on 12/5/17.
 */
import { Component, Input } from '@angular/core';
import { FunctionInfo } from "../../../domain/openminted-model";
import { EnumValues, operationTypeEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'function-info',
    templateUrl: './function-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class FunctionInfoComponent {

    functionValues : EnumValues[] = operationTypeEnum;
    @Input() functionInfo: FunctionInfo;

    private functionType(l : string) {
        let functionType = this.functionValues.find(v => v.key === l);
        return functionType && functionType.value;
    }
}