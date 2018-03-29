import { Component, Input, OnInit } from "@angular/core";
import { BaseMetadataRecord } from "../../domain/openminted-model";
import { ShortResultInfo } from "../../domain/short-resource-info";

@Component({
    selector: '[display-resource]',
    template: `
        <div class="el-title" *ngIf="resource">
            <span><strong>{{result.title}}</strong></span><br>
            <span style="text-align: justify;">{{result.description}}</span><br>
            <a [routerLink]="['/landingPage',result.resourceType,result.id]">
                View details
            </a>
        </div>
        <div class="el-title" *ngIf="!resource">
            not available
        </div>
    `
})

export class DisplayResourceDirective implements OnInit {

    @Input('display-resource')
    resource : BaseMetadataRecord;

    result : ShortResultInfo;
    ngOnInit(): void {
        if(this.resource)
            this.result = new ShortResultInfo(this.resource);
    }
}