import { Component } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { Validators } from "@angular/forms";
import { EnumValues, frameworkEnum} from "../../../domain/omtd.enum";
import { Description, frameworkDesc } from "../../../domain/omtd.description";
/**
 * Created by stefanos on 24/5/2017.
 */
@Component({
    selector: 'componentCreationInfo-form',
    template : `        
<div [formGroup]="group">

    <form-inline [description]="frameworkDesc"
        [valid]="getMyControl('framework').valid">
        <select name="role" class="form-control" formControlName="framework">
            <option *ngFor="let value of frameworkEnum" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </form-inline>
    
</div>
`,
    styleUrls : ['./templates/common.css']
})

export class ComponentCreationInfoFormControl extends MyGroup {

    readonly groupDefinition = {
        framework : ['', Validators.required]
    };

    frameworkEnum :  EnumValues[] = frameworkEnum;
    frameworkDesc : Description = frameworkDesc;

    required = true;

    name = 'componentCreationInfo';

    label = 'Component General Info';

    // ngOnInit() {
    //     super.ngOnInit();
    //     console.log("ComponentCreationInfoFormControl",this.parentGroup);
    // }

}
