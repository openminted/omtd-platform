/**
 * Created by stefania on 10/6/16.
 */
import { Component, Injector } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { title } from "../../../domain/utils";
import { LexicalBaseUsingFormComponent } from "./lexical-base-using-form.component";
import { Lexical } from "../../../domain/openminted-model";
import { HttpEventType, HttpResponse } from "@angular/common/http";

@Component({
    selector: 'lexical-registration-xml',
    templateUrl: './lexical-registration-xml.component.html',
    styleUrls:  ['./lexical-registration-xml.component.css'],
})

export class LexicalUploadXMLComponent extends LexicalBaseUsingFormComponent {

    zipForm: FormGroup;
    zipFile : File;
    createdLexicalId : string;
    zipFormErrorMessage: string = null;
    lexicalXML: string;
    errorMessage: string;
    xmlURL : string;
    successMessage: string;
    loading : boolean = false;
    total : number = 0;
    loaded : number = 0;
    uploadedFile : File;
    resourceType : string;
    titleResourceType : string;
    private fb : FormBuilder;

    constructor(injector : Injector) {
        super(injector);
        this.resourceType = this.route.snapshot.data['resourceType'];
        this.titleResourceType = title(this.resourceType);
        this.uploadedFile = null;
        this.xmlURL = '';
    }

    updateFile($event : any) {
        this.zipFile = $event;
        //console.log($event);
    }


    uploadSansZip(componentXML : any) {
        this.resourceService.uploadXML<Lexical>(this.lexicalXML,this.resourceType).subscribe(
            data => {
                this.loading=false;
                this.successfulMessage = "Annotation Resource uploaded successfully.";
                this.createdLexicalId = data.metadataHeaderInfo.metadataRecordIdentifier.value;
            },
            error => this.handleError("Error uploading Annotation Resource.",error)
        );
    }

    uploadWithZip(componentXML: any) {
        let resource = new Blob([this.lexicalXML],{type : `application/xml`});
        this.resourceService.uploadResourceZip<Lexical>(this.zipFile,resource,this.resourceType).subscribe(event => {
            console.log(event);
            if (event.type === HttpEventType.UploadProgress) {
                this.total = event.total; this.loaded = event.loaded;
                console.log(event.total, event.loaded);
            } else if (event instanceof HttpResponse) {
                console.log(event.body);
                this.loading=false;
                this.successfulMessage = "Annotation Resource uploaded successfully.";
                this.createdLexicalId = event.body.metadataHeaderInfo.metadataRecordIdentifier.value;
            }
        },error => this.handleError("Error uploading Annotation Resource.",error));
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

        this.loading = true;
        if(this.zipFile == null) {
            this.uploadSansZip(componentXML);
        } else {
            this.uploadWithZip(componentXML);
        }
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
}