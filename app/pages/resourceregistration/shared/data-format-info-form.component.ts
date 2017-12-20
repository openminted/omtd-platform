/**
 * Created by stefania on 1/19/17.
 */
import { Component, Injector } from "@angular/core";
import { dataFormatTypeEnum, EnumValues } from "../../../domain/omtd.enum";
import { MyGroup } from "../myform/my-group.interface";
import { dataFormatInfoDesc, Description } from "../../../domain/omtd.description";
import { Validators } from "@angular/forms";

@Component({
    selector: 'data-format-info-form',
    template : `
    <div [formGroup]="group">
        <form-inline [description]="dataFormatTypeDesc" [valid]="getMyControl('dataFormat').valid">
            <select name="role" class="uk-select" formControlName="dataFormat">
                <option *ngFor="let value of dataFormatTypeEnum" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                </option>
            </select>

            <div class="form-group-divider"></div>

            <input [hidden]="getMyControl('dataFormat')?.value!=='OTHER'" type="text" class="uk-input" formControlName="dataFormatOther" placeholder="Other Data Format">            
        </form-inline>
    </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class DataFormatInfoFormControl extends MyGroup {

    readonly groupDefinition = {
        dataFormat: ['',Validators.required],
        dataFormatOther: ''
    };

    dataFormatTypeEnum: EnumValues[] = dataFormatTypeEnum;
    dataFormatTypeDesc: Description = Object.assign({}, dataFormatInfoDesc);
    dataFormatOtherDesc: Description = new Description();

    constructor(private injector: Injector) {
        super(injector);
        this.dataFormatTypeDesc.label = null;
        this.dataFormatTypeDesc.desc = null;
    }

    ngOnInit() {
        super.ngOnInit();
        this.getMyControl('dataFormatOther').disable();
        this.getMyControl('dataFormat').valueChanges.subscribe(_ => {
            if (_ === 'OTHER') {
                this.getMyControl('dataFormatOther').enable();
            } else {
                this.getMyControl('dataFormatOther').disable();
            }
        });
    }
}