/**
 * Created by stefania on 8/31/17.
 */
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from "../../../services/resource.service";
import { SearchResults } from "../../../domain/search-results";
import { ConfirmationDialogComponent } from "../../../shared/confirmation-dialog.component";
import { EnrichedOperation } from "../../../domain/operation";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { URLParameter } from "../../../domain/url-parameter";

@Component({
    selector: 'my-operations',
    templateUrl: './my-operations.component.html',
    styleUrls:  ['../user-space.component.css'],
})

export class MyOperationsComponent {


    public searchResults: SearchResults<EnrichedOperation>;
    public errorMessage: string;
    public successMessage: string;
    private params : any = { order : 'desc', orderField : 'modification_date', from : 0};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.errorMessage = null;
        this.successMessage = null;
        console.log(this.route.params);
        this.route.params.subscribe(
            params => {
                if (typeof params['from'] != undefined) {
                    console.log(params);
                    this.params['from'] = params['from'];
                }
                this.resourceService.getMyResources<EnrichedOperation>('operation',this.params).subscribe(
                    searchResults => this.updateMyOperations(searchResults),
                    error => this.handleError('System error retrieving user operations', <any>error));
            }
        );
    }

    updateMyOperations(searchResults: SearchResults<EnrichedOperation>) {
        //INITIALISATIONS
        this.errorMessage = null;
        this.searchResults = searchResults;
    }

    handleError(message: string, error: ErrorObservable) {
        this.errorMessage = message + ' (Server responded: ' + error.error + ')';
    }
}