import { Component, Injector, Type } from "@angular/core";
import { Description, emailDesc, homepageDesc, telephoneNumberDesc } from "../../../domain/omtd.description";
import { MyGroup } from "../myform/my-group.interface";
import { MySingleStringForm } from "./my-string-form.component";

@Component({
    selector: 'communicationInfo-form',
    template : `
        <div [formGroup]="group">
            
            <form-repeat-inline [component]="simpleStringComponent" [parentGroup]="group" [initEmpty]="true"
                                [description]="emailsDesc" [name]="'emails'"></form-repeat-inline>

            <!--<div class="form-group-divider"></div>-->

            <!--<form-repeat-inline [component]="simpleStringComponent" [parentGroup]="group" [initEmpty]="true"-->
                                <!--[description]="homepagesDesc" [name]="'homepages'"></form-repeat-inline>-->

            <!--<div class="form-group-divider"></div>-->
            <!---->
            <!--<form-repeat-inline [component]="simpleStringComponent" [parentGroup]="group" [initEmpty]="true"-->
                                <!--[description]="telephoneNumbersDesc" [name]="'telephoneNumbers'"></form-repeat-inline>-->
            
        </div>
`,
    styleUrls : ['./templates/common.css']
})
export class CommunicationInfoFormControl extends MyGroup {

    simpleStringComponent : Type<any> = MySingleStringForm;
    emailsDesc : Description = Object.assign({},emailDesc);
    homepagesDesc : Description = homepageDesc;
    telephoneNumbersDesc : Description = telephoneNumberDesc;

    groupDefinition : any = {
    };

    constructor(injector : Injector) {
        super(injector);
        this.emailsDesc.mandatory = false;
    }


}