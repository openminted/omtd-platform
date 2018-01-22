import { Component, Injector, SimpleChange, SimpleChanges, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { actorTypeEnum, EnumValues } from "../../../domain/omtd.enum";
import {
    actorInfoTypeDesc, affiliationDesc, communicationInfoDesc, Description, nameTypeDesc,
    personIdentifierDesc
} from "../../../domain/omtd.description";
import { Validators } from "@angular/forms";
import { PersonIdentifierCommonFormControl } from "./identifierCommon.component";
import { title } from "../../../domain/utils";

@Component({
    selector: 'actorInfo-form',
    template : `
        <div [formGroup]="group">
            <form-inline [description]="actorTypeDesc" [valid]="group.valid">
                <!--<input type="text" class="uk-input" formControlName="surname" placeholder="Surname">-->
                <select name="role" class="uk-select" formControlName="actorType">
                    <option *ngFor="let value of actorTypeEnum" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </form-inline>

            <div class="form-group-divider"></div>
            <div [ngSwitch]="getMyControl('actorType').value">
                <personInfo-form *ngSwitchCase="'PERSON'" [parentGroup]="group" [name]="'relatedPerson'"></personInfo-form>
                <groupInfo-form *ngSwitchCase="'GROUP'" [parentGroup]="group" [name]="'relatedGroup'"></groupInfo-form>
                <organizationInfo-form *ngSwitchCase="'ORGANIZATION'" [parentGroup]="group" [name]="'relatedOrganization'"></organizationInfo-form>
                <div *ngSwitchDefault></div>
            </div>
        </div>
`,
    styleUrls : ['./templates/common.css']
})
export class ActorInfoFormControl extends MyGroup {

    actorTypeEnum : EnumValues[] = actorTypeEnum;
    actorTypeDesc : Description = actorInfoTypeDesc;
    groupDefinition : any = {
        actorType : ["",Validators.required]
    };

    actorTypePrevious : string = '';

    ngOnInit(){
        super.ngOnInit();
        this.getMyControl('actorType').valueChanges.subscribe(
            value => {

                if (this.actorTypePrevious != '') {
                    console.log("disable",title(this.actorTypePrevious.toLowerCase()));
                    let previousControl = this.getMyControl('related' + title(this.actorTypePrevious.toLowerCase()));
                    if (previousControl) previousControl.disable();
                }
                console.log("enable",'related' + title(value.toLowerCase()));
                let control = this.getMyControl('related' + title(value.toLowerCase()));
                if (control) control.enable();
                this.actorTypePrevious = value;
            }
        )
    }
}

@Component({
    selector: 'personInfo-form',
    template : `
        <div [formGroup]="group">
            <form-inline [description]="actorTypeDesc" [valid]="getMyControl('surname')">
                <input type="text" class="uk-input uk-width-1-3\@m" formControlName="surname" placeholder="Surname (*)">
                <input type="text" class="uk-input uk-width-1-3\@m" formControlName="givenName" placeholder="Given Name">
            </form-inline>

            <div class="form-group-divider"></div>
            
            <form-repeat-inline [component]="personIdentifierComponent" [parentGroup]="group" [initEmpty]="true"
                                [description]="personIdentifierDesc" [name]="'personIdentifiers'"></form-repeat-inline>

            <div class="form-group-divider"></div>
            
            <communicationInfo-form [parentGroup]="group" [name]="'communicationInfo'" 
                                    [description]="communicationInfoDesc"></communicationInfo-form>

            <div class="form-group-divider"></div>
            
            <div [groupForms]="affiliationDesc.label">
                <affiliation-form [parentGroup]="group" [name]="'affiliation'"
                    [description]="affiliationDesc"></affiliation-form>
            </div>
        </div>
`,
    styleUrls : ['./templates/common.css']
})
export class PersonInfoFormControl extends MyGroup {

    personIdentifierComponent : Type<any> = PersonIdentifierCommonFormControl;
    personIdentifierDesc : Description = Object.assign({},personIdentifierDesc);
    actorTypeDesc : Description = nameTypeDesc;
    communicationInfoDesc : Description = communicationInfoDesc;
    affiliationDesc : Description = affiliationDesc;
    groupDefinition : any = {
        surname : ["",Validators.required],
        givenName : "",
    };

    constructor(injector : Injector) {
        super(injector);
        this.personIdentifierDesc.mandatory = false;
    }


}