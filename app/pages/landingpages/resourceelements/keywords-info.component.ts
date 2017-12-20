/**
 * Created by stefania on 12/14/17.
 */
import { Component, Input } from '@angular/core';
import { TextClassificationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'keywords-info',
    templateUrl: './keywords-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class KeywordsInfoComponent {

    @Input() textClassifications: TextClassificationInfo[]
}