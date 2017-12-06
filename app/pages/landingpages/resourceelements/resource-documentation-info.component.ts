/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { ResourceDocumentationInfo } from "../../../domain/openminted-model";
import { documentationTypeEnum, EnumValues } from "../../../domain/omtd.enum";

@Component({
    selector: 'resource-documentation-info',
    templateUrl: './resource-documentation-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class ResourceDocumentationInfoComponent {

    documentationTypeValues: EnumValues[] = documentationTypeEnum;
    @Input() resourceDocumentationInfo: ResourceDocumentationInfo;

    private documentationType(l : string) {
        let documentationType = this.documentationTypeValues.find(v => v.key === l);
        return documentationType && documentationType.value;
    }
}