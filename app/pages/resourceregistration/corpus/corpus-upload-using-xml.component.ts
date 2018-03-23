/**
 * Created by stefania on 1/19/17.
 */
import { Component, Injector } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
    Corpus,
    Corpus as OMTDCorpus, DistributionMediumEnum, ResourceIdentifier,
    ResourceIdentifierSchemeNameEnum
} from "../../../domain/openminted-model";
import { CorpusBaseUsingFormComponent } from "./corpus-base-using-form.component";
import { error } from "util";
import { corpusBrowserRouting } from "../../corpusbrowser/corpus-browser.routing";
import { HttpEventType, HttpResponse } from "@angular/common/http";
import { saveAs } from "file-saver";

@Component({
    selector: 'corpus-upload',
    templateUrl: './corpus-upload-using-xml.component.html',
    styleUrls:  ['./corpus-upload.component.css','./corpus-registration-form.component.css'],
})

export class CorpusUploadUsingXmlComponent extends CorpusBaseUsingFormComponent {

    zipForm: FormGroup;
    zipFile : File;
    corpusXML : string;
    createdCorpusId : string;
    zipFormErrorMessage: string = null;
    total = 0;
    loaded = 0;
    private _fb;

    constructor(injector : Injector) {
        super(injector);
        this._fb = injector.get(FormBuilder);
    }



    updateFile($event : any) {
        this.zipFile = $event;
        //console.log($event);
    }

    validate() {
        return true;
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
        let corpus = new Blob([this.corpusXML],{type : `application/xml`})
        this.resourceService.uploadCorpusZip<Corpus>(this.zipFile,corpus).subscribe(event => {
            console.log(event);
            if (event.type === HttpEventType.UploadProgress) {
                this.total = event.total; this.loaded = event.loaded;
                console.log(event.total, event.loaded);
            } else if (event instanceof HttpResponse) {
                console.log(event.body);
                this.loading=false;
                this.successfulMessage = "Corpus uploaded successfully";
                this.createdCorpusId = event.body.metadataHeaderInfo.metadataRecordIdentifier.value;
            }
        },error => this.handleError("Error uploading Corpus XML",error));
    }

}