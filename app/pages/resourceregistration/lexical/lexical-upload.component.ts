/**
 * Created by stefanos on 1/22/17.
 */
import { Component, Injector, OnInit } from "@angular/core";
import {
    IdentificationInfo, Lexical, LexicalConceptualResourceInfo,
    ResourceIdentifier
} from "../../../domain/openminted-model";
import { LexicalBaseUsingFormComponent } from "./lexical-base-using-form.component";
import { FormBuilder } from "@angular/forms";
import { UUID } from "angular2-uuid";

@Component({
    selector: 'lexical-upload',
    templateUrl: './lexical-upload.component.html',
    styleUrls : ['./lexical-registration-form.component.css']
})

export class LexicalUploadComponent extends LexicalBaseUsingFormComponent {

    private _fb;

    constructor(injector : Injector) {
        super(injector);
        this._fb = injector.get(FormBuilder);
    }


    navigateToLexical() {
        super.navigateToLexical(this.lexicalMetadata.metadataRecordIdentifier.value);
    }

    onSubmit() {
        if(!this.validate())
            return;
        this.loading = true;
        this.resourceService.upload<Lexical>(this.lexicalForm.formValue, 'lexical').subscribe(
            data => {
                this.loading = false;
                this.lexicalMetadata = data.metadataHeaderInfo;
                this.successfulMessage = 'Annotation Resource uploaded successfully.';
                window.scrollTo(0, 0);
            }, error => this.handleError("Error uploading annotation Resource.", error)
        );
    }
}