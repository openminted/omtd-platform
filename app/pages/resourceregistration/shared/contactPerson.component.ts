/**
 * Created by stefanos on 25/5/2017.
 */
import { Component, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { personIdentifierSchemeNameEnum } from "../../../domain/omtd.enum";
import {
    contactInfoDesc,
    Description,
    givenNameDesc,
    personIdentifierDesc,
    surnameDesc
} from "../../../domain/omtd.description";
import { IdentifierCommonFormControl } from "./identifierCommon.component";
import { Validators } from "@angular/forms";

@Component({
    selector: 'contactPerson-form',
    template: `
        <form-inline [description]="surnameDesc" [valid]="group.valid">
            <input type="text" class="uk-input" formControlName="surname" placeholder="Surname">
        </form-inline>

        <div class="form-group-divider"></div>

        <form-inline [description]="givenNameDesc" [valid]="group.valid">
            <input type="text" class="uk-input" formControlName="givenName" placeholder="Given Name">
        </form-inline>
        
        <div class="form-group-divider"></div>
        
        <form-repeat-inline [component]="myIdentifierType" [parentGroup]="group" [data]="personIdentifierData"
                            [name]="'personIdentifiers'" [required]="true" [description]="personIdentifierDesc">

        </form-repeat-inline>
    `,
    styleUrls: ['./templates/common.css']
})

export class ContactPersonFormControl extends MyGroup {

    readonly groupDefinition = {
        surname: ['', Validators.required],
        givenName: ''
    };

    myIdentifierType: Type<any> = IdentifierCommonFormControl

    surnameDesc: Description = surnameDesc;
    givenNameDesc: Description = givenNameDesc;

    contactInfoDesc: Description = contactInfoDesc;
    personIdentifierDesc: Description = personIdentifierDesc;

    personIdentifierData: any = {
        schemeName: 'personIdentifierSchemeName',
        schemeEnum: personIdentifierSchemeNameEnum
    };
}