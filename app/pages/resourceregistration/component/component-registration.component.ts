/**
 * Created by stefania on 10/6/16.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GalaxyService} from "../../../services/galaxy.service";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

@Component({
    selector: 'component-registration-options',
    templateUrl: './component-registration.component.html',
    styleUrls: ['./component-registration.component.css'],
})

export class ComponentRegistrationComponent {

    mavenForm: FormGroup;
    mavenError: string = '';
    activeTab;

    constructor(private router: Router, private _fb: FormBuilder, private galaxyService: GalaxyService) {
        this.mavenForm = _fb.group({
            artifactId: ["", Validators.required],
            groupId: ["", Validators.required],
            version: ["", Validators.required],
        });
    }


    registerUsingXML() {
        this.router.navigate(['/resourceRegistration/component/xml']);
    }

    registerUsingForm() {
        this.router.navigate(['/resourceRegistration/component/form']);
    }

    resolveMavenCoordinates() {
        if (this.mavenForm.valid) {
            this.router.navigate(['/resourceRegistration/component/mavenCoordinates', this.mavenForm.value]);
        } else {
            this.mavenError = "Please fill in all fields";
        }
    }
}
