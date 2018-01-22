import { Component, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { ActorInfoFormControl } from "./actorInfo.component";
import { actorInfoTypeDesc, Description, resourceCreationInfoDesc } from "../../../domain/omtd.description";

@Component({
    selector: 'resourceCreationInfo-form',
    template : `
        <div [formGroup]="group">
            <form-repeat [component]="actorInfoComponent" [parentGroup]="group" [initEmpty]="true"
                         [name]="'resourceCreators'" [required]="false" [description]="resourceCreationDesc">
            </form-repeat>
        </div>
`,
    styleUrls : ['./templates/common.css']
})
export class ResourceCreationFormControl extends MyGroup {

    actorInfoComponent : Type<any> = ActorInfoFormControl;
    resourceCreationDesc : Description = resourceCreationInfoDesc;

    groupDefinition : any = {
    }

}