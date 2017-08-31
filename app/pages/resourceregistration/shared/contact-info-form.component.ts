/**
 * Created by stefania on 1/18/17.
 */
import {AfterContentInit, Component, Input, OnInit, Type} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import {EnumValues, resourceIdentifierSchemeNameEnum, personIdentifierSchemeNameEnum} from "../../../domain/omtd.enum";
import {
    Description, resourceNameDesc, descriptionDesc, resourceShortNameDesc,
    contactInfoDesc, landingPageDesc, contactEmailDesc
} from "../../../domain/omtd.description";
import {ContactPersonFormControl} from "./contactPerson.component";
import {MyGroup} from "../myform/my-group.interface";

@Component({
    selector: 'contact-info-form',
    templateUrl : './templates/contact-info-form.component.html',
    styleUrls : ['./templates/common.css']
})

export class ContactInfoFormControl extends MyGroup implements AfterContentInit {


    private radioButton : string[] = ["Contact Email","Landing Page",'Contact Person'];
    private radioButtonSelected : string = this.radioButton[0];
    private personEnum : EnumValues[] = personIdentifierSchemeNameEnum;

    private contactInfoDesc : Description = contactInfoDesc;
    private landingPageDesc : Description = landingPageDesc;
    private emailDesc : Description = contactEmailDesc;

    public customClass: string = 'customAccordionPanel';

    public groupDefinition = {
        contactEmail : ['',Validators.required],
        // landingPage : ['',Validators.required]
    };

    type : Type<any> = ContactPersonFormControl;

    ngAfterContentInit(): void {
        // this.getMyControl('landingPage').disable();
    }

    public deactivate() {
        if (this.radioButtonSelected == "Contact Email") {
            this.getMyControl('contactEmail').enable();
            this.getMyControl('landingPage').disable();
            this.getMyControl('contactPersons').disable();
        }
        else if (this.radioButtonSelected == "Landing Page") {
            this.getMyControl('contactEmail').disable();
            this.getMyControl('landingPage').enable();
            this.getMyControl('contactPersons').disable();
        } else if (this.radioButtonSelected == "Contact Person") {
            this.getMyControl('contactEmail').disable();
            this.getMyControl('landingPage').disable();
            this.getMyControl('contactPersons').enable();
        }
    }

    public changeType(choice: string) :void {

        if (this.radioButtonSelected !== choice) {
            this.radioButtonSelected = choice;
        }
        this.deactivate();
    }
}