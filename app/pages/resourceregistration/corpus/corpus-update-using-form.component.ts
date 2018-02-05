/**
 * Created by stefania on 9/12/17.
 */
import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Corpus as OMTDCorpus, MetadataHeaderInfo } from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { CorpusBaseUsingFormComponent } from "./corpus-base-using-form.component";

@Component({
    selector: 'corpus-update-using-form',
    templateUrl: './corpus-update-using-form.component.html',
    styleUrls:  ['./corpus-registration-form.component.css'],
})

export class CorpusUpdateUsingFormComponent extends CorpusBaseUsingFormComponent implements OnInit {

    corpus : Observable<OMTDCorpus>;
    metadata : MetadataHeaderInfo = null;

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.corpus = this.resourceService.get<OMTDCorpus>(id,'corpus');
            this.corpus.subscribe(corpus => {
                this.metadata = corpus.metadataHeaderInfo;
                this.corpusForm.loadCorpus(corpus);
                },
                error => this.handleError("Error occurred loading corpus",error));
        });
    }

    updateCorpus(corpus : any) {
        this.loading = true;
        this.resourceService.updateCorpus(
            corpus).subscribe(corpus => {
                this.loading = false;
                this.successfulMessage = "Corpus updated successfully";
                window.scrollTo(0,0);},
            error => this.handleError("Error saving corpus",error)
        );
    }

    onSubmit() {
        if(!this.validate())
            return;
        let corpusFilled : OMTDCorpus = Object.assign({},this.corpusForm.formValue);
        corpusFilled.metadataHeaderInfo = this.metadata;
        this.updateCorpus(corpusFilled);
    }


    navigateToCorpus() {
        super.navigateToCorpus(this.metadata.metadataRecordIdentifier.value);
    }
}