/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { RawCorpusInfo } from "../../../domain/openminted-model";


@Component({
    selector: 'raw-corpus-info',
    templateUrl: './raw-corpus-info.component.html',
})

export class RawCorpusInfoComponent {
    @Input() rawCorpusInfo: RawCorpusInfo;
}