import { Component, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { MyStringFormGroup } from "./my-string-form.component";
import { Description, groupNameDesc } from "../../../domain/omtd.description";

@Component({
    selector: 'groupInfo-form',
    template : `
        <div [formGroup]="group">
            <form-repeat-inline [component]="simpleStringComponent" [parentGroup]="group"
                                [description]="groupNameDesc" [name]="'groupNames'"></form-repeat-inline>

            <div class="form-group-divider"></div>

            <organizationInfo-form [parentGroup]="group" [name]="'affiliatedOrganization'" [organizationMandatory]="false"></organizationInfo-form>
        </div>
`,
    styleUrls : ['./templates/common.css']
})
export class GroupInfoFormControl extends MyGroup {

    simpleStringComponent : Type<any> = MyStringFormGroup;
    groupNameDesc : Description = groupNameDesc;

    groupDefinition : any = {}

}