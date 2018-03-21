/**
 * Created by stefanos on 1/22/17.
 */
import { Component, Injector, OnInit } from "@angular/core";
import {
    IdentificationInfo, LanguageDescription, LanguageDescriptionInfo,
    ResourceIdentifier
} from "../../../domain/openminted-model";
import { LanguageBaseUsingFormComponent } from "./language-base-using-form.component";
import { FormBuilder } from "@angular/forms";
import { UUID } from "angular2-uuid";

@Component({
    selector: 'language-upload',
    templateUrl: './language-upload.component.html',
    styleUrls: ['./language-registration-form.component.css']
})

export class LanguageUploadComponent extends LanguageBaseUsingFormComponent implements OnInit {

    private _fb;

    constructor(injector: Injector) {
        super(injector);
        this._fb = injector.get(FormBuilder);
    }

    ngOnInit() {
        let language : LanguageDescription = new LanguageDescription();
        language.languageDescriptionInfo = new LanguageDescriptionInfo();
        language.languageDescriptionInfo.identificationInfo = new IdentificationInfo();
        let identifier : ResourceIdentifier = new ResourceIdentifier();
        identifier.value = UUID.UUID();
        (identifier.resourceIdentifierSchemeName as any) = "OMTD";
        language.languageDescriptionInfo.identificationInfo.resourceIdentifiers = [identifier];
        setTimeout(() => this.languageForm.loadLanguage(language),500);
    }

    onSubmit() {

        if (!this.validate())
            return;
        this.loading = true;
        this.resourceService.upload<LanguageDescription>(this.languageForm.formValue, 'language').subscribe(
            data => {
                this.loading = false;
                this.languageMetadata = data.metadataHeaderInfo;
                this.successfulMessage = 'Model and Grammar uploaded successfully.';
                window.scrollTo(0, 0);
            }, error => this.handleError("Error uploading Model and Grammar", error)
        );
    }
}