/**
 * Created by stefanos on 9/12/17.
 */
import { Component, Injector, ViewChild } from "@angular/core";
import { ResourceService } from "../../../services/resource.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { LexicalRegistrationFormComponent } from "./lexical-registration-form.component";

@Component({
    selector: 'lexical-base-using-form',
    template : ``
})
export class LexicalBaseUsingFormComponent {

    loading : boolean = false;
    successfulMessage: string = null;
    errorMessage: string = null;

    @ViewChild('lexicalForm') lexicalForm : LexicalRegistrationFormComponent;

    resourceService: ResourceService;
    route: ActivatedRoute;
    router: Router;

    constructor(injector : Injector) {
        this.resourceService = injector.get(ResourceService);
        this.route = injector.get(ActivatedRoute);
        this.router = injector.get(Router);
    }

    handleError(message: string, error : ErrorObservable) {
        this.errorMessage = message + ' (Server responded: ' + error.error + ')';
        window.scrollTo(0,0);
        this.loading = false;
    }

    navigateToLexical(id) {
        this.router.navigate(['/landingPage/lexical/', id]);
    }

    validate() : boolean {
        this.successfulMessage = null;
        this.errorMessage = null;
        this.lexicalForm.setAsTouched();
        if(this.lexicalForm.formValid && this.lexicalForm.tocValid) {
            return true;
        } else if (!this.lexicalForm.formValid) {
            this.errorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';
            window.scrollTo(0,0);
        } else if (!this.lexicalForm.tocValid) {
            this.errorMessage = "Please accept the terms and conditions";
            window.scrollTo(0,0);
        }
        return false;
    }
}