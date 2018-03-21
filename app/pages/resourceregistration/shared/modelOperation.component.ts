import {
    algorithmDesc, annotationResourceDesc, annotationSchemaDesc, Description, TDMMethodDesc,
    trainingCorpusDetailsDesc, typesystemDesc, variantDesc
} from "../../../domain/omtd.description";
import { MyGroup } from "../myform/my-group.interface";
import { Component, Injector, Type } from "@angular/core";
import { RelatedResourceFormControl } from "./relatedResource.component";
import { EnumValues, TDMMethodTypeEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'model-operation-info-form',
    template : `
        <div [formGroup]="group">
            <form-inline [description]="variantDesc">
                <input class="uk-input" type="text" formControlName="variant"/>
            </form-inline>
            
            <div class="form-group-divider"></div>

            <div [groupForms]="typesystemDesc.label">
                <relatedResource-form [parentGroup]="group" [name]="'typesystem'" [description]="typesystemDesc"></relatedResource-form>
            </div>
            
            <div class="form-group-divider"></div>

            <div [groupForms]="annotationSchemaDesc.label">
                <relatedResource-form [parentGroup]="group" [name]="'annotationSchema'" [description]="annotationSchemaDesc"></relatedResource-form>
            </div>
            <div class="form-group-divider"></div>
            
            <form-repeat [component]="relatedResourceType" [parentGroup]="group" [initEmpty]="true"
                                [name]="'annotationResources'" [description]="annotationResourceDesc">

            </form-repeat>

            <div class="form-group-divider"></div>
            
            <form-inline [description]="algorithmDesc">
                <input class="uk-input" type="text" formControlName="algorithm"/>
            </form-inline>

            <div class="form-group-divider"></div>
            
            <form-inline [description]="trainingCorpusDetailsDesc">
                <input class="uk-input" type="text" formControlName="trainingCorpusDetails"/>
            </form-inline>

            <div class="form-group-divider"></div>

            <form-inline [description]="tdmmethodDesc">
                <select name="role" class="uk-select" formControlName="tdmmethod">
                    <option *ngFor="let value of tdmmethodEnum" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </form-inline>
            
        </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class ModelOperationFormControl extends MyGroup {

    readonly groupDefinition = {
        variant : '',
        algorithm : '',
        trainingCorpusDetails : '',
        tdmmethod : ''
    };

    relatedResourceType : Type<any> = RelatedResourceFormControl;
    typesystemDesc : Description = typesystemDesc;
    variantDesc : Description = variantDesc;
    annotationSchemaDesc : Description = annotationSchemaDesc;
    annotationResourceDesc : Description = annotationResourceDesc;
    algorithmDesc : Description = algorithmDesc;
    trainingCorpusDetailsDesc : Description = trainingCorpusDetailsDesc;
    tdmmethodDesc : Description = TDMMethodDesc;
    tdmmethodEnum : EnumValues[] = TDMMethodTypeEnum;


    constructor(injector : Injector) {
        super(injector);
    }
}