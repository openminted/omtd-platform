/**
 * Created by stefania on 1/19/17.
 */
import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {
    Corpus as OMTDCorpus, DatasetDistributionInfo, DistributionLoc, DistributionMediumEnum,
    RightsInfo, ResourceIdentifier, ResourceIdentifierSchemeNameEnum, RightsStatementEnum,
} from "../../../domain/openminted-model";
import {ResourceService} from "../../../services/resource.service";

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

    onSubmit() {

        this.successfulMessage = null;
        this.errorMessage = null;

        console.log("Submitted");
        console.log(this.zipFile,this.corpusForm);

        if(this.zipFile && this.zipFile.name.endsWith(".zip"))
            this.zipFormErrorMessage = null;
        else
            this.zipFormErrorMessage = 'You need to provide a zip file with the corpus.';

        if(this.corpusForm.valid)
            this.corpusFormErrorMessage = null;
        else
            this.corpusFormErrorMessage = 'There are invalid or missing fields in the metadata you have submitted. You ' +
                'can see the ones invalid or missing marked as red.';

        if(this.zipFile && this.zipFile.name.endsWith(".zip") && this.corpusForm.valid) {

            this.uploadingCorpus = true;

            this.resourceService.uploadZip(this.zipFile.name,this.zipFile).subscribe(id => {
                let corpusBody : OMTDCorpus = this.corpusForm.value;
                let distributionInfo : DatasetDistributionInfo = new DatasetDistributionInfo();
                distributionInfo.distributionLoc = [new DistributionLoc()];
                distributionInfo.rightsInfo = corpusBody.corpusInfo.distributionInfos[0].rightsInfo;
                distributionInfo.rightsInfo = new RightsInfo();
                distributionInfo.rightsInfo.rightsStatement = [RightsStatementEnum.OPEN_ACCESS]
                distributionInfo.distributionLoc[0].distributionMedium = DistributionMediumEnum.DOWNLOADABLE;
                distributionInfo.distributionLoc[0].distributionLocation = id;
                corpusBody.corpusInfo.identificationInfo.resourceIdentifiers = [new ResourceIdentifier()];
                corpusBody.corpusInfo.identificationInfo.resourceIdentifiers[0].value=id;
                corpusBody.corpusInfo.identificationInfo.resourceIdentifiers[0].resourceIdentifierSchemeName = ResourceIdentifierSchemeNameEnum.OTHER;

                corpusBody.corpusInfo.distributionInfos  = [distributionInfo];
id
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