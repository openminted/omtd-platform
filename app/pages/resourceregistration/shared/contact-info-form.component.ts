/**
 * Created by stefania on 1/18/17.
 */
import { Component, Injector } from '@angular/core';
import {
    Description, contactInfoDesc, contactPointDesc
} from "../../../domain/omtd.description";
import {MyGroup} from "../myform/my-group.interface";
import {MyChoiceComponents} from "../myform/my-choice.interface";
import {AuthenticationService} from "../../../services/authentication.service";
import {Validators} from "@angular/forms";
import {ContactTypeEnum} from "../../../domain/openminted-model";

@Component({
    selector: 'contact-info-form',
    // templateUrl : './templates/contact-info-form.component.html',
    template : `
        <div [formGroup]="group">
            <div>
                <form-inline [description]="contactPointDesc" [valid]="group.valid">
                    <input type="text" class="uk-input" formControlName="contactPoint" placeholder="Email or URL">
                </form-inline>
            </div>
        </div>

    `,
    styleUrls : ['./templates/common.css']
})

export class ContactInfoFormControl extends MyGroup {

    contactPointDesc : Description = contactPointDesc;
    contactInfoDesc : Description = contactInfoDesc;

    private authenticationService : AuthenticationService;

    readonly myChoices : MyChoiceComponents[] = [];

    public groupDefinition = {
        contactPoint : ["",Validators.required],
        contactType : ContactTypeEnum.CONTACT_EMAIL
    };

    constructor(private injector : Injector){
        super(injector);
        this.authenticationService = this.injector.get(AuthenticationService) ;
    }

    validateEmail(email : string) : boolean {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    ngOnInit() {
        super.ngOnInit();
        this.getMyControl('contactPoint').setValue(this.authenticationService.email);
        this.getMyControl('contactPoint').valueChanges.subscribe(_ => {
           if(this.validateEmail(_)) {
               this.getMyControl('contactType').setValue(ContactTypeEnum.CONTACT_EMAIL);
           } else {
               this.getMyControl('contactType').setValue(ContactTypeEnum.LANDING_PAGE);
           }
        });
        // this.parentGroup.get('contactEmail').setValue(this.authenticationService.email);
    }
}