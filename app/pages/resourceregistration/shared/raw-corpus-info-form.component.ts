/**
 * Created by stefania on 1/19/17.
 */
import { Component } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";

@Component({
    selector: 'raw-corpus-info-form',
    template : `
    <div [formGroup]="group" >
        <div formGroupName="corpusMediaPartsType">
            <div formArrayName="corpusTextParts">


            </div>
        </div>
    </div>
`,
    styleUrls : ['./templates/common.css']
})

export class RawCorpusInfoFormControl extends MyGroup {

    readonly groupDefinition = {
        corpusMediaPartsType: this._fb.group({
        }),
        corpusSubtype : "rawCorpus"
    };
}