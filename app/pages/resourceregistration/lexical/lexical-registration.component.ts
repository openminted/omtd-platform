/**
 * Created by stefania on 10/6/16.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GalaxyService} from "../../../services/galaxy.service";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

@Component({
    selector: 'lexical-registration-options',
    templateUrl: './lexical-registration.component.html',
    styleUrls: ['./lexical-registration.component.css'],
})

export class LexicalRegistrationComponent {

    activeTab;

    constructor(private router: Router, private _fb: FormBuilder) {}


    registerUsingXML() {
        this.router.navigate(['/resourceRegistration/lexical/xml']);
    }

    registerUsingForm() {
        this.router.navigate(['/resourceRegistration/lexical/form']);
    }
}
