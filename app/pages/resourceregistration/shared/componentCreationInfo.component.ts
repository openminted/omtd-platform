import { Component } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { Validators } from "@angular/forms";
import { EnumValues, frameworkEnum, TDMMethodTypeEnum } from "../../../domain/omtd.enum";
import { Description, frameworkDesc, TDMMethodDesc } from "../../../domain/omtd.description";
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

    <div class="form-group-divider"></div>

    <form-inline [description]="tdmDesc"
                 [valid]="getMyControl('tdmmethod').valid">
        <select name="role" class="form-control" formControlName="tdmmethod">
            <option *ngFor="let value of tdmMethodEnum" [value]="value.key" [selected]="value.key == ''">
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
        framework : ['', Validators.required],
        tdmmethod : ''
    };

    frameworkEnum :  EnumValues[] = frameworkEnum;
    tdmMethodEnum :  EnumValues[] = TDMMethodTypeEnum;
    frameworkDesc : Description = frameworkDesc;
    tdmDesc : Description = TDMMethodDesc;

    required = true;

    name = 'componentCreationInfo';

    label = 'Component General Info';

    ngOnInit() {
        super.ngOnInit();
        this.tdmDesc.label = 'TDM Method';
        this.tdmDesc.desc = null;
        this.tdmDesc.mandatory = false;
    }

}
