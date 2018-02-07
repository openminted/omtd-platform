/**
 * Created by stefanos on 6/12/2016.
 */
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { EnumValues, languageIdTypeEnum } from "../../../domain/omtd.enum";
import { MyGroup } from "../myform/my-group.interface";

@Component({
    selector: 'simplelanguageType-form',
    template : `
        <!--<ng-template #customItemTemplate let-model="item">-->
            <!--<h5>{{model.value}} - {{ model.key }}</h5>-->
        <!--</ng-template>-->
        <input type="text" class="uk-input" placeholder="Language"
               [ngClass]="{'ng-invalid' : !getMyControl('entry').valid , 'ng-touched' : getMyControl('entry').touched}"
               [(ngModel)]="selected"
               [typeahead]="languageIdEnum"
               (typeaheadOnSelect)="setLanguageId($event)"
               [typeaheadOptionField]="'value'" />
        <div [formGroup]="group">
            <input type="hidden" formControlName="entry" />
        </div>
    `,
    styleUrls : ['./templates/common.css']
})
export class SimpleLanguageTypeForm extends MyGroup {

    readonly languageIdEnum : EnumValues[] = languageIdTypeEnum;

    selected : string = "";

    groupDefinition = {
        entry : ['', Validators.required],
    };

    setLanguageId($event : any) : void {
        this.getMyControl('entry').setValue($event.item.key.toLowerCase());
    }

    ngOnInit() {
        super.ngOnInit();
        this.getMyControl('entry').valueChanges.subscribe(_ => {
            let language = this.languageIdEnum.find(a => a.key == _.toUpperCase());
            this.selected = language ? language.value : '';
        });
    }

}

@Component({
    selector: 'simplelanguageType2-form',
    template : `
        <!--<ng-template #customItemTemplate let-model="item">-->
        <!--<h5>{{model.value}} - {{ model.key }}</h5>-->
        <!--</ng-template>-->
        <input type="text" class="uk-input" placeholder="Language"
               [ngClass]="{'ng-invalid' : !getMyControl('language').valid , 'ng-touched' : getMyControl('language').touched}"
               [(ngModel)]="selected"
               [typeahead]="languageIdEnum"
               (typeaheadOnSelect)="setLanguageId($event)"
               (typeaheadNoResults)="noResults($event)"
               [typeaheadOptionField]="'value'" />
        <div [formGroup]="group">
            <input type="hidden" formControlName="language" />
        </div>
    `,
    styleUrls : ['./templates/common.css']
})
export class SimpleLanguageTypeForm2 extends MyGroup {

    readonly languageIdEnum : EnumValues[] = languageIdTypeEnum;

    selected : string = "";
    required = true;

    groupDefinition = {
        language : ['', Validators.required],
    };

    noResults($event : any) {
        if(!$event && this.getMyControl('language').value!=='') this.getMyControl('language').setValue('');
    }

    setLanguageId($event : any) : void {
        this.getMyControl('language').setValue($event.item.key.toLowerCase());
    }

    ngOnInit() {
        super.ngOnInit();
        this.getMyControl('language').valueChanges.subscribe(_ => {
            let language = this.languageIdEnum.find(a => a.key == _.toUpperCase());
            console.log(language);
            if(language.key == '') {
                this.selected = '';
            }
            else {
                this.selected = language ? language.value : '';
            }
        });
    }

}

