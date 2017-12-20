/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { AnnotatedCorpusInfo } from "../../../domain/openminted-model";


@Component({
    selector: 'annotated-corpus-info',
    templateUrl: './annotated-corpus-info.component.html',
})

export class AnnotatedCorpusInfoComponent {
    @Input() annotatedCorpusInfo: AnnotatedCorpusInfo;
}