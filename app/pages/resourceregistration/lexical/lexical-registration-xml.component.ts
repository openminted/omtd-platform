/**
 * Created by stefania on 10/6/16.
 */
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ResourceService } from "../../../services/resource.service";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import {title} from "../../../domain/utils";

@Component({
    selector: 'lexical-registration-xml',
    templateUrl: './lexical-registration-xml.component.html',
    styleUrls:  ['./lexical-registration-xml.component.css'],
})

export class LexicalUploadXMLComponent {

    lexicalXML: string;
    errorMessage: string;
    xmlURL : string;
    successMessage: string;

    uploadedFile : File;
    resourceType : string;
    titleResourceType : string;

    constructor(fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
                private resourceService: ResourceService) {
        // this.componentXMLForm = fb.group({
        //     "xml": [""],
        // });
        this.resourceType = this.activatedRoute.snapshot.data['resourceType'];
        this.titleResourceType = title(this.resourceType);
        this.uploadedFile = null;
        this.xmlURL = '';
    }

    onSubmit(componentXML: any, event: Event) {

        // event.preventDefault();
        this.errorMessage = null;
        this.successMessage = null;
        console.log(componentXML);

        if(this.xmlURL != '') {
            this.previewFromURL();
        } else if (this.uploadedFile != null ) {
            this.previewFromFile();
        }

        console.log("submit",this.xmlURL,this.uploadedFile);

        this.resourceService.registerComponent(componentXML,this.resourceType).subscribe(
            resource => this.successfullySubscribed(),
            error => this.handleError(<any>error));
    }

    previewFromURL() {
        this.resourceService.getXML(this.xmlURL,this.resourceType).subscribe(
            xml => this.lexicalXML = xml
        );
    }

    previewFromFile() {
        let self = this;
        if (this.uploadedFile) {
            let myReader:FileReader = new FileReader();
            // var tempForm = this.componentXMLForm;
            console.log(this.uploadedFile);
            myReader.onloadstart = function(e) {
                //TODO validation here
            };
            myReader.onloadend = function(e){
                self.lexicalXML = myReader.result;
            };
            myReader.readAsText(this.uploadedFile);

        }
    }

    report($event : any) {
        this.uploadedFile = $event.target.files[0];
    }


    successfullySubscribed() {
        window.scrollTo(0, 0)
        this.successMessage = `Your ${this.resourceType} has been successfully registered`;
        return false;
    }

    handleError(error : ErrorObservable) {
        this.errorMessage = `System error registering your ${this.resourceType} (Server responded: ${error.error} )`;
    }
}