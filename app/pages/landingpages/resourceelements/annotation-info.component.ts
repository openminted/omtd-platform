/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { AnnotationInfo } from "../../../domain/openminted-model";
import { annotationTypeTypeEnum, EnumValues } from "../../../domain/omtd.enum";

@Component({
    selector: 'annotation-info',
    templateUrl: './annotation-info.component.html',
})

export class AnnotationInfoComponent {

    annotationTypeTypeValues : EnumValues[] = annotationTypeTypeEnum;
    @Input() annotationInfo: AnnotationInfo;

    private annotationTypeType(l : string) {
        let annotationTypeType = this.annotationTypeTypeValues.find(v => v.key === l);
        return annotationTypeType && annotationTypeType.value;
    }
}