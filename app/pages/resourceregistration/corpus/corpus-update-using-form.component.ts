/**
 * Created by stefania on 9/12/17.
 */
import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms'
import { Corpus as OMTDCorpus } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'corpus-update-using-form',
    templateUrl: './corpus-update-using-form.component.html'
})

export class CorpusUpdateUsingFormComponent implements OnInit {

    corpusForm: FormGroup;
    corpus : Observable<OMTDCorpus>;
    corpusFormErrorMessage: string = null;
    corpusAll : OMTDCorpus = null;
    busy : boolean = false;
    successfulMessage: string = null;
    errorMessage: string = null;
    tocValid : boolean;


    constructor(private resourceService: ResourceService,private route: ActivatedRoute,private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.corpus = this.resourceService.getCorpus(id);
            this.corpus.subscribe(corpus => this.corpusAll = corpus, error => this.handleError("Error occured",error));
        });
    }

    updateCorpus(corpus : any) {
        console.log(corpus);
        this.busy = true;
        this.resourceService.updateCorpus(
            corpus).subscribe(corpus => {
                console.log(corpus);
                this.busy = false;
                this.successfulMessage = "Corpus updated successfully";
                window.scrollTo(0,0);},
            error => this.handleError("Error",error)
        );
    }
    
    handleCorpus(corpus : any) {
        this.corpusForm = corpus;
    }

    setAsTouched(group: FormGroup | FormArray) {
        group.markAsTouched();
        for (let i in group.controls) {
            if (group.controls[i] instanceof FormControl) {
                group.controls[i].markAsTouched();
            } else {
                this.setAsTouched(group.controls[i]);
            }
        }
    }

    onSubmit() {

        this.setAsTouched(this.corpusForm);

        this.successfulMessage = null;

        if(this.corpusForm.valid && this.tocValid)
            this.corpusFormErrorMessage = null;
        else if(!this.corpusForm.valid)
            this.corpusFormErrorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';
        else if (!this.tocValid)
            this.corpusFormErrorMessage = "Please accept the terms and conditions";

        if(this.corpusForm.valid && this.tocValid) {
            let corpusFilled : OMTDCorpus = Object.assign({},this.corpusForm.value);
            corpusFilled.metadataHeaderInfo = this.corpusAll.metadataHeaderInfo;
            this.updateCorpus(corpusFilled);
        } else {
            window.scrollTo(0,0);
        }
    }

    handleError(message : string,error : any) {
        this.corpusFormErrorMessage = message + ' (Server responded: ' + error + ')';
        window.scrollTo(0,0);
        this.busy = false;
    }

    navigateToCorpus() {
        this.router.navigate(['/landingPage/corpus/', this.corpusAll.metadataHeaderInfo.metadataRecordIdentifier.value]);
    }
}