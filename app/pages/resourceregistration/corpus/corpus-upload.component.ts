/**
 * Created by stefania on 1/19/17.
 */
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray, FormControl} from '@angular/forms'
import {
    Corpus as OMTDCorpus, DatasetDistributionInfo, DistributionLoc, DistributionMediumEnum,
    RightsInfo, ResourceIdentifier, ResourceIdentifierSchemeNameEnum, RightsStatementEnum,
} from "../../../domain/openminted-model";
import {ResourceService} from "../../../services/resource.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'corpus-upload',
    templateUrl: './corpus-upload.component.html',
    styleUrls:  ['./corpus-upload.component.css'],
})

export class CorpusUploadComponent implements OnInit {

    corpusForm: FormGroup;
    zipForm: FormGroup;
    zipFile : File;
    corpusValue : OMTDCorpus;
    tocValid : boolean;
    zipFormErrorMessage: string = null;
    corpusFormErrorMessage: string = null;

    errorMessage: string = null;
    successfulMessage: string = null;

    uploadingCorpus:boolean = false;

    constructor(private _fb: FormBuilder, private resourceService: ResourceService) {
    }

    ngOnInit() {
        setTimeout( () => {
            console.log("disable",this.corpusForm);
            this.corpusForm.get("corpusInfo.distributionInfos.0.distributionLoc.0").disable();
        },500)

    }

    updateFile($event : any) {
        this.zipFile = $event;
        //console.log($event);
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
        this.errorMessage = null;

        console.log("Submitted");
        console.log(this.zipFile,this.corpusForm);

        if(this.zipFile && this.zipFile.name.endsWith(".zip"))
            this.zipFormErrorMessage = null;
        else
            this.zipFormErrorMessage = 'You need to provide a zip file with the corpus.';

        if(this.corpusForm.valid && this.tocValid)
            this.corpusFormErrorMessage = null;
        else if (!this.corpusForm.valid)
            this.corpusFormErrorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';
        else if (!this.tocValid)
            this.corpusFormErrorMessage = "Please accept the terms and conditions.";

        if(this.zipFile && this.zipFile.name.endsWith(".zip") && this.corpusForm.valid && this.tocValid) {

            this.uploadingCorpus = true;

            this.resourceService.uploadZip(this.zipFile.name,this.zipFile).subscribe(id => {
                let corpusBody : OMTDCorpus = this.corpusForm.value;
                let distributionInfo : DatasetDistributionInfo = new DatasetDistributionInfo();
                distributionInfo.distributionLocation = id;
                distributionInfo.distributionMedium = DistributionMediumEnum.DOWNLOADABLE;
                corpusBody.corpusInfo.identificationInfo.resourceIdentifiers = [new ResourceIdentifier()];
                corpusBody.corpusInfo.identificationInfo.resourceIdentifiers[0].value=id;
                corpusBody.corpusInfo.identificationInfo.resourceIdentifiers[0].resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OTHER;

                corpusBody.corpusInfo.distributionInfos  = [distributionInfo];

                this.resourceService.uploadCorpus(this.corpusForm.value).subscribe(
                    res => {
                        this.uploadingCorpus = false;
                        this.successfulMessage = 'Corpus uploaded successfully';
                        window.scrollTo(0,0);
                    }, error => this.handleError(error)
                );
            });

        } else {
            this.uploadingCorpus = false;
            window.scrollTo(0,0);
        }
    }

    handleError(error) {
        this.uploadingCorpus = false;
        this.errorMessage = 'Corpus uploading failed (Server responded: ' + error + ')';
        window.scrollTo(0,0);
    }

}