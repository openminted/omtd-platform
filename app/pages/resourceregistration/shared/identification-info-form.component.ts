/**
 * Created by stefania on 1/17/17.
 */
import {Component, Input, OnInit, Type} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {MyStringAreaFormGroup, MyStringFormControl, MyStringFormGroup} from "./my-string-form.component";
import {EnumValues, resourceIdentifierSchemeNameEnum} from "../../../domain/omtd.enum";
import {IdentifierFormControl} from "./identifier-common-form.component";
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

    private resourceNameDesc: Description = resourceNameDesc;
    private descriptionDesc: Description = descriptionDesc;
    private resourceShortNameDesc: Description = resourceShortNameDesc;
    private publicDesc : Description = publicDesc;

    public customClass: string = 'customAccordionPanel';

    private myStringType : Type<any> = MyStringFormGroup;

    private myStringAreaType : Type<any> = MyStringAreaFormGroup;

    public groupDefinition = {
        public : false
    }
}