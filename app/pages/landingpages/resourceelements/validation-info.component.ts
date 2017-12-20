/**
 * Created by stefania on 11/16/16.
 */
import { Component, Input } from '@angular/core';
import { ValidationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'validation-info',
    templateUrl: './validation-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class ValidationInfoComponent {
    @Input() validationInfo: ValidationInfo;
}