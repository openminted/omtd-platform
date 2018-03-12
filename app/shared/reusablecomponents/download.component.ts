import { Component, Input } from "@angular/core"
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from "@angular/common/http";
import { saveAs } from "file-saver";

@Component({
    selector: 'download',
    template: `
        <button class="uk-button uk-button-primary" (click)="download()"
                [ngClass]="{'uk-button-primary' : !disabled, 'uk-disabled' : disabled}">
            Download <i class="fa" [ngClass]="{'fa-spin fa-spinner' : loading, 'fa-download' : !loading}" aria-hidden="true"></i>
            <!--<progress class="uk-progress uk-progress-mini" value="{{loaded}}" max="{{total}}"></progress>-->
        </button>
    `
})
export class DownloadComponent {
    @Input()
    url: string;

    @Input()
    disabled: boolean = false;

    total : number = 0;
    loaded : number = 0;
    loading : boolean = false;

    constructor(private http: HttpClient) {
    }

    download() {
        const req = new HttpRequest('GET', this.url, {
            reportProgress: true,
            responseType: "blob",
            withCredentials: true
        });
        let url_: URL = new URL(this.url);
        let filename = url_.searchParams.get('archiveId') || 'download';
        this.loading = true;
        this.http.request(req).subscribe(event => {
            console.log(event);
            if (event.type === HttpEventType.DownloadProgress) {
                this.total = event.total; this.loaded = event.loaded;
                console.log(event.total, event.loaded);
            } else if (event instanceof HttpResponse) {
                this.loading = false;
                this.total = 0; this.loaded = 0;
                let blob = (event as HttpResponse<any>).body;
                saveAs(blob, filename + '.zip');
            }
        });
        // this.http.get(this.url, {responseType : ResponseContentType.Blob}).subscribe(
        //     response => {
        //         let blob = response.blob();
        //         saveAs(blob,filename + '.zip');
        //     });
    }
}