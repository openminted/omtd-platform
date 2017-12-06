/**
 * Created by stefania on 12/4/17.
 */
import { Component, Input } from '@angular/core';
import { PersonInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'person-info',
    templateUrl: './person-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class PersonInfoComponent {
    @Input() personInfo: PersonInfo;
}