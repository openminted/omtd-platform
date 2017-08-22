/**
 * Created by stefanos on 25/5/2017.
 */
import { AfterViewInit, Component, Type} from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import {  personIdentifierSchemeNameEnum } from "../../../domain/omtd.enum";
import {
    Description, surnameDesc, nameDesc, givenNameDesc,
    personIdentifierDesc, contactInfoDesc
} from "../../../domain/omtd.description";
import { MyStringFormGroup} from "./my-string-form.component";
import { IdentifierCommonFormControl } from "./identifierCommon.component";

@Component({
    selector: 'contactPerson-form',
    template : `

<form-inline [description]="{desc : '', label : 'Choose'}" [params]="null">
    <div class="uk-margin uk-grid-small uk-child-width-auto">
        <label *ngFor="let radio of radioButton">
            <input type="radio" class="uk-radio" name="{{contactInfoDesc.desc + index}}" [checked]="radio === radioButtonSelected"
                   (click)="changeType(radio)">
            {{radio}}
        </label>
    </div>
</form-inline>

<div [hidden]="radioButtonSelected!=='Separate'">

    <form-repeat-inline [component]="myStringType" [parentGroup]="group"
                        [name]="'surnames'" [required]="true" [description]="surnameDesc">

    </form-repeat-inline>

    <div class="form-group-divider"></div>
    
    <form-repeat-inline [component]="myStringType" [parentGroup]="group"
                        [name]="'givenNames'" [description]="givenNameDesc">

    </form-repeat-inline>
    
</div>

<div [hidden]="radioButtonSelected!=='Name'">
    <form-repeat-inline [component]="myStringType" [parentGroup]="group"
                        [name]="'names'" [required]="true" [description]="nameDesc">

    </form-repeat-inline>
</div>

<div class="form-group-divider"></div>


<form-repeat-inline [component]="myIdentifierType" [parentGroup]="group" [data]="personIdentifierData"
                    [name]="'personIdentifiers'" [required]="true" [description]="personIdentifierDesc">

</form-repeat-inline>

`,
    styleUrls : ['./templates/common.css']
})

export class ContactPersonFormControl extends MyGroup implements AfterViewInit {

    readonly groupDefinition = {};

    private readonly radioButton : string[] = ['Separate','Name'];

    myStringType : Type<any> = MyStringFormGroup;
    myIdentifierType : Type<any> = IdentifierCommonFormControl

    private surnameDesc : Description = surnameDesc;
    private radioButtonSelected : string = this.radioButton[0];
    private nameDesc : Description = nameDesc;
    private givenNameDesc : Description = givenNameDesc;
    private contactInfoDesc : Description = contactInfoDesc;
    private personIdentifierDesc : Description = personIdentifierDesc;

    private personIdentifierData : any = {
        schemeName : 'personIdentifierSchemeName',
        schemeEnum : personIdentifierSchemeNameEnum
    };

    public changeType(choice: string) :void {
        if (this.radioButtonSelected !== choice) {
            this.radioButtonSelected = choice;
            this.applyChanges();
        }
    }

    ngAfterViewInit(): void {
        this.applyChanges();
    }

    private applyChanges() {
        if(this.radioButtonSelected === 'Separate') {
            this.getMyControl('names').disable();
            this.getMyControl('surnames').enable();
            this.getMyControl('givenNames').enable();
        }
        else if(this.radioButtonSelected === 'Name') {
            this.getMyControl('names').enable();
            this.getMyControl('surnames').disable();
            this.getMyControl('givenNames').disable();
        }
    }
}

