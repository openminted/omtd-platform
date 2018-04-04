/**
 * Created by stefanos on 7/10/17.
 */
import { Component, Injector } from '@angular/core';
import { Component as OMTDComponent, LanguageDescription, Lexical } from "../../../domain/openminted-model";
import { MyResourceComponent } from "../my-resource.component";

@Component({
    selector: 'my-languages',
    templateUrl: './my-languages.component.html',
    styleUrls:  ['../user-space.component.css'],
})

export class MyLanguagesComponent extends MyResourceComponent<LanguageDescription> {


    constructor(injector : Injector) {
        super(injector);
        this.resourceType = this.route.snapshot.data['resourceType'];
    }

    ngOnInit() {
        super.ngOnInit();
        this.route.params.subscribe(
            params => {
                if (typeof params['from'] != undefined) {
                    console.log(params);
                    this.params['from'] = params['from'];
                }
                this.resourceService.getMyResources<LanguageDescription>(this.resourceType,this.params).subscribe(
                    searchResults => this.updateMyResources(searchResults),
                    error => this.handleError(`System error retrieving user ${this.resourceType}`, <any>error));
            }
        );

    }

}