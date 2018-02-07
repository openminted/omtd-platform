import { MyStringFormGroup } from "./my-string-form.component";
import { Description, groupNameDesc, resourceIdentifierDesc, resourceNameDesc } from "../../../domain/omtd.description";
import { Component, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { ResourceIdentifierCommonFormControl } from "./identifierCommon.component";

@Component({
    selector: 'relatedResource-form',
    template : `
        <div [formGroup]="group">
            <form-repeat-inline [component]="simpleStringComponent" [parentGroup]="group"
                                [description]="resourceNameDesc" [name]="'resourceNames'"></form-repeat-inline>

            <div class="form-group-divider"></div>

            <form-repeat-inline [component]="resourceIdentifierComponent" [parentGroup]="group" [initEmpty]="true"
                                [description]="resourceIdentifierDesc" [name]="'resourceIdentifiers'"></form-repeat-inline>
        </div>
`,
    styleUrls : ['./templates/common.css']
})
export class RelatedResourceFormControl extends MyGroup {

    simpleStringComponent : Type<any> = MyStringFormGroup;
    resourceIdentifierComponent : Type<any> = ResourceIdentifierCommonFormControl;
    resourceNameDesc : Description = resourceNameDesc;
    resourceIdentifierDesc : Description = resourceIdentifierDesc;

    groupDefinition : any = {}

}