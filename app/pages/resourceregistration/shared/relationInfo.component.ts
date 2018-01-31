import { MyStringFormGroup } from "./my-string-form.component";
import {
    Description, groupNameDesc, relatedResourceDesc, relationTypeDesc, resourceIdentifierDesc,
    resourceNameDesc
} from "../../../domain/omtd.description";
import { Component, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { ResourceIdentifierCommonFormControl } from "./identifierCommon.component";
import { RelatedResourceFormControl } from "./relatedResource.component";
import { EnumValues, relationTypeEnum } from "../../../domain/omtd.enum";
import { Validators } from "@angular/forms";

@Component({
    selector: 'relationInfo-form',
    template : `
        <div [formGroup]="group">
            <form-inline [description]="relationTypeDesc" [valid]="group.valid">
                <!--<input type="text" class="uk-input" formControlName="surname" placeholder="Surname">-->
                <select name="role" class="uk-select" formControlName="relationType">
                    <option *ngFor="let value of relationTypeEnum" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </form-inline>

            <div class="form-group-divider"></div>

            <relatedResource-form [parentGroup]="group" [name]="'relatedResource'"></relatedResource-form>
            <!--<form-repeat [component]="relatedResourceType" [parentGroup]="group"-->
                                <!--[description]="relatedResourceDesc" [name]="'relatedResource'"></form-repeat>-->
        </div>
`,
    styleUrls : ['./templates/common.css']
})
export class RelationInfoFormControl extends MyGroup {

    relatedResourceType : Type<any> = RelatedResourceFormControl;
    relatedResourceDesc : Description = relatedResourceDesc;
    relationTypeDesc : Description = relationTypeDesc;
    relationTypeEnum : EnumValues[] = relationTypeEnum;
    groupDefinition : any = {
        relationType : ['',Validators.required]
    }

}