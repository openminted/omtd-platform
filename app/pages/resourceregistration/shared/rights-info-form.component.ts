import {Component, OnInit, Input, Type, Injector} from "@angular/core";
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

            <div class="form-group-divider"></div>
            
            <form-inline [description]="rightsStatementDesc" [valid]="getMyControl('rightsStatement').valid">
                <select name="role" class="uk-select" formControlName="rightsStatement">
                    <option *ngFor="let value of rightsStatementEnum" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </form-inline>
        
        </div>

`,
    styleUrls: ['./templates/common.css']
})
export class RightsInfoForm extends MyGroup {

    readonly groupDefinition = {
        rightsStatement : "OPEN_ACCESS"
    };

    constructor(private injector : Injector) {
        super(injector);
        this.licenseInfoDesc = Object.assign({},licenceInfoDesc);
    }
    readonly rightsStatementEnum : EnumValues[] = rightsStatementEnum;
    readonly rightsStatementDesc : Description = rightsStatementDesc;

    licenseInfoDesc : Description;

    licenseType : Type<any> = LicenseInfoForm;

}

@Component({
    selector: 'license-info',
    template: `
<div [formGroup]="group">
    <form-inline [description]="licenceDesc" [valid]="getMyControl('licence').valid" [params]="null">
        <select name="role" class="uk-select" formControlName="licence">
            <option *ngFor="let value of licenceEnum" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </form-inline>
    
    <div [hidden]="getMyControl('licence').value !== 'NON_STANDARD_LICENCE_TERMS'">
        <div class="form-group-divider"></div>
    
        <form-inline [description]="nonStandardLicenceNameDesc" [valid]="getMyControl('nonStandardLicenceName').valid">
            <input type="text" class="uk-input" formControlName="nonStandardLicenceName" placeholder="Name (*)">
        </form-inline>
    
        <div class="form-group-divider"></div>
    
        <form-inline [description]="nonStandardLicenceTermsURLDesc" [valid]="getMyControl('nonStandardLicenceTermsURL').valid">
            <input type="text" class="uk-input" formControlName="nonStandardLicenceTermsURL" placeholder="URL (*)">
        </form-inline>
    </div>
</div>
`,
    styleUrls: ['./templates/common.css']
})
export class LicenseInfoForm extends MyGroup {

    readonly groupDefinition = {
        // licenceInfo : this._fb.array([
        //     this._fb.group({
        licence : ['', Validators.required],
        nonStandardLicenceName : ['',Validators.required],
        nonStandardLicenceTermsURL : ['',Validators.required]
        //     })
        // ])
    };

    constructor(private injector : Injector) {
        super(injector);
        this.licenceDesc = Object.assign({},licenceInfoDesc);
        this.licenceDesc.label = null;
        this.nonStandardLicenceNameDesc.label = null;
        this.nonStandardLicenceTermsURLDesc.label = null;
    }

    readonly licenceEnum : EnumValues[] = licenceEnum;
    readonly licenceDesc : Description = licenceDesc;
    readonly nonStandardLicenceNameDesc : Description = nonStandardLicenceNameDesc;
    readonly nonStandardLicenceTermsURLDesc : Description = nonStandardLicenceTermsURLDesc;

    ngOnInit() {
        super.ngOnInit();
        this.getMyControl('licence').valueChanges.subscribe(_ => {
            let nonStandardLicenceName = this.getMyControl('nonStandardLicenceName');
            let nonStandardLicenceTermsURL = this.getMyControl('nonStandardLicenceTermsURL');
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

        let nonStandardLicenceName = this.getMyControl('nonStandardLicenceName');
        let nonStandardLicenceTermsURL = this.getMyControl('nonStandardLicenceTermsURL');
        nonStandardLicenceName.disable();
        nonStandardLicenceTermsURL.disable();
    }


}