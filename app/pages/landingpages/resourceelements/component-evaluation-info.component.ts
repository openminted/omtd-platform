/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { ComponentEvaluationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'component-evaluation-info',
    templateUrl: './component-evaluation-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class ComponentEvaluationInfoComponent {
    @Input() componentEvaluationInfo: ComponentEvaluationInfo;
}