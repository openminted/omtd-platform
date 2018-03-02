import { Component, Input } from "@angular/core"
import { Http, ResponseContentType } from "@angular/http";
import { saveAs } from "file-saver";

@Component({
    selector: 'download',
    template: `
        <button class="uk-button uk-button-primary" (click)="download()" [ngClass]="{'uk-button-primary' : !disabled, 'uk-disabled' : disabled}">
            Download <i class="fa fa-download" aria-hidden="true"></i>
        </button>
        <!--<a (click)="download()" [ngClass]="{'uk-disabled' : disabled}" class="download">-->
            <!--Download <i class="fa fa-download" aria-hidden="true"></i>-->
        <!--</a>-->
  `,
    // styles: [
    //     'a.download {color: #524f4f; padding: 6px 0; display: block;} a:hover.download {color: #0055b9; text-decoration: none}'
    // ]
})
export class DownloadComponent {
    @Input()
    url:string;

    @Input()
    disabled : boolean = false;

    constructor(private http:Http) {
    }

    download() {
        let url_ : URL = new URL(this.url);
        let filename = url_.searchParams.get('archiveId') || 'download';
        this.http.get(this.url, {responseType : ResponseContentType.Blob}).subscribe(
            response => {
                let blob = response.blob();
                saveAs(blob,filename + '.zip');
            });
    }
}