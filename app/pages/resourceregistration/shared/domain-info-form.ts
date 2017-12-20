/**
 * Created by stefania on 1/19/17.
 */
import { Component } from "@angular/core";
import { classificationSchemeNameEnum } from "../../../domain/omtd.enum";
import { MyGroup } from "../myform/my-group.interface";
import { Description, domainDesc } from "../../../domain/omtd.description";

@Component({
    selector: 'domainInfo-form',
    template : `
        <div [formGroup]="group">
            <identifierCommon-form [parentGroup]="group" [name]="'domain'" [data]="schemeData" [description]="domainDesc"></identifierCommon-form>
        </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class DomainInfoFormControl extends MyGroup {

    readonly groupDefinition = {

    };

    // classificationSchemeName : EnumValues[] = classificationSchemeNameEnum;

    schemeData : any = {
        schemeName : "classificationSchemeName",
        schemeEnum : classificationSchemeNameEnum
    };

    domainDesc : Description = domainDesc;

    ngOnInit() {
        super.ngOnInit();
    }

}