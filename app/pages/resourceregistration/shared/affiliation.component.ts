import { Component } from "@angular/core";
import { affiliatedOrganizationDesc, Description, positionDesc } from "../../../domain/omtd.description";
import { MyGroup } from "../myform/my-group.interface";

@Component({
    selector: 'affiliation-form',
    template : `
        <div [formGroup]="group">
            
            <form-inline [description]="positionDesc" [valid]="getMyControl('position').valid">
                <input type="text" class="uk-input" formControlName="position" placeholder="Position"/>
            </form-inline>
            
            <div class="form-group-divider"></div>

            <organizationInfo-form [parentGroup]="group" [name]="'affiliatedOrganization'"
            [description]="affiliatedOrganizationDesc"></organizationInfo-form>
            
        </div>
`,
    styleUrls : ['./templates/common.css']
})
export class AffiliationFormControl extends MyGroup {

    positionDesc : Description = positionDesc;
    affiliatedOrganizationDesc : Description = affiliatedOrganizationDesc;

    groupDefinition : any = {
        position : ""
    };
}