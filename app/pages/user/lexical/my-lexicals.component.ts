/**
 * Created by stefanos on 7/10/17.
 */
import { Component, Injector } from '@angular/core';
import { Component as OMTDComponent, Lexical } from "../../../domain/openminted-model";
import { MyResourceComponent } from "../my-resource.component";

@Component({
    selector: 'my-lexicals',
    templateUrl: './my-lexicals.component.html',
    styleUrls:  ['../user-space.component.css'],
})

export class MyLexicalsComponent extends MyResourceComponent<Lexical> {


    constructor(injector : Injector) {
        super(injector);
        this.resourceType = this.route.snapshot.data['resourceType'];
    }

    ngOnInit() {
        super.ngOnInit();
        this.resourceService.getMyResources<Lexical>(this.resourceType).subscribe(
            searchResults => this.updateMyResources(searchResults),
            error => this.handleError(`System error retrieving user ${this.resourceType}`, <any>error));
    }

}