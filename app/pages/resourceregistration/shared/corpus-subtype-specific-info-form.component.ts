import {Component, OnInit, Input, Type} from "@angular/core";
import {MyGroup} from "../myform/my-group.interface";
import {CorpusTextPartInfoFormControl} from "./corpusTextPartInfo.component";
import {Description, corpusTextPartInfoDesc, languageDesc} from "../../../domain/omtd.description";
import {SimpleLanguageTypeForm2} from "./language-type-form.component";
/**
 * Created by stefanos on 19/1/2017.
 */

@Component({
    selector: 'corpusSubtypeSpecificInfo-form',
    template: `    
    <div [formGroup]="group">

        <div class="form-group">
            <lingualityInfo-form [parentGroup]="group.get('rawCorpusInfo')" [name]="'lingualityInfo'"
                                 [languageCount]="group.get('rawCorpusInfo.languages')?.controls.length"></lingualityInfo-form>
        </div>

        <div class="form-group-divider"></div>

        <form-repeat-inline [component]="languageInfoType" [parentGroup]="group.get('rawCorpusInfo')"
                            [name]="'languages'" [required]="true" [description]="languageDesc">

        </form-repeat-inline>
        
        <!--<form-repeat [component]="textPartType" [parentGroup]="getMyControl('rawCorpusInfo.corpusMediaPartsType')" -->
                            <!--[name]="'corpusTextParts'" [required]="true" [description]="corpusTextPartInfoDesc">-->
        <!--</form-repeat>-->
        
    </div>
`,
    styleUrls: ['./templates/common.css']
})
export class CorpusSubtypeSpecificInfoForm extends MyGroup {

    name = 'corpusSubtypeSpecificInfo';

    groupDefinition = {
        rawCorpusInfo :  this._fb.group({
            // corpusMediaPartsType :  this._fb.group({
            //
            // }),
            corpusSubtype : "rawCorpus",
            mediaType : 'text'
        })
    };

    readonly corpusTextPartInfoDesc : Description = corpusTextPartInfoDesc;
    textPartType : Type<any> = CorpusTextPartInfoFormControl;

    languageInfoType : Type<any> = SimpleLanguageTypeForm2;

    languageDesc : Description = Object.assign({},languageDesc);

    ngOnInit() {
        super.ngOnInit();
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",this.group);
        this.languageDesc.desc = null;
    }

}