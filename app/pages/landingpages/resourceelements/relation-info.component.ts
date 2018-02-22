/**
 * Created by stefania on 12/6/17.
 */
import { Component, Input } from '@angular/core';
import { RelatedResource, RelationInfo } from "../../../domain/openminted-model";
import { EnumValues, relationTypeEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'relation-info',
    templateUrl: './relation-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class RelationInfoComponent {

    relationTypeValues : EnumValues[] = relationTypeEnum;
    @Input() relationInfo: RelationInfo;

    relationType(l : string) {
        let relationType = this.relationTypeValues.find(v => v.key === l);
        return relationType && relationType.value;
    }

    public getLink(resource : RelatedResource) {
        return `landingPage/corpus/${resource.resourceIdentifiers[0].value}`;
    }
}