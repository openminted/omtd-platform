/**
 * Created by stefania on 1/22/17.
 */
import {Component, OnInit, Input, Type, Injector} from "@angular/core";
import {FormGroup, FormBuilder, FormControl, FormArray, Validators} from "@angular/forms";
import {EnumValues, distributionMediumEnum, componentDistributionFormEnum} from "../../../domain/omtd.enum";
import {MyGroup} from "../myform/my-group.interface";
import {
    commandDesc,
    componentDistributionFormDesc, componentDistributionInfoDesc, Description,
    distributionURLDesc
} from "../../../domain/omtd.description";

@Component({
    selector: 'componentDistributionInfos-form',
    template : ` 
    <div [formGroup]="parentGroup">

        <form-repeat [component]="componentDistributionType" [parentGroup]="parentGroup" 
                            [name]="'distributionInfos'" [required]="true" [description]="componentDistributionInfoDesc">
        </form-repeat>
        
    </div>
`,
    styleUrls : ['./templates/common.css']
})
export class ComponentDistributionsInfoFormControl {

    @Input()
    parentGroup : FormGroup = null;
    componentDistributionType : Type<any> = ComponentDistributionInfoFormControl;
    componentDistributionInfoDesc : Description = componentDistributionInfoDesc;
}


@Component({
    selector: 'component-distribution-info-form-common',
    template : ` 
<div [formGroup]="group">
    <div formGroupName="componentLoc">
        <form-inline [description]="componentDistributionFormDesc" [valid]="getMyControl('componentLoc.componentDistributionForm').valid">
            <select name="role" class="form-control" formControlName="componentDistributionForm">
                <option *ngFor="let value of componentDistributionFormEnum" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                </option>
            </select>
        </form-inline>
        
        <div class="form-group-divider"></div>

        <div [hidden]="getMyControl('componentLoc.componentDistributionForm').value !== 'WEB_SERVICE'">
            <div  class="form-group-divider"></div>

            <form-inline [description]="commandDesc" [valid]="getMyControl('componentLoc.command').valid">
                <input type="text" class="form-control" formControlName="command" placeholder="{{commandDesc.label}}">
            </form-inline>
        </div>

        <div class="form-group-divider"></div>
    
        <form-inline [description]="distributionURLDesc" [valid]="getMyControl('componentLoc.distributionLocation').valid">
            <input type="text" class="form-control" formControlName="distributionLocation" placeholder="{{distributionURLDesc.label}}">
        </form-inline>
        
    </div>

    <div class="form-group-divider"></div>
    
    <rightsInfo-form [parentGroup]="group" [name]="'rightsInfo'"></rightsInfo-form>
    
</div>  
    
    `,
    styleUrls : ['./templates/common.css']
})
export class ComponentDistributionInfoFormControl extends MyGroup {

    componentDistributionFormDesc : Description = componentDistributionFormDesc;
    distributionURLDesc : Description = distributionURLDesc;
    commandDesc : Description = commandDesc;
    readonly componentDistributionFormEnum : EnumValues[] = componentDistributionFormEnum;

    readonly groupDefinition = {
        componentLoc : this._fb.group({
            componentDistributionForm : ['', Validators.required],
            distributionLocation : ['', Validators.required],
            command : ['', Validators.required]
        })
    };

    ngOnInit() {
        super.ngOnInit();
        this.getMyControl('componentLoc.componentDistributionForm').valueChanges.subscribe(_ => {
            let command = this.getMyControl('componentLoc.command');
            if(_ ==='WEB_SERVICE') command.enable();
            else command.disable();
        });
        this.getMyControl('componentLoc.command').disable();
    }

}
