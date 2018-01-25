/**
 * Created by stefania on 1/17/17.
 */
import { Component, Injector, Type } from "@angular/core";
import { MyStringAreaFormGroup, MyStringFormGroup } from "./my-string-form.component";
import {
    Description, descriptionDesc, publicDesc, resourceIdentifierDesc, resourceNameDesc,
    resourceShortNameDesc
} from "../../../domain/omtd.description";
import { MyGroup } from "../myform/my-group.interface";
import { ResourceIdentifierCommonFormControl } from "./identifierCommon.component";
import { ActivatedRoute } from "@angular/router";

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
    resourceIdentifierDesc : Description = Object.assign({},resourceIdentifierDesc);

    isUpdateForm : boolean = false;
    isCorpusForm : boolean = false;

    private route : ActivatedRoute;

    constructor(private injector : Injector) {
        super(injector);
        this.publicDesc.mandatory = false;
        this.resourceIdentifierDesc.mandatory = true;
        this.route = injector.get(ActivatedRoute);
        this.isUpdateForm = this.route.snapshot.data['update'];
        this.isCorpusForm = this.route.snapshot.data['resourceType'] === 'corpus';
    }

    public customClass: string = 'customAccordionPanel';

    myStringType : Type<any> = MyStringFormGroup;

    myStringAreaType : Type<any> = MyStringAreaFormGroup;

    resourceIdentifierType : Type<any> = ResourceIdentifierCommonFormControl;

    get showIdentifiers() : boolean{
        return !this.isUpdateForm && !this.isCorpusForm;
    }

    public groupDefinition = {
        "public" : false,
        resourceShortName : ''
    }
}