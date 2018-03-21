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
import { HttpEventType, HttpResponse } from "@angular/common/http";
import { ResourceService } from "../../../services/resource.service";

@Component({
    selector: 'corpus-upload',
    templateUrl: './corpus-upload.component.html',
    styleUrls:  ['./corpus-upload.component.css','./corpus-registration-form.component.css'],
})

export class CorpusUploadComponent extends CorpusBaseUsingFormComponent {

    zipForm: FormGroup;
    zipFile : File;
    loaded = 0;
    total = 0;
    createdCorpusId : string;
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

    navigateToCorpus() {
        super.navigateToCorpus(this.createdCorpusId);
    }

    onSubmit() {

        if(this.zipFile && this.zipFile.name.endsWith(".zip"))
            this.zipFormErrorMessage = null;
        else {
            this.zipFormErrorMessage = 'You need to provide a zip file with the corpus.';
            return;
        }

        if(!this.validate())
            return;
        this.loading = true;
        let tmp = ResourceService.removeNulls(this.corpusForm.formValue);
        let corpus = new Blob([JSON.stringify(tmp)],{type : 'application/json'});
        this.resourceService.uploadCorpusZip<OMTDCorpus>(this.zipFile,corpus).subscribe(event => {
            console.log(event);
            if (event.type === HttpEventType.UploadProgress) {
                this.total = event.total; this.loaded = event.loaded;
                console.log(event.total, event.loaded);
            } else if (event instanceof HttpResponse) {
                console.log(event.body);
                this.loading=false;
                window.scrollTo(0,0);
                this.successfulMessage = "Corpus uploaded successfully";
                this.createdCorpusId = event.body.metadataHeaderInfo.metadataRecordIdentifier.value;
            }
        },error => this.handleError("Error uploading Corpus",error));

    }

}