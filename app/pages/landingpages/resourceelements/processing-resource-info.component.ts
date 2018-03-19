/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { ProcessingResourceInfo } from "../../../domain/openminted-model";
import {
    annotationTypeTypeEnum, dataFormatTypeEnum, EnumValues, languageIdTypeEnum,
    processingResourceTypeEnum
} from "../../../domain/omtd.enum";

@Component({
    selector: 'processing-resource-info',
    templateUrl: './processing-resource-info.component.html',
})

export class ProcessingResourceInfoComponent {

    processingResourceTypeValues : EnumValues[] = processingResourceTypeEnum;
    dataFormatTypeValues : EnumValues[] = dataFormatTypeEnum;
    languageValues : EnumValues[] = languageIdTypeEnum;
    annotationTypeTypeValues : EnumValues[] = annotationTypeTypeEnum;
    @Input() processingResourceInfo: ProcessingResourceInfo;

    get languages() {
        let languages : string[] = this.processingResourceInfo.languages.map(l => {
            let tmp = this.languageValues.find(v => v.key === l.toUpperCase());
            return tmp ? tmp.value : "Undefined";
        });
        return languages.join(', ');
    }

    private processingResourceType(l : string) {
        let processingResourceType = this.processingResourceTypeValues.find(v => v.key === l);
        return processingResourceType && processingResourceType.value;
    }

    private dataFormatType(l : string) {
        let dataFormatType = this.dataFormatTypeValues.find(v => v.key === l);
        return dataFormatType && dataFormatType.value;
    }

    private annotationTypeType(l : string) {
        let annotationTypeType = this.annotationTypeTypeValues.find(v => v.key === l);
        return annotationTypeType && annotationTypeType.value;
    }

}