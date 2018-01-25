import { Component } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { Validators } from "@angular/forms";
import {
    EnumValues, organizationIdentifierSchemeNameEnum, personIdentifierSchemeNameEnum,
    publicationIdentifierSchemeNameEnum, resourceIdentifierSchemeNameEnum
} from "../../../domain/omtd.enum";
/**
 * Created by stefanos on 24/5/2017.
 */
@Component({
    selector: 'identifierCommon-form',
    template : `
<div [formGroup]="group" class="uk-grid-small" uk-grid>
    <div class="uk-width-2-5" >
        <input type="text" class="uk-input" formControlName="value" placeholder="value" [ngClass]="{'has-error':!group.get('value').valid}">
    </div>
    <div class="uk-width-2-5" >
        <select name="role" class="uk-select" formControlName="{{schemeName}}" [ngClass]="{'has-error':!group.get(schemeName).valid}">
            <option *ngFor="let value of schemeEnum" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </div>
    <div class="uk-width-1-5">
        <input type="text" class="uk-input" formControlName="schemeURI" placeholder="uri">
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
        let ret = this._fb.group(this.groupDefinition as { [key:string]:any });
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

@Component({
    selector: 'personIdentifier-form',
    template : `
<div [formGroup]="group" class="uk-grid-small" uk-grid>
    <div class="uk-width-2-5" >
        <input type="text" class="uk-input" formControlName="value" placeholder="value (*)" [ngClass]="{'has-error':!getMyControl('value').valid}">
    </div>
    <div class="uk-width-2-5" >
        <select name="role" class="uk-select" formControlName="publicationIdentifierSchemeName" [ngClass]="{'has-error':!getMyControl('publicationIdentifierSchemeName').valid}">
            <option *ngFor="let value of schemeEnum" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </div>
    <div class="uk-width-1-5">
        <input type="text" class="uk-input" formControlName="schemeURI" placeholder="uri">
    </div>
</div>
`,
    styleUrls : ['./templates/common.css']
})
export class PersonIdentifierCommonFormControl extends MyGroup {

    schemeEnum : EnumValues[] = personIdentifierSchemeNameEnum;

    groupDefinition = {
        value : ['', Validators.required],
        schemeURI : '',
        publicationIdentifierSchemeName : ''
    };
}

@Component({
    selector: 'organizationIdentifier-form',
    template : `
<div [formGroup]="group" class="uk-grid-small" uk-grid>
    <div class="uk-width-2-5" >
        <input type="text" class="uk-input" formControlName="value" placeholder="value (*)" [ngClass]="{'has-error':!getMyControl('value').valid}">
    </div>
    <div class="uk-width-2-5" >
        <select name="role" class="uk-select" formControlName="organizationIdentifierSchemeName" [ngClass]="{'has-error':!getMyControl('organizationIdentifierSchemeName').valid}">
            <option *ngFor="let value of schemeEnum" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </div>
    <div class="uk-width-1-5">
        <input type="text" class="uk-input" formControlName="schemeURI" placeholder="uri">
    </div>
</div>
`,
    styleUrls : ['./templates/common.css']
})
export class OrganizationIdentifierCommonFormControl extends MyGroup {

    schemeEnum : EnumValues[] = organizationIdentifierSchemeNameEnum;

    groupDefinition = {
        value : ['', Validators.required],
        schemeURI : '',
        organizationIdentifierSchemeName : ''
    };
}

@Component({
    selector: 'organizationIdentifier-form',
    template : `
<div [formGroup]="group" class="uk-grid-small" uk-grid>
    <div class="uk-width-2-5" >
        <input type="text" class="uk-input" formControlName="value" placeholder="value (*)" [ngClass]="{'has-error':!getMyControl('value').valid}">
    </div>
    <div class="uk-width-2-5" >
        <select name="role" class="uk-select" formControlName="resourceIdentifierSchemeName" [ngClass]="{'has-error':!getMyControl('resourceIdentifierSchemeName').valid}">
            <option *ngFor="let value of schemeEnum" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </div>
    <div class="uk-width-1-5">
        <input type="text" class="uk-input" formControlName="schemeURI" placeholder="uri">
    </div>
</div>
`,
    styleUrls : ['./templates/common.css']
})
export class ResourceIdentifierCommonFormControl extends MyGroup {

    schemeEnum : EnumValues[] = resourceIdentifierSchemeNameEnum;

    groupDefinition = {
        value : ['', Validators.required],
        schemeURI : '',
        resourceIdentifierSchemeName : ''
    };
}

@Component({
    selector: 'publicationIdentifier-form',
    template : `
<div [formGroup]="group" class="uk-grid-small" uk-grid>
    <div class="uk-width-2-5" >
        <input type="text" class="uk-input" formControlName="value" placeholder="value (*)" [ngClass]="{'has-error':!getMyControl('value').valid}">
    </div>
    <div class="uk-width-2-5" >
        <select name="role" class="uk-select" formControlName="publicationIdentifierSchemeName" [ngClass]="{'has-error':!getMyControl('publicationIdentifierSchemeName').valid}">
            <option *ngFor="let value of schemeEnum" [value]="value.key" [selected]="value.key == ''">
                {{value.value}}
            </option>
        </select>
    </div>
    <div class="uk-width-1-5">
        <input type="text" class="uk-input" formControlName="schemeURI" placeholder="uri">
    </div>
</div>
`,
    styleUrls : ['./templates/common.css']
})
export class PublicationIdentifierCommonFormControl extends MyGroup {

    schemeEnum : EnumValues[] = publicationIdentifierSchemeNameEnum;

    groupDefinition = {
        value : ['', Validators.required],
        schemeURI : '',
        publicationIdentifierSchemeName : ''
    };
}