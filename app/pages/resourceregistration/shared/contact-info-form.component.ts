/**
 * Created by stefania on 1/18/17.
 */
import { Component, Injector } from '@angular/core';
import {
    Description, contactInfoDesc, landingPageDesc, contactEmailDesc
} from "../../../domain/omtd.description";
import {ContactPersonFormControl} from "./contactPerson.component";
import {MyGroup} from "../myform/my-group.interface";
import {MyChoiceComponents} from "../myform/my-choice.interface";
import {MyStringDescFormGroup} from "./my-string-form.component";
import {AuthenticationService} from "../../../services/authentication.service";
import {Validators} from "@angular/forms";

@Component({
    selector: 'contact-info-form',
    templateUrl : './templates/contact-info-form.component.html',
    // template : `
    //     <div [formGroup]="group">
    //         <form-choice [parentGroup]="group" [components]="myChoices"></form-choice>
    //     </div>
    //
    // `,
    styleUrls : ['./templates/common.css']
})

export class ContactInfoFormControl extends MyGroup {


    contactInfoDesc : Description = contactInfoDesc;
    landingPageDesc : Description = landingPageDesc;
    emailDesc : Description = contactEmailDesc;
    private authenticationService : AuthenticationService;

    readonly myChoices : MyChoiceComponents[] = [];

    public groupDefinition = {
        contactEmail : ["",Validators.compose([Validators.required,Validators.email])]
    };

    constructor(private injector : Injector){
        super(injector);
        this.authenticationService = this.injector.get(AuthenticationService) ;
        this.myChoices.push(new MyChoiceComponents("contactEmail",MyStringDescFormGroup,this.emailDesc));
        this.myChoices.push(new MyChoiceComponents("landingPage",MyStringDescFormGroup,this.landingPageDesc));
        this.myChoices.push(new MyChoiceComponents("contactPersons",ContactPersonFormControl,this.contactInfoDesc));
    }

    ngOnInit() {
        super.ngOnInit();
        this.getMyControl('contactEmail').setValue(this.authenticationService.email);
        // this.parentGroup.get('contactEmail').setValue(this.authenticationService.email);
    }
}