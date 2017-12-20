/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { AnnotationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'annotations-info',
    templateUrl: './annotations-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class AnnotationsInfoComponent {

    @Input() annotations: AnnotationInfo[];

    slideConfig = {"slidesToShow": 3, "slidesToScroll": 3};
}