/**
 * Created by stefanos on 9/12/17.
 */
import { Component, Injector, ViewChild } from "@angular/core";
import { ResourceService } from "../../../services/resource.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CorpusRegistrationFormComponent } from "./corpus-registration-form.component";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Component({
    selector: 'corpus-base-using-form',
    template : ``
})
export class CorpusBaseUsingFormComponent {

    loading : boolean = false;
    successfulMessage: string = null;
    errorMessage: string = null;

    @ViewChild('corpusForm') corpusForm : CorpusRegistrationFormComponent;

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

    navigateToCorpus(id) {
        this.router.navigate(['/landingPage/corpus/', id]);
    }

    validate() : boolean {
        this.successfulMessage = null;
        this.errorMessage = null;
        this.corpusForm.setAsTouched();
        if(this.corpusForm.formValid) {
            return true;
        } else if (!this.corpusForm.formValid) {
            this.errorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';
            window.scrollTo(0,0);
        }
        return false;
    }
}