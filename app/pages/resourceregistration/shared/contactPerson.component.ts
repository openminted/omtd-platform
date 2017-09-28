/**
 * Created by stefanos on 25/5/2017.
 */
import {AfterViewInit, Component, Injector, Type} from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import {  personIdentifierSchemeNameEnum } from "../../../domain/omtd.enum";
import {
    Description, surnameDesc, nameDesc, givenNameDesc,
    personIdentifierDesc, contactInfoDesc
} from "../../../domain/omtd.description";
import {MyStringArrayFormGroup, MyStringDescFormGroup, MyStringFormGroup} from "./my-string-form.component";
import { IdentifierCommonFormControl } from "./identifierCommon.component";
import {MyChoiceComponents} from "../myform/my-choice.interface";
import {MyArrayInline} from "../myform/my-array.interface";

@Component({
    selector: 'contactPerson-form',
    template : `
        
        
<form-choice [parentGroup]="parentGroup" [components]="myChoices">
</form-choice>

<!-- <div [hidden]="radioButtonSelected!=='Separate'">

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

<div class="form-group-divider"></div> -->


<form-repeat-inline [component]="myIdentifierType" [parentGroup]="group" [data]="personIdentifierData"
                    [name]="'personIdentifiers'" [required]="true" [description]="personIdentifierDesc">

</form-repeat-inline>

`,
    styleUrls : ['./templates/common.css']
})

export class ContactPersonFormControl extends MyGroup {

    readonly groupDefinition = {};

    readonly radioButton : string[] = ['Separate','Name'];

    myStringType : Type<any> = MyStringFormGroup;
    myIdentifierType : Type<any> = IdentifierCommonFormControl


    radioButtonSelected : string = this.radioButton[0];
    nameDesc : Description = nameDesc;
    separateDesc : Description = surnameDesc;

    contactInfoDesc : Description = contactInfoDesc;
    personIdentifierDesc : Description = personIdentifierDesc;

    personIdentifierData : any = {
        schemeName : 'personIdentifierSchemeName',
        schemeEnum : personIdentifierSchemeNameEnum
    };

    readonly myChoices : MyChoiceComponents[] = [];
    constructor(private injector : Injector) {
        super(injector);
        this.separateDesc.label="Separate";
        //MyArrayInline
        this.myChoices.push(new MyChoiceComponents("separateNames",MyStringDescFormGroup,this.separateDesc));
        this.myChoices.push(new MyChoiceComponents("names",MyStringDescFormGroup,this.nameDesc));

    }
}


@Component({
    selector: 'surname-given-name-group',
    template : `
        <form-repeat-inline [component]="myStringType" [parentGroup]="group"
                            [name]="'surnames'" [required]="true" [description]="surnameDesc">

        </form-repeat-inline>

        <div class="form-group-divider"></div>

        <form-repeat-inline [component]="myStringType" [parentGroup]="group"
                            [name]="'givenNames'" [description]="givenNameDesc">

        </form-repeat-inline>
    `,
    styleUrls : ['./templates/common.css']
})

export class SurnameGivenNameFormGroup extends MyGroup {

    public groupDefinition : any = {};

    surnameDesc : Description = surnameDesc;

    givenNameDesc : Description = givenNameDesc;

    myStringType : Type<any> = MyStringFormGroup;

}
