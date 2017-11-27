import {Component, ViewChild, ElementRef} from "@angular/core";
import {MyGroup} from "../myform/my-group.interface";
import {Validators} from "@angular/forms";
import {EnumValues, operationTypeEnum} from "../../../domain/omtd.enum";
import {
    Description,
    applicationDesc, functionDesc
} from "../../../domain/omtd.description";
/**
 * Created by stefanos on 24/5/2017.
 */
@Component({
    selector: 'componentGeneric-form',
    template : `
    <div [formGroup]="parentGroup">
        <div formGroupName="{{name}}">
            
            <form-inline [description]="applicationCDesc">
                <label class="radio-label">
                    <input type="checkbox" formControlName="application">
                    Check if component can be used as an integrated end-user application
                </label>
            </form-inline>
                     
            <div class="form-group-divider"></div>
            
            <div formGroupName="functionInfo">
                <form-inline [description]="functionDesc">
                    <!--[valid]="getMyControl('functionInfo.function').valid"-->
                    <select name="role" class="form-control" formControlName="function">
                        <option *ngFor="let value of operationType" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                        </option>
                    </select>

                    <div class="form-group-divider"></div>

                    <form-inline [description]="functionDescOther" [hidden]="this.getMyControl('functionInfo.function')?.value!=='OTHER'">
                        <input type="text" class="uk-input" formControlName="functionOther" placeholder="Other type of operation(*)"/>
                    </form-inline>
                </form-inline>
            </div>
        
            <componentCreationInfo-form [parentGroup]="group" [required]="true"></componentCreationInfo-form>
            
        </div>
    </div>
`,
    styleUrls : ['./templates/common.css']
})

export class ComponentGenericFormControl extends MyGroup {

    readonly groupDefinition = {
        application : false,
        functionInfo : this._fb.group({
            function : ['',Validators.required],
            functionOther : ['',Validators.required]
        })
    };

    operationType : EnumValues[] = operationTypeEnum;
    applicationCDesc : Description = applicationDesc;
    functionDesc : Description = functionDesc;
    functionDescOther : Description = Object.assign({},functionDesc);

    required = true;

    name = 'componentInfo';

    label = 'Component General Info';

    ngOnInit() {
        this.functionDescOther.label=null;
        this.functionDescOther.desc=null;
        // this.getMyControl('functionInfo.functionOther').disable();
        super.ngOnInit();
        this.getMyControl('functionInfo.function').valueChanges.subscribe(_ => {
           console.log(_);
           if (_ === 'OTHER') {
               this.getMyControl('functionInfo.functionOther').enable();
           } else {
               this.getMyControl('functionInfo.functionOther').disable();
           }
        });
    }
}
