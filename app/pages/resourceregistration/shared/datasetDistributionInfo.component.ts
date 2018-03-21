import { Component, Injector, Input, Type } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { distributionMediumEnum, EnumValues } from "../../../domain/omtd.enum";
import { MyGroup } from "../myform/my-group.interface";
import {
    datasetDistributionInfoDesc,
    Description,
    distributionLocationDesc,
    distributionMediumDesc,
    sizeInfoDesc,
    textFormatInfoDesc
} from "../../../domain/omtd.description";
import { SizeInfoFormControl } from "./sizeInfo.component";
import { TextFormatInfoFormControl } from "./text-format-info-form.component";
import { ResourceService } from "../../../services/resource.service";
import { error } from "util";

/**
 * Created by stefanos on 16/1/2017.
 */

@Component({
    selector: 'datasetDistributionsInfo-form',
    template: `
        <div [formGroup]="parentGroup">

            <!--<datasetDistributionInfo-form [parentGroup]="parentGroup" [name]="'datasetDistributionInfo'"></datasetDistributionInfo-form>-->
            <form-repeat [component]="datasetDistributionType" [parentGroup]="parentGroup"
                         [name]="'distributionInfos'" [required]="true" [description]="datasetDistributionDesc">
            </form-repeat>

        </div>
    `,
    styleUrls: ['./templates/common.css']
})
export class DatasetDistributionsInfoFormControl {
    @Input()
    parentGroup: FormGroup = null;
    datasetDistributionType: Type<any> = DatasetDistributionInfoFormControl;
    readonly datasetDistributionDesc: Description = datasetDistributionInfoDesc;

}

@Component({
    selector: 'datasetDistributionsZipInfo-form',
    template: `
        <div [formGroup]="parentGroup">

            <!--<datasetDistributionInfo-form [parentGroup]="parentGroup" [name]="'datasetDistributionInfo'"></datasetDistributionInfo-form>-->
            <form-repeat [component]="datasetDistributionType" [parentGroup]="parentGroup"
                         [name]="'distributionInfos'" [required]="true" [description]="datasetDistributionDesc">
            </form-repeat>

        </div>
    `,
    styleUrls: ['./templates/common.css']
})
export class DatasetDistributionsZipInfoFormControl {
    @Input()
    parentGroup: FormGroup = null;
    datasetDistributionType: Type<any> = DatasetDistributionZipInfoFormControl;
    readonly datasetDistributionDesc: Description = datasetDistributionInfoDesc;

}


@Component({
    selector: 'datasetDistributionInfo-form',
    template: `
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
    styleUrls: ['./templates/common.css']
})
export class DatasetDistributionInfoFormControl extends MyGroup {

    readonly datasetDistributionDesc: Description = datasetDistributionInfoDesc;
    datasetDistributionLocType: Type<any> = DatasetDistributionLocInfoFormControl;
    sizeInfoType: Type<any> = SizeInfoFormControl;
    textFormatType: Type<any> = TextFormatInfoFormControl;
    textFormatDesc: Description = textFormatInfoDesc;
    sizeInfoDesc: Description = sizeInfoDesc;
    readonly groupDefinition = {};

}

@Component({
    selector: 'datasetDistributionZipInfo-form',
    template: `
        <div [formGroup]="group">
            <form-inline [description]="distributionMediumDesc" [valid]="getMyControl('distributionMedium').valid">
                <input type="text" [readonly]="uploaded" class="uk-input uk-width-3-5" formControlName="distributionLocation"
                       placeholder="{{distributionURLDesc.label}}">
                <select name="role" class="uk-select uk-width-1-5" formControlName="distributionMedium">
                    <option *ngFor="let value of distributionMediumEnum" [value]="value.key"
                            [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>

                <div class="form-group-divider">
                    <span class="uk-text-meta">Or upload a zip<span uk-tooltip="pos: right; delay:2000"
                                                                    title="Stefania likes dots...">...</span></span>
                </div>

                <div class="js-upload uk-placeholder uk-text-center zipInline">
                    <span uk-icon="icon: cloud-upload"></span>
                    <span class="uk-text-middle">Attach your zip file by dropping it here or by</span>
                    <div uk-form-custom>
                        <input type="file" multiple name="xmlFile" (change)="report($event)">
                        <span class="uk-link">selecting one</span>
                    </div>
                    <div>&lt; {{uploadedZip ? uploadedZip.name : "No file selected"}} &gt;</div>
                    <ng-container [ngSwitch]="uploaded">
                        <button *ngSwitchCase="false"
                                class="uk-button uk-button-primary uk-button-small uk-margin-small-top"
                                (click)="upload()" [disabled]="!uploadedZip">Upload!
                            <span *ngIf="uploading"><i class="fa fa-spinner fa-spin"></i></span>
                        </button>
                        <button *ngSwitchCase="true"
                                class="uk-button uk-button-secondary uk-button-small uk-margin-small-top"
                                (click)="delete()" [disabled]="!uploadedZip">Delete!
                        </button>
                    </ng-container>
                </div>
            </form-inline>

            <div class="form-group-divider"></div>

            <form-repeat-inline [component]="sizeInfoType" [parentGroup]="group"
                                [name]="'sizes'" [required]="true" [description]="sizeInfoDesc">

            </form-repeat-inline>

            <div class="form-group-divider"></div>

            <form-repeat-inline [component]="textFormatType" [parentGroup]="group"
                                [name]="'textFormats'" [required]="true" [description]="textFormatDesc">

            </form-repeat-inline>

        </div>


    `,
    styleUrls: ['./templates/common.css']
})
export class DatasetDistributionZipInfoFormControl extends MyGroup {

    readonly datasetDistributionDesc: Description = datasetDistributionInfoDesc;
    datasetDistributionLocType: Type<any> = DatasetDistributionLocInfoFormControl;
    sizeInfoType: Type<any> = SizeInfoFormControl;
    textFormatType: Type<any> = TextFormatInfoFormControl;
    textFormatDesc: Description = textFormatInfoDesc;
    sizeInfoDesc: Description = sizeInfoDesc;
    readonly distributionMediumEnum: EnumValues[] = distributionMediumEnum;
    readonly distributionMediumDesc: Description = distributionMediumDesc;
    readonly distributionURLDesc: Description = distributionLocationDesc;
    private resourceService: ResourceService;
    uploaded = false;
    uploading = false;
    uploadedZip: File;
    readonly groupDefinition = {
        distributionMedium: ['', Validators.required],
        distributionLocation: ['', Validators.compose([Validators.required, Validators.pattern("(\\b(https?|ftp|file)://)?[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]")])]
    };

    constructor(injector: Injector) {
        super(injector);
        this.resourceService = injector.get(ResourceService);
    }

    report($event: any) {
        this.uploadedZip = $event.target.files[0];
        console.log(this.uploadedZip);
    }

    delete() {
        this.uploaded = false;
        this.getMyControl('sizes').patchValue([
            {
                "size": "",
                "sizeUnit": ""
            }
        ]);
        this.getMyControl('distributionLocation').setValue("");
        this.uploadedZip = null;
    }

    upload() {
        this.uploading=true;
        this.resourceService.uploadZip(this.uploadedZip.name, this.uploadedZip).subscribe(
            ret => {
                this.uploading=false;
                this.uploaded = true;
                let url = `${this.resourceService.prefix}/request/store/download?archiveId=`;
                this.getMyControl('distributionLocation').setValue(url+ret.archiveId);
                this.getMyControl('distributionMedium').setValue('DOWNLOADABLE');
                this.getMyControl('sizes').patchValue([
                    {
                        "size": (ret.compressedFileSize / (1024 ** 2)).toFixed(2),
                        "sizeUnit": "MB"
                    }
                ])
            },() => {this.uploading=false;});
    }

}


@Component({
    selector: 'datasetDistributionLocInfo-form',
    template: `
        <div [formGroup]="group">
            <form-inline [description]="distributionMediumDesc" [valid]="getMyControl('distributionMedium').valid">
                <select name="role" class="uk-select" formControlName="distributionMedium">
                    <option *ngFor="let value of distributionMediumEnum" [value]="value.key"
                            [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </form-inline>

            <div class="form-group-divider"></div>

            <form-inline [description]="distributionURLDesc" [valid]="getMyControl('distributionLocation').valid">
                <input type="text" class="uk-select" formControlName="distributionLocation"
                       placeholder="{{distributionURLDesc.label}}">
            </form-inline>
        </div>
    `,
    styleUrls: ['./templates/common.css']
})
export class DatasetDistributionLocInfoFormControl extends MyGroup {

    readonly distributionMediumEnum: EnumValues[] = distributionMediumEnum;
    readonly distributionMediumDesc: Description = distributionMediumDesc;
    readonly distributionURLDesc: Description = distributionLocationDesc;


    readonly groupDefinition = {
        distributionMedium: ['', Validators.required],
        distributionLocation: ['', Validators.compose([Validators.required, Validators.pattern("(\\b(https?|ftp|file)://)?[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]")])]
    };


}