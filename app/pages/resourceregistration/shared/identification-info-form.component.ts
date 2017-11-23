/**
 * Created by stefania on 1/17/17.
 */
import {Component, Injector, Type} from '@angular/core';
import {MyStringAreaFormGroup, MyStringFormGroup} from "./my-string-form.component";
import {
    Description, resourceNameDesc, descriptionDesc, resourceShortNameDesc,
    publicDesc
} from "../../../domain/omtd.description";
import {MyGroup} from "../myform/my-group.interface";

@Component({
    selector: 'identification-info-form',
    templateUrl : './templates/identification-info-form.component.html',
    styleUrls : ['./templates/common.css']
})

export class IdentificationInfoFormControl extends MyGroup {

    resourceNameDesc: Description = resourceNameDesc;
    descriptionDesc: Description = descriptionDesc;
    resourceShortNameDesc: Description = resourceShortNameDesc;
    publicDesc : Description = publicDesc;

    constructor(private injector : Injector) {
        super(injector);
        this.publicDesc.mandatory = false;
    }

    public customClass: string = 'customAccordionPanel';

    myStringType : Type<any> = MyStringFormGroup;

    myStringAreaType : Type<any> = MyStringAreaFormGroup;

    public groupDefinition = {
        "public" : false,
        resourceShortName : ''
    }
}