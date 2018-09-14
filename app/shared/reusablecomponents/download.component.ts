import {Component, EventEmitter, Input, Output} from "@angular/core"
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from "@angular/common/http";
import { saveAs } from "file-saver";

@Component({
    selector: 'download',
    template: `
        <a class="" (click)="download()"
                [ngClass]="{'uk-link-primary' : !disabled, 'uk-disabled' : disabled}">
            Download resource <i aria-hidden="true" class="fa fa-download"></i>
            <!--<progress class="uk-progress uk-progress-mini" value="{{loaded}}" max="{{total}}"></progress>-->
        </a>
    `
})
export class DownloadComponent {
    @Input()
    url: string;

    @Input()
    disabled: boolean = false;

    @Output()
    loading : EventEmitter<boolean> = new EventEmitter<boolean>();

    total : number = 0;
    loaded : number = 0;
    loading_ : boolean = false;

    constructor(private http: HttpClient) {
    }

    download() {
        const req = new HttpRequest('GET', this.url, {
            reportProgress: true,
            responseType: "blob",
            withCredentials: true
        });
        let url_: URL = new URL(this.url);
        let path = url_.pathname.split(/\//);
        let filename = url_.searchParams.get('archiveId') || path[path.length - 1] || 'download';
        this.loading_ = true;
        this.loading.next(true);
        this.http.request(req).subscribe(event => {
            if (event.type === HttpEventType.DownloadProgress) {
                this.total = event.total; this.loaded = event.loaded;
                console.log(event.total, event.loaded);
            } else if (event instanceof HttpResponse) {
                this.loading_ = false;
                this.total = 0; this.loaded = 0;
                this.loading.next(false);
                let blob = (event as HttpResponse<any>).body;
                saveAs(blob, filename + '.zip');
            }
        });
    }
}