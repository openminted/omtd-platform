/**
 * Created by stefania on 21/05/2018.
 */
import { Component, Input } from '@angular/core';
import { CharacterEncodingInfo, TextFormatInfo } from "../../../domain/openminted-model";
import {
    characterEncodingEnum, dataFormatTypeEnum, EnumValues
} from "../../../domain/omtd.enum";

@Component({
    selector: 'text-formats-and-character-encodings',
    templateUrl: './text-formats-and-character-encodings.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class TextFormatsAndCharacterEncodingsComponent {

    @Input() textFormats: TextFormatInfo[];
    dataFormatTypeValues : EnumValues[] = dataFormatTypeEnum;
    @Input() characterEncodings: CharacterEncodingInfo[];
    characterEncodingValues: EnumValues[] = characterEncodingEnum;

    private dataFormatType(l : string) {
        let dataFormatType = this.dataFormatTypeValues.find(v => v.key === l);
        return dataFormatType && dataFormatType.value;
    }

    private characterEncoding(l : string) {
        let characterEncoding = this.characterEncodingValues.find(v => v.key === l);
        return characterEncoding && characterEncoding.value;
    }
}