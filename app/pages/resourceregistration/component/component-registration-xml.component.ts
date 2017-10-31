/**
 * Created by stefania on 10/6/16.
 */
import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {ResourceService} from "../../../services/resource.service";

@Component({
    selector: 'component-registration-xml',
    templateUrl: './component-registration-xml.component.html',
    styleUrls:  ['./component-registration-xml.component.css'],
})

export class ComponentRegistrationXMLComponent {

    componentXML: string;
    errorMessage: string;
    xmlURL : string;
    successMessage: string;

    uploadedFile : File;

    //private resource: Resource;

    constructor(fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
                private resourceService: ResourceService) {
        // this.componentXMLForm = fb.group({
        //     "xml": [""],
        // });
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

        // this.resourceService.registerComponent(componentXML).subscribe(
        //     resource => this.successfullySubscribed(),
        //     error => this.handleError(<any>error));
    }

    previewFromURL() {
        this.resourceService.getXML(this.xmlURL).subscribe(
            xml => this.componentXML = xml
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
                self.componentXML = myReader.result;
            };
            myReader.readAsText(this.uploadedFile);

        }
    }

    report($event : any) {
        this.uploadedFile = $event.target.files[0];
    }


    successfullySubscribed() {
        window.scrollTo(0, 0)
        this.successMessage = 'Your component has been successfully registered';
        return false;
    }

    handleError(error) {
        this.errorMessage = 'System error registering your component (Server responded: ' + error + ')';
    }
}