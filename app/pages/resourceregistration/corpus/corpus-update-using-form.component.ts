/**
 * Created by stefania on 9/12/17.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import {
    Corpus as OMTDCorpus, IdentificationInfo, ResourceIdentifier,
    ResourceIdentifierSchemeNameEnum
} from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";

@Component({
    selector: 'corpus-update-using-form',
    templateUrl: './corpus-update-using-form.component.html'
})

export class CorpusUpdateUsingFormComponent implements OnInit {

    corpusForm: FormGroup;
    corpusValue : OMTDCorpus;
    corpusFormErrorMessage: string = null;

    production = process.env.PRODUCTION;

    errorMessage: string = null;
    successfulMessage: string = null;

    constructor(private resourceService: ResourceService) {
    }

    ngOnInit() {

    }

    handleCorpus(corpus : any) {
        this.corpusForm = corpus;
    }

    onSubmit() {

        this.successfulMessage = null;
        this.errorMessage = null;

        if(this.corpusForm.valid)
            this.corpusFormErrorMessage = null;
        else
            this.corpusFormErrorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';

        if(this.corpusForm.valid) {
            let corpus : OMTDCorpus = Object.assign({},this.corpusForm.value);
            let resourceIdentifier : ResourceIdentifier = new ResourceIdentifier();
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < 40; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            resourceIdentifier.resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OTHER;
            resourceIdentifier.value = text;
            corpus.corpusInfo.identificationInfo.resourceIdentifiers = [resourceIdentifier];
            this.resourceService.uploadCorpus(this.corpusForm.value).subscribe(
                res => {
                    this.successfulMessage = 'Corpus registered successfully';
                    window.scrollTo(0,0);
                }, error => this.handleError('Corpus registration failed', error)
            );
        } else {
            window.scrollTo(0,0);
        }
    }

    handleError(message: string, error) {
        this.errorMessage = message + ' (Server responded: ' + error + ')';
        window.scrollTo(0,0);
    }
}