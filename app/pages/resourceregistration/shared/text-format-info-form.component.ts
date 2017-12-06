/**
 * Created by stefania on 1/19/17.
 */
import { Component } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";

@Component({
    selector: 'text-format-info-form',
    template : `
    <div [formGroup]="group">
        
        <data-format-info-form [parentGroup]="group" [name]="'dataFormatInfo'" [required]="true"></data-format-info-form>
        
        <!--<form-inline [description]="dataFormatTypeDesc" [valid]="getMyControl('dataFormat').valid">-->
            <!--<select name="role" class="uk-select" formControlName="dataFormat">-->
                <!--<option *ngFor="let value of dataFormatTypeEnum" [value]="value.key" [selected]="value.key == ''">-->
                    <!--{{value.value}}-->
                <!--</option>-->
            <!--</select>-->

            <!--<div class="form-group-divider"></div>-->

            <!--<input [hidden]="getMyControl('dataFormat')?.value!=='OTHER'" type="text" class="uk-input" formControlName="dataFormatOther" placeholder="Other Data Format">            -->
        <!--</form-inline>-->
    </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class TextFormatInfoFormControl extends MyGroup {

    readonly groupDefinition = {
    };

}