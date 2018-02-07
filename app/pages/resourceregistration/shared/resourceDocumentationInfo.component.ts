import { Component, Type } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { ActorInfoFormControl } from "./actorInfo.component";
import {
    Description, documentationDescriptionDesc, publicationIdentifierDesc,
    resourceCreationInfoDesc
} from "../../../domain/omtd.description";
import { Validators } from "@angular/forms";
import { documentationTypeEnum, EnumValues } from "../../../domain/omtd.enum";
import { PublicationIdentifierCommonFormControl } from "./identifierCommon.component";

@Component({
    selector: 'resourceDocumentationInfo-form',
    template : `
        <div [formGroup]="group">
            
            <form-inline [description]="documentationDescriptionDesc" [valid]="group.valid">
                <div class="uk-grid-small" uk-grid>
                    <input type="text" class="uk-input uk-width-2-5\@m" formControlName="documentationDescription" placeholder="Documentation Description">
                    <select name="role" class="uk-select uk-width-2-5\@m" formControlName="documentationType">
                        <option *ngFor="let value of documentationTypeEnum" [value]="value.key" [selected]="value.key == ''">
                            {{value.value}}
                        </option>
                    </select>
                </div>
            </form-inline>
            
            <div class="form-group-divider"></div>
            
            <form-repeat-inline [component]="publicationIdentifierType" [parentGroup]="group" [initEmpty]="true"
                                [description]="publicationIdentifierDesc" [name]="'publicationIdentifiers'"></form-repeat-inline>
        </div>
`,
    styleUrls : ['./templates/common.css']
})
export class ResourceDocumentationFormControl extends MyGroup {

    //documentationDescription: string;
    // documentationType: DocumentationTypeEnum;
    // publicationIdentifiers: PublicationIdentifier[];

    publicationIdentifierType : Type<any> = PublicationIdentifierCommonFormControl;
    publicationIdentifierDesc : Description = publicationIdentifierDesc;
    documentationDescriptionDesc : Description = documentationDescriptionDesc;
    documentationTypeEnum : EnumValues[] = documentationTypeEnum;
    groupDefinition : any = {
        documentationDescription : ['',Validators.required],
        documentationType : ['',Validators.required]
    }

}