import {Component, OnInit, Input, Type} from "@angular/core";
import {FormGroup, FormBuilder, FormControl, FormArray, Validators} from "@angular/forms";
import {EnumValues, distributionMediumEnum} from "../../../domain/omtd.enum";
import {MyGroup} from "../myform/my-group.interface";
import {
    Description, datasetDistributionInfoDesc, distributionMediumDesc,
    distributionLocationDesc, sizeInfoDesc, textFormatInfoDesc
} from "../../../domain/omtd.description";
import {SizeInfoFormControl} from "./sizeInfo.component";
import {TextFormatInfoFormControl} from "./text-format-info-form.component";
/**
 * Created by stefanos on 16/1/2017.
 */

@Component({
    selector: 'datasetDistributionsInfo-form',
    template : `    
    <div [formGroup]="parentGroup">

        <datasetDistributionInfo-form [parentGroup]="parentGroup" [name]="'datasetDistributionInfo'"></datasetDistributionInfo-form>
        <!--<form-repeat [component]="datasetDistributionType" [parentGroup]="parentGroup" -->
                            <!--[name]="'distributionInfos'" [required]="true" [description]="datasetDistributionDesc">-->
        <!--</form-repeat>-->
        
    </div>
`,
    styleUrls : ['./templates/common.css']
})
export class DatasetDistributionsInfoFormControl {
    @Input()
    parentGroup : FormGroup = null;
    datasetDistributionType : Type<any> = DatasetDistributionInfoFormControl;
    readonly datasetDistributionDesc : Description = datasetDistributionInfoDesc;

}


@Component({
    selector: 'datasetDistributionInfo-form',
    template : `
<div [formGroup]="group">
    <!--<form-repeat-inline [component]="datasetDistributionLocType" [parentGroup]="parentGroup" [hidden]="true"-->
                        <!--[name]="'distributionLoc'" [required]="true" [description]="datasetDistributionDesc">-->
        <!---->
    <!--</form-repeat-inline>-->

    <form-repeat-inline [component]="sizeInfoType" [parentGroup]="group"
                        [name]="'sizes'" [required]="true" [description]="sizeInfoDesc">

    </form-repeat-inline>
    
    <div class="form-group-divider"></div>

    <form-repeat-inline [component]="textFormatType" [parentGroup]="group"
                        [name]="'textFormats'" [required]="true" [description]="textFormatDesc">

    </form-repeat-inline>
    <!--<rightsInfo-form [parentGroup]="group" [name]="'rightsInfo'"></rightsInfo-form>-->
    
</div>  
    

`,
    styleUrls : ['./templates/common.css']
})
export class DatasetDistributionInfoFormControl extends MyGroup {

    readonly datasetDistributionDesc : Description = datasetDistributionInfoDesc;
    datasetDistributionLocType : Type<any> = DatasetDistributionLocInfoFormControl;
    sizeInfoType : Type<any> = SizeInfoFormControl;
    textFormatType : Type<any> = TextFormatInfoFormControl;
    textFormatDesc : Description = textFormatInfoDesc;
    sizeInfoDesc : Description = sizeInfoDesc;
    readonly groupDefinition = {

    };


}

@Component({
    selector: 'datasetDistributionLocInfo-form',
    template : `
        <div [formGroup]="group">
            <form-inline [description]="distributionMediumDesc" [valid]="getMyControl('distributionMedium').valid">
                <select name="role" class="uk-select" formControlName="distributionMedium">
                    <option *ngFor="let value of distributionMediumEnum" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </form-inline>

            <div class="form-group-divider"></div>

            <form-inline [description]="distributionURLDesc" [valid]="getMyControl('distributionLocation').valid">
                <input type="text" class="uk-select" formControlName="distributionLocation" placeholder="{{distributionURLDesc.label}}">
            </form-inline>
        </div>
    `,
    styleUrls : ['./templates/common.css']
})
export class DatasetDistributionLocInfoFormControl extends MyGroup {

    readonly distributionMediumEnum : EnumValues[] = distributionMediumEnum;
    readonly distributionMediumDesc : Description = distributionMediumDesc;
    readonly distributionURLDesc : Description = distributionLocationDesc;


    readonly groupDefinition = {
        distributionMedium : ['', Validators.required],
        distributionLocation : ['', Validators.compose([Validators.required, Validators.pattern("(\\b(https?|ftp|file)://)?[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]")])]
    };


}