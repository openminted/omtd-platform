/**
 * Created by stefania on 1/19/17.
 */
import { Component, Injector } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
    Corpus as OMTDCorpus, DistributionMediumEnum, ResourceIdentifier,
    ResourceIdentifierSchemeNameEnum
} from "../../../domain/openminted-model";
import { CorpusBaseUsingFormComponent } from "./corpus-base-using-form.component";

@Component({
    selector: 'corpus-upload',
    templateUrl: './corpus-upload.component.html',
    styleUrls:  ['./corpus-upload.component.css','./corpus-registration-form.component.css'],
})

export class CorpusUploadComponent extends CorpusBaseUsingFormComponent {

    zipForm: FormGroup;
    zipFile : File;

    zipFormErrorMessage: string = null;

    private _fb;

    constructor(injector : Injector) {
        super(injector);
        this._fb = injector.get(FormBuilder);
    }

    updateFile($event : any) {
        this.zipFile = $event;
        //console.log($event);
    }


    onSubmit() {

        if(this.zipFile && this.zipFile.name.endsWith(".zip"))
            this.zipFormErrorMessage = null;
        else
            this.zipFormErrorMessage = 'You need to provide a zip file with the corpus.';

        if(!this.validate())
            return;

        this.resourceService.uploadZip(this.zipFile.name,this.zipFile).subscribe(id => {
            let corpusBody : OMTDCorpus = this.corpusForm.formValue;
            corpusBody.corpusInfo.identificationInfo.resourceIdentifiers = [new ResourceIdentifier()];
            corpusBody.corpusInfo.identificationInfo.resourceIdentifiers[0].value=id;
            corpusBody.corpusInfo.identificationInfo.resourceIdentifiers[0].resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OTHER;
            corpusBody.corpusInfo.datasetDistributionInfo.distributionMedium = DistributionMediumEnum.DOWNLOADABLE;
            corpusBody.corpusInfo.datasetDistributionInfo.distributionLocation = id;
            this.resourceService.uploadCorpus(this.corpusForm.formValue).subscribe(
                res => {
                    this.loading = false;
                    this.successfulMessage = 'Corpus uploaded successfully';
                    window.scrollTo(0,0);
                }, error => this.handleError("Error uploading corpus",error)
            );
        });


    }

}