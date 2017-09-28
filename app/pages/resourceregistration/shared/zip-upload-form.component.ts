/**
 * Created by stefania on 1/20/17.
 */
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {ResourceService} from "../../../services/resource.service";
import {Resource} from "../../../domain/resource";

@Component({
    selector: 'zip-upload',
    template: `
    <form [formGroup]="myForm" class="zipUpload">
        <div data-uk-grid-margin="" class="uk-grid uk-grid-width-1-1">
            <div class="form-group">
                <input type="file" name="xmlFile" (change)="report($event)" formControlName="fileUpload">
            </div>
        </div>
    </form>
    <!--<a *ngIf="clicks < clickMe.length" (click)="onSubmit(myForm)">{{clickMe[clicks % clickMe.length]}}</a>-->
    <!--<a *ngIf="clicks == clickMe.length" href="https://cdn.meme.am/cache/instances/folder598/52560598.jpg">{{clickMe[clicks % clickMe.length]}}</a>-->
    `,
    styles: [`
        .zipUpload input {
          height: 35px;
        }
    `],
})

export class ZipUploadComponent implements OnInit{

    // private clickMe : string[] = [
    //     "click me baby one more time","yeah, click me again", "don't stop I like it", "please baby, please click me"
    // ]
    // private clicks = 0;

    @Input('group')
    myForm: FormGroup;

    @Output('file')
    fileChange : EventEmitter<File> = new EventEmitter<File>();

    errorMessage: string;
    successMessage: string;

    uploadedZip : File;

    //private resource: Resource;

    constructor(private _fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
                resourceService: ResourceService) {

        this.uploadedZip = null;
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            fileUpload: ''
        });
    }

    onSubmit(myForm: FormGroup, event: Event) {
        // this.clicks++;
        console.log("zipValue",myForm.value);

        // event.preventDefault();
        this.previewFromFile();
        // this.successMessage = null;
        // console.log(componentXML.xml);
        //
        // var resource: Resource = new Resource();
        // resource.payload = componentXML.xml;
        // resource.resourceType = 'component';
        // resource.payloadFormat = 'xml';
        //
        // this.resourceService.registerComponent(resource).subscribe(
        //     resource => this.successfullySubscribed(resource),
        //     error => this.handleError(<any>error));
    }

    previewFromFile() {
        if (this.uploadedZip) {
            var myReader: FileReader = new FileReader();
            //var tempForm = this.componentXMLForm;
            console.log(this.uploadedZip);
            const self = this;
            myReader.onloadstart = function (e) {
                if (!self.uploadedZip.name.endsWith(".zip")) {
                    throw "Not a zip file";
                }
            };
            myReader.onloadend = function (e) {
                console.log(myReader.result)
                // tempForm.setValue({'xml' : myReader.result});
            };
            myReader.readAsText(this.uploadedZip);
        }
    }
    report($event : any) {
        this.uploadedZip = $event.target.files[0];
        this.fileChange.emit(this.uploadedZip);
    }

    successfullySubscribed(resource : Resource) {
        this.successMessage = 'Your component has been successfully registered';
        return false;
    }

    handleError(error) {
        this.errorMessage = 'System error registering your component (Server responded: ' + error + ')';
    }
}