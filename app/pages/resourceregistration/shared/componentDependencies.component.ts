import {
    annotationResourceDesc, annotationSchemaDesc, annotationTypeDesc, Description, requiresSoftwareDesc,
    typesystemDesc
} from "../../../domain/omtd.description";
import { Component, Injector, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { RelatedResourceFormControl } from "./relatedResource.component";
import { MySingleStringForm, MyStringFormGroup } from "./my-string-form.component";

@Component({
    selector: 'componentDependenciesInfo-form',
    template : `        
<div [formGroup]="group">

    <div [groupForms]="typesystemDesc.label">
        <relatedResource-form [parentGroup]="group" [description]="typesystemDesc" [name]="'typesystem'"></relatedResource-form>
    </div>
    <div class="form-group-divider"></div>

    <div [groupForms]="annotationSchemaDesc.label">
        <relatedResource-form [parentGroup]="group" [description]="annotationSchemaDesc" [name]="'annonationSchema'"></relatedResource-form>
    </div>
    <div class="form-group-divider"></div>
    
    <form-repeat [component]="relatedResourceType" [parentGroup]="group"
                        [description]="annotationResourcesDesc" [name]="'annotationResources'"></form-repeat>

    <div class="form-group-divider"></div>
    
    <div [groupForms]="mlModelDesc.label">
        <relatedResource-form [parentGroup]="group" [description]="mlModelDesc" [name]="'mlModel'"></relatedResource-form>
    </div>
    
    <div class="form-group-divider"></div>

    <form-repeat-inline [component]="simpleStringComponent" [parentGroup]="group"
                        [description]="softwareLibrariesDesc" [name]="'softwareLibraries'"></form-repeat-inline>
</div>
`,
    styleUrls : ['./templates/common.css']
})

export class ComponentDependenciesInfoFormControl extends MyGroup {

    readonly groupDefinition = {
    };

    relatedResourceType : Type<any> = RelatedResourceFormControl;
    simpleStringComponent : Type<any> = MySingleStringForm;

    typesystemDesc : Description = typesystemDesc;
    annotationSchemaDesc : Description = annotationSchemaDesc;
    annotationResourcesDesc : Description = annotationResourceDesc;
    mlModelDesc : Description = new Description();
    softwareLibrariesDesc : Description = requiresSoftwareDesc;

    constructor(injector : Injector) {
        super(injector);
        this.mlModelDesc.label = "Machine Learning model";
    }


}