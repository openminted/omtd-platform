/**
 * Created by stefania on 18/07/2018.
 */
import { Component, Input } from '@angular/core';
import { LanguageInfo } from "../../../domain/openminted-model";
import { EnumValues, languageIdTypeEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'metalanguages-info',
    templateUrl: './metalanguages-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class MetalanguagesInfoComponent {

    @Input() metalanguages: LanguageInfo[];
    languageValues : EnumValues[] = languageIdTypeEnum;

    getLanguage(language: string) {
        let tmp = this.languageValues.find(v => v.key === language.toUpperCase());
        return tmp ? tmp.value : "Undefined";
    }
}