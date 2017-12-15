/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { AnnotationInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'annotations-info',
    templateUrl: './annotations-info.component.html',
})

export class AnnotationsInfoComponent {

    @Input() annotations: AnnotationInfo[];

    slides = [
        {img: "http://placehold.it/350x150/000000"},
        {img: "http://placehold.it/350x150/111111"},
        {img: "http://placehold.it/350x150/333333"},
        {img: "http://placehold.it/350x150/666666"}
    ];
    slideConfig = {"slidesToShow": 2, "slidesToScroll": 2};
}