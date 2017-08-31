import {Component, OnInit, Input, Type} from "@angular/core";
import {FormGroup, FormBuilder, FormArray, Validators} from "@angular/forms";
import {EnumValues, licenceEnum, rightsStatementEnum} from "../../../domain/omtd.enum";
import {
    Description, licenceDesc, licenceInfoDesc, nonStandardLicenceNameDesc,
    nonStandardLicenceTermsURLDesc, rightsStatementDesc
} from "../../../domain/omtd.description";
import {MyGroup} from "../myform/my-group.interface";
/**
 * Created by stefanos on 19/1/2017.
 */

@Component({
    selector: 'rightsInfo-form',
    template: `        
        <div [formGroup]="group">
            <form-repeat-inline [component]="licenseType" [parentGroup]="group"
                         [name]="'licenceInfos'" [required]="true" [description]="licenseInfoDesc">
            </form-repeat-inline>
        </div>
`,
    styleUrls: ['./templates/common.css']
})
export class RightsInfoForm extends MyGroup {

    readonly groupDefinition = {
        // rightsStatement : ''
    };


    private licenseInfoDesc : Description = licenceInfoDesc;

    private licenseType : Type<any> = LicenseInfoForm;

}

@Component({
    selector: 'license-info',
    template: `
<div [formGroup]="group">
    <div formGroupName="licenceInfo">
        <form-inline [description]="licenceDesc" [valid]="getMyControl('licenceInfo.licence').valid">
            <select name="role" class="form-control" formControlName="licence">
                <option *ngFor="let value of licenceEnum" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                </option>
            </select>
        </form-inline>
    
        <div [hidden]="getMyControl('licenceInfo.licence').value !== 'NON_STANDARD_LICENCE_TERMS'">
            <div class="form-group-divider"></div>
        
            <form-inline [description]="nonStandardLicenceNameDesc" [valid]="getMyControl('licenceInfo.nonStandardLicenceName').valid">
                <input type="text" class="form-control" formControlName="nonStandardLicenceName" placeholder="{{nonStandardLicenceNameDesc.label}}">
            </form-inline>
        
            <div class="form-group-divider"></div>
        
            <form-inline [description]="nonStandardLicenceTermsURLDesc" [valid]="getMyControl('licenceInfo.nonStandardLicenceTermsURL').valid">
                <input type="text" class="form-control" formControlName="nonStandardLicenceTermsURL" placeholder="{{nonStandardLicenceTermsURLDesc.label}}">
            </form-inline>
        </div>
    </div>
    <div formArrayName="rightsStatement">
        <form-inline [description]="rightsStatementDesc" [valid]="getMyControl('rightsStatement').valid">
            <select name="role" class="form-control" formControlName="0">
                <option *ngFor="let value of rightsStatementEnum" [value]="value.key" [selected]="value.key == ''">
                    {{value.value}}
                </option>
            </select>
        </form-inline>
    </div>
</div>
`,
    styleUrls: ['./templates/common.css']
})
export class LicenseInfoForm extends MyGroup {

    readonly groupDefinition = {
        licenceInfo : this._fb.group({
            licence : ['', Validators.required],
            nonStandardLicenceName : ['',Validators.required],
            nonStandardLicenceTermsURL : ['',Validators.required]
        }),
        rightsStatement : this._fb.array(["OPEN_ACCESS"])
    };


    private readonly rightsStatementEnum : EnumValues[] = rightsStatementEnum;
    private readonly rightsStatementDesc : Description = rightsStatementDesc;
    private readonly licenceEnum : EnumValues[] = licenceEnum;
    private readonly licenceDesc : Description = licenceDesc;
    private readonly nonStandardLicenceNameDesc : Description = nonStandardLicenceNameDesc;
    private readonly nonStandardLicenceTermsURLDesc : Description = nonStandardLicenceTermsURLDesc;

    ngOnInit() {
        super.ngOnInit();
        this.getMyControl('licenceInfo.licence').valueChanges.subscribe(_ => {
            let nonStandardLicenceName = this.getMyControl('licenceInfo.nonStandardLicenceName');
            let nonStandardLicenceTermsURL = this.getMyControl('licenceInfo.nonStandardLicenceTermsURL');
            if (_ !== 'NON_STANDARD_LICENCE_TERMS') {
                nonStandardLicenceName.disable();
                nonStandardLicenceTermsURL.disable();
            } else {
                nonStandardLicenceName.enable();
                nonStandardLicenceTermsURL.enable();
            }
        });

        // this.getMyControl('licenceInfo.licence').statusChanges.subscribe(_ => {
        //     let rightsStatement = this.getMyControl('rightsStatement');
        //     if (_ === 'VALID') {
        //         rightsStatement.clearValidators();
        //         rightsStatement.updateValueAndValidity();
        //     } else {
        //         rightsStatement.setValidators(Validators.required);
        //         rightsStatement.updateValueAndValidity();
        //     }
        // });
        //
        // this.getMyControl('rightsStatement').statusChanges.subscribe(_ => {
        //     let licence = this.getMyControl('licenceInfo.licence');
        //     if (_ === 'VALID') {
        //         licence.clearValidators();
        //         //licence.updateValueAndValidity();
        //     } else {
        //         licence.setValidators(Validators.required);
        //         //licence.updateValueAndValidity();
        //     }
        // });

        let nonStandardLicenceName = this.getMyControl('licenceInfo.nonStandardLicenceName');
        let nonStandardLicenceTermsURL = this.getMyControl('licenceInfo.nonStandardLicenceTermsURL');
        nonStandardLicenceName.disable();
        nonStandardLicenceTermsURL.disable();
    }


}