/**
 * Created by stefanos on 1/22/17.
 */
import { Component, Injector } from "@angular/core";
import {
    DistributionMediumEnum,
    Lexical,
    ResourceIdentifier,
    ResourceIdentifierSchemeNameEnum
} from "../../../domain/openminted-model";
import { LexicalBaseUsingFormComponent } from "./lexical-base-using-form.component";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'lexical-upload',
    templateUrl: './lexical-upload.component.html',
    styleUrls : ['./lexical-registration-form.component.css']
})

export class LexicalUploadComponent extends LexicalBaseUsingFormComponent {

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
    }

    onSubmit() {
        if(this.zipFile && this.zipFile.name.endsWith(".zip"))
            this.zipFormErrorMessage = null;
        else
            this.zipFormErrorMessage = 'You need to provide a zip file with the corpus.';

        if(!this.validate())
            return;

        this.resourceService.uploadZip(this.zipFile.name,this.zipFile).subscribe(id => {
            let corpusBody : Lexical = this.lexicalForm.formValue;
            corpusBody.lexicalConceptualResourceInfo.identificationInfo.resourceIdentifiers = [new ResourceIdentifier()];
            corpusBody.lexicalConceptualResourceInfo.identificationInfo.resourceIdentifiers[0].value=id;
            corpusBody.lexicalConceptualResourceInfo.identificationInfo.resourceIdentifiers[0].resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OTHER;
            // corpusBody.lexicalConceptualResourceInfo.distributionInfos = [new DatasetDistributionInfo()];
            corpusBody.lexicalConceptualResourceInfo.distributionInfos[0].distributionMedium = DistributionMediumEnum.DOWNLOADABLE;
            corpusBody.lexicalConceptualResourceInfo.distributionInfos[0].distributionLocation = id;
            this.resourceService.upload<Lexical>(this.lexicalForm.formValue,'lexical').subscribe(
                () => {
                    this.loading = false;
                    this.successfulMessage = 'Lexical conceptual resource uploaded successfully.';
                    window.scrollTo(0,0);
                }, error => this.handleError("Error uploading corpus",error)
            );
        });

    }
}