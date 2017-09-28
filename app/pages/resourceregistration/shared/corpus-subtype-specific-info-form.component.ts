import {Component, OnInit, Input, Type} from "@angular/core";
import {FormGroup, FormBuilder} from "@angular/forms";
import {RawCorpusInfoFormControl} from "./raw-corpus-info-form.component";
import {MyGroup} from "../myform/my-group.interface";
import {CorpusTextPartInfoFormControl} from "./corpusTextPartInfo.component";
import {Description, corpusTextPartInfoDesc} from "../../../domain/omtd.description";
/**
 * Created by stefanos on 19/1/2017.
 */

@Component({
    selector: 'corpusSubtypeSpecificInfo-form',
    template: `    
    <div [formGroup]="group">

        <form-repeat [component]="textPartType" [parentGroup]="getMyControl('rawCorpusInfo.corpusMediaPartsType')" 
                            [name]="'corpusTextParts'" [required]="true" [description]="corpusTextPartInfoDesc">
        </form-repeat>
        
    </div>
`,
    styleUrls: ['./templates/common.css']
})
export class CorpusSubtypeSpecificInfoForm extends MyGroup {

    name = 'corpusSubtypeSpecificInfo';

    groupDefinition = {
        rawCorpusInfo :  this._fb.group({
            corpusMediaPartsType :  this._fb.group({

            }),
            corpusSubtype : "rawCorpus"
        })
    };

    readonly corpusTextPartInfoDesc : Description = corpusTextPartInfoDesc;
    textPartType : Type<any> = CorpusTextPartInfoFormControl;

}