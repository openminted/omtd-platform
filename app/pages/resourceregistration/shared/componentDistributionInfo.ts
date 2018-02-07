/**
 * Created by stefania on 1/22/17.
 */
import { Component, Input, Type } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { componentDistributionFormEnum, EnumValues, webServiceTypeEnum } from "../../../domain/omtd.enum";
import { MyGroup } from "../myform/my-group.interface";
import {
    commandDesc,
    componentDistributionFormDesc,
    componentDistributionInfoDesc,
    Description,
    distributionLocationDesc, webServiceTypeDesc
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
    <form-inline [description]="componentDistributionFormDesc" [valid]="getMyControl('componentDistributionForm').valid">
        <select name="role" class="uk-select" formControlName="componentDistributionForm">
            <option *ngFor="let value of componentDistributionFormEnum" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </form-inline>
    
    <div class="form-group-divider"></div>

    <div [hidden]="getMyControl('componentDistributionForm').value !== 'DOCKER_IMAGE'">
        <div  class="form-group-divider"></div>

        <form-inline [description]="commandDesc" [valid]="getMyControl('command').valid">
            <input type="text" class="uk-input" formControlName="command" placeholder="{{commandDesc.label}}">
        </form-inline>
    </div>

    <div [hidden]="getMyControl('componentDistributionForm').value !== 'WEB_SERVICE'">
        <div  class="form-group-divider"></div>

        <form-inline [description]="webServiceTypeDesc" [valid]="getMyControl('webServiceType').valid">
            <select name="role" class="uk-select" formControlName="webServiceType">
                <option *ngFor="let value of webServiceTypeEnum" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                </option>
            </select>
        </form-inline>
    </div>

    <div class="form-group-divider"></div>

    <form-inline [description]="distributionURLDesc" [valid]="getMyControl('distributionLocation').valid">
        <input type="text" class="uk-input" formControlName="distributionLocation" placeholder="{{distributionURLDesc.label}}">
    </form-inline>
</div>  
    
    `,
    styleUrls : ['./templates/common.css']
})
export class ComponentDistributionInfoFormControl extends MyGroup {

    componentDistributionFormDesc : Description = componentDistributionFormDesc;
    distributionURLDesc : Description = distributionLocationDesc;
    commandDesc : Description = commandDesc;
    webServiceTypeDesc : Description = webServiceTypeDesc;
    readonly componentDistributionFormEnum : EnumValues[] = componentDistributionFormEnum;
    readonly webServiceTypeEnum : EnumValues[] = webServiceTypeEnum;
    readonly commandRequiredDistributions : string[] = ['WEB_SERVICE', 'DOCKER_IMAGE'];

    readonly groupDefinition = {
        componentDistributionForm : ['', Validators.required],
        distributionLocation : ['', Validators.required],
        command : ['', Validators.required],
        webServiceType : ['',Validators.required]
    };

    ngOnInit() {
        this.commandDesc.mandatory = true;
        this.webServiceTypeDesc.mandatory = true;
        super.ngOnInit();
        this.getMyControl('componentDistributionForm').valueChanges.subscribe(_ => {
            let command = this.getMyControl('command');
            let webServiceType = this.getMyControl('webServiceType');
            console.log(_);
            if(_ ==='DOCKER_IMAGE') {
                console.log("Enable command");
                command.enable();
                webServiceType.disable();
            }
            else if (_ === 'WEB_SERVICE') {
                console.log("Enable web service type");
                webServiceType.enable();
                command.disable();
            }
            else {
                command.disable();
                webServiceType.disable();
            }
        });
        this.getMyControl('command').disable();
        this.getMyControl('webServiceType').disable();
    }

}
