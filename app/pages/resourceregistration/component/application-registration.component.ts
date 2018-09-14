/**
 * Created by stefania on 12/16/17.
 */
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GalaxyService } from "../../../services/galaxy.service";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

@Component({
    selector: 'application-registration-options',
    templateUrl: './application-registration.component.html',
    styleUrls:  ['./application-registration.component.css'],
})

export class ApplicationRegistrationComponent {

    mavenForm : FormGroup;
    workflowError : string = null;
    activeTab;

    constructor(private router: Router, private _fb : FormBuilder, private galaxyService : GalaxyService) {
        this.mavenForm = _fb.group({
            artifactId : ["",Validators.required],
            groupId : ["",Validators.required],
            version : ["",Validators.required],
        });
    }


    registerUsingXML() {
        this.router.navigate(['/resourceRegistration/application/xml']);
    }

    registerUsingForm() {
        this.router.navigate(['/resourceRegistration/application/form']);
    }

    buildWorkflow() {
        this.galaxyService.createWorkflow().subscribe(
            workflow => this.router.navigate(['/buildWorkflow', workflow.omtdId]),
            error => this.workflowEditorError(error)
        );

    }

    workflowEditorError(error: ErrorObservable) {
        console.log(error);
        this.workflowError = "Sorry, our editor is down at the moment, please try again later.";
    }
}