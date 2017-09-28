/**
 * Created by stefanos on 6/12/2016.
 */
import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup, FormBuilder, FormArray, Validators, FormControl, AbstractControl} from '@angular/forms';
import {Description, languageIdDesc, scriptIdDesc, variantIdDesc,regiontIdDesc,languageTagDesc} from "../../../domain/omtd.description";
import {
    EnumValues, languageIdTypeEnum, scriptIdTypeEnum, regionIdTypeEnum, variantIdTypeEnum
} from "../../../domain/omtd.enum";
import {Language} from "../../../domain/openminted-model";
import {MyGroup} from "../myform/my-group.interface";

@Component({
    selector: 'languageType-form',
    templateUrl : './templates/language-type-form.component.html',
    styleUrls : ['./templates/common.css']
})
export class LanguageTypeForm extends MyGroup {

    readonly groupDefinition = {
        languageTag : ['', Validators.required],
        languageId : ['', Validators.required],
        scriptId : '',
        regiontId : '',
        variantId: ''
    };

    languageTagDesc : Description;
    languageIdDesc : Description = languageIdDesc;
    scriptIdDesc : Description;
    regionIdDesc : Description;
    variantIdDesc : Description;

    languageIdEnum : EnumValues[] = languageIdTypeEnum;
    scriptIdEnum : EnumValues[] = scriptIdTypeEnum;
    regionIdEnum : EnumValues[] = regionIdTypeEnum;
    variantIdEnum : EnumValues[] = variantIdTypeEnum;

    compositionObject : Language = new Language();

    setLanguageId($event : any) : void {
        this.compositionObject.languageId = <string>$event.item.key.toLowerCase();
        this.getMyControl('languageId').setValue($event.item.key.toLowerCase());
    }

    get languageTag() {
        let arr : string[] = [];
        for(let type of ['languageId','scriptId','regiontId','variantId']) {
            if (this.compositionObject[type]) {
                arr.push(this.compositionObject[type])
            }
        }
        return !this.compositionObject.languageId ? '' : arr.join('-');
    }

    ngOnInit() {
        super.ngOnInit();
        for(let type of ['languageId','scriptId','regiontId','variantId']) {
            this.group.controls[type].valueChanges.subscribe(_ => {
                this.compositionObject[type] =   this.group.controls[type].value;
                this.getMyControl('languageTag').setValue(this.languageTag);
            });
        }
    }
}

