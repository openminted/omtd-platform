/**
 * Created by stefania on 1/19/17.
 */
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EnumValues, multilingualityTypeEnum, lingualityTypeEnum } from "../../../domain/omtd.enum";
import {MyGroup} from "../myform/my-group.interface";
import {Description, lingualityInfoDesc} from "../../../domain/omtd.description";

@Component({
    selector: 'lingualityInfo-form',
    template : `
    <div [formGroup]="group" >
        <form-inline [description]="lingualityInfoDesc">
            <div class="col-sm-3 col-md-3" [ngClass]="{'has-error':!getMyControl('lingualityType').valid}">
                <select name="role" class="form-control" formControlName="lingualityType" [attr.disabled]="true">
                    <option *ngFor="let value of lingualityTypes" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </div>
            <ng-template [ngIf]="getMyControl('lingualityType').value != '' && getMyControl('lingualityType').value != 'MONOLINGUAL'">
                <div class="col-sm-3 col-md-3">
                    <select name="role" class="form-control" formControlName="multilingualityType">
                        <option *ngFor="let value of multiLingualityTypes" [value]="value.key" [selected]="value.key == ''">
                            {{value.value}}
                        </option>
                    </select>
                </div>
                <div class="col-sm-3 col-md-3">
                    <input type="text" class="form-control" formControlName="multilingualityTypeDetails" placeholder="Multilinguality type details">
                </div>
            </ng-template>
        </form-inline>
    </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class LingualityInfoFormControl extends MyGroup implements OnChanges{

    @Input() languageCount : number = 1;

    groupDefinition = {
        multilingualityTypeDetails : '',
        lingualityType: ['MONOLINGUAL',Validators.required],
        multilingualityType: ''
    };

    lingualityInfoDesc : Description = lingualityInfoDesc;
    lingualityTypes: EnumValues[] = lingualityTypeEnum;
    multiLingualityTypes: EnumValues[] = multilingualityTypeEnum;

    ngOnInit() {
        super.ngOnInit();
        this.getMyControl('lingualityType').valueChanges.subscribe( _ => {
            let multilingualityType = this.getMyControl('multilingualityType');
            let multilingualityTypeDetails = this.getMyControl('multilingualityTypeDetails');
            if (_ === 'MONOLINGUAL') {
                multilingualityType.disable();
                multilingualityTypeDetails.disable();
            } else {
                multilingualityType.enable();
                multilingualityTypeDetails.enable();
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        let lingualityType : string = null;
        if(changes['languageCount'].previousValue != null) {
            switch (changes['languageCount'].currentValue as number) {
                case 1 :
                    lingualityType = "MONOLINGUAL";
                    break;
                case 2 :
                    lingualityType = "BILINGUAL";
                    break;
                case 3 :
                    lingualityType = "MULTILINGUAL";
                    break;
                default :
                    lingualityType = "MULTILINGUAL";
            }
            this.getMyControl('lingualityType').setValue(lingualityType);
        }
    }
}