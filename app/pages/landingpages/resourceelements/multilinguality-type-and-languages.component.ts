/**
 * Created by stefania on 21/05/2018.
 */
import { Component, Input } from '@angular/core';
import { LanguageInfo, LingualityInfo } from "../../../domain/openminted-model";
import { EnumValues, languageIdTypeEnum, multilingualityTypeEnum } from "../../../domain/omtd.enum";

@Component({
    selector: 'multilinguality-type-and-languages',
    templateUrl: './multilinguality-type-and-languages.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class MultilingualityTypeAndLanguagesComponent {

    @Input() lingualityInfo: LingualityInfo;
    multilingualityTypeValues : EnumValues[] = multilingualityTypeEnum;
    @Input() languages: LanguageInfo[];
    languageValues : EnumValues[] = languageIdTypeEnum;

    getLanguage(language: string) {
        let tmp = this.languageValues.find(v => v.key === language.toUpperCase());
        return tmp ? tmp.value : "Undefined";
    }

    private multilingualityType(l : string) {
        let multilingualityType = this.multilingualityTypeValues.find(v => v.key === l);
        return multilingualityType && multilingualityType.value;
    }
}