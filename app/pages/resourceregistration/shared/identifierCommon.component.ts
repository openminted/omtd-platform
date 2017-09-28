import {Component, Injector, Input} from "@angular/core";
import {MyGroup} from "../myform/my-group.interface";
import {Validators, FormBuilder} from "@angular/forms";
import {EnumValues, personIdentifierSchemeNameEnum} from "../../../domain/omtd.enum";
/**
 * Created by stefanos on 24/5/2017.
 */
@Component({
    selector: 'identifierCommon-form',
    template : `
<div [formGroup]="group" class="row">
    <div class="col-sm-5 col-md-4" [ngClass]="{'has-error':!group.get('value').valid}">
        <input type="text" class="form-control" formControlName="value" placeholder="value">
    </div>
    <div class="col-sm-3 col-md-3" [ngClass]="{'has-error':!group.get(schemeName).valid}">
        <select name="role" class="form-control" formControlName="{{schemeName}}">
            <option *ngFor="let value of schemeEnum" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </div>
    <div class="col-sm-4 col-md-4">
        <input type="text" class="form-control" formControlName="schemeURI" placeholder="uri">
    </div>
</div>
`,
    styleUrls : ['./templates/common.css']
})

export class IdentifierCommonFormControl extends MyGroup {

    schemeName : string = 'schemeName';
    schemeEnum : EnumValues[] = null;

    protected definition = {
        value : ['', Validators.required],
        schemeURI : ''
    };

    public generate() {
        this.init();
        let ret = this._fb.group(this.groupDefinition);
        if (!this.required)
            Object.keys(ret.controls).forEach(item => ret.controls[item].clearValidators());
        return ret;
    }

    init() {
        if(!this.data) {
            throw `Please add a { schemeName , schemeEnum } object as a data input in ${name} Component`;
        } else {
            this.schemeName = this.data.schemeName;
            if (!this.schemeName || this.schemeName == '')
                throw `You forgot to add a schemeName to ${name} component`;
            this.schemeEnum = this.data.schemeEnum;
            if(!this.schemeEnum || this.schemeEnum == null) {
                throw `You forgot to add a schemeEnum to ${name} component`;
            }
        }
        this.definition[this.schemeName] = ['', Validators.required];
        this.groupDefinition = this.definition;
    }
}
