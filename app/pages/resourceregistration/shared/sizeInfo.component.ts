/**
 * Created by stefania on 1/19/17.
 */
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { EnumValues, sizeUnitEnum } from "../../../domain/omtd.enum";
import { MyGroup } from "../myform/my-group.interface";
import { Description, sizeDesc, sizeInfoDesc, sizeUnitDesc } from "../../../domain/omtd.description";

@Component({
    selector: 'sizeInfo-form',
    template : `
    <div [formGroup]="group">
        
            <input type="text" class="uk-input uk-width-2-5" formControlName="size" placeholder="Size" [ngClass]="{'uk-form-danger':!getMyControl('size')}">
        
        
            <select name="role" class="uk-select uk-width-2-5" formControlName="sizeUnit" [ngClass]="{'uk-form-danger':!getMyControl('sizeUnit')}">
                <option *ngFor="let value of sizeUnitEnum" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                </option>
            </select>
        
    </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class SizeInfoFormControl extends MyGroup {

    readonly groupDefinition = {
        size : ['', Validators.required],
        sizeUnit : ['', Validators.required]
    };



    sizeDesc : Description = sizeDesc;
    sizeInfoDesc : Description = Object.assign({},sizeInfoDesc);
    sizeUnitDesc : Description = sizeUnitDesc;
    sizeUnitEnum : EnumValues[] = sizeUnitEnum;

    ngOnInit() {
        super.ngOnInit();
        this.sizeInfoDesc.mandatory = this.sizeInfoDesc.mandatory && this.required;
    }

}