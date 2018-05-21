import { Validators } from "@angular/forms";
import { Component, Injector, Input, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { MyStringFormGroup } from "./my-string-form.component";
import {
    communicationInfoDesc, Description, organizationAlternativeNameDesc, organizationIdentifierDesc,
    organizationNameDesc
} from "../../../domain/omtd.description";
import { OrganizationIdentifierCommonFormControl } from "./identifierCommon.component";

@Component({
    selector: 'organizationInfo-form',
    template : `
        <div [formGroup]="group">
            <form-repeat-inline [component]="simpleStringComponent" [parentGroup]="group"
                                [description]="organizationNameDesc" [name]="'organizationNames'"></form-repeat-inline>

            <div class="form-group-divider"></div>

            <!--<form-repeat-inline [component]="simpleStringComponent" [parentGroup]="group"-->
                                <!--[description]="organizationAlternativeNameDesc" [name]="'organizationAlternativeNames'"></form-repeat-inline>-->

            <!--<div class="form-group-divider"></div>-->

            <form-repeat-inline [component]="organizationIdentifierComponent" [parentGroup]="group" [initEmpty]="true"
                                [description]="organizationIdentifierDesc" [name]="'organizationIdentifiers'"></form-repeat-inline>

            <div class="form-group-divider"></div>

            <communicationInfo-form [parentGroup]="group" [name]="'communicationInfo'"
                                    [description]="communicationInfoDesc"></communicationInfo-form>
        </div>
`,
    styleUrls : ['./templates/common.css']
})
export class OrganizationInfoFormControl extends MyGroup {

    @Input("organizationMandatory")
    public organizationMandatory : boolean = true;

    ngOnInit() {
        super.ngOnInit();
        this.organizationNameDesc.mandatory = this.organizationMandatory;
    }

    simpleStringComponent : Type<any> = MyStringFormGroup;
    organizationIdentifierComponent : Type<any> = OrganizationIdentifierCommonFormControl;
    organizationNameDesc : Description = Object.assign({},organizationNameDesc);
    organizationAlternativeNameDesc : Description = organizationAlternativeNameDesc;
    organizationIdentifierDesc : Description = organizationIdentifierDesc;
    communicationInfoDesc : Description = communicationInfoDesc;

    groupDefinition : any = {
        actorType : ["",Validators.required]
    }

}