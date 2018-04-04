import { Component, Injector, ViewChild } from "@angular/core";
import { BaseMetadataRecord } from "../../domain/openminted-model";
import { ActivatedRoute, Router } from "@angular/router";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { ResourceService } from "../../services/resource.service";
import { SearchResults } from "../../domain/search-results";
import { ConfirmationDialogComponent } from "../../shared/confirmation-dialog.component";
import { title } from "../../domain/utils";
import { Observable } from "rxjs/Observable";
import { saveAs } from "file-saver";
import { HttpResponse } from "@angular/common/http";

@Component({
    selector: 'my-resource-base',
    template: ``
})
export class MyResourceComponent<T extends BaseMetadataRecord> {

    @ViewChild('deleteConfirmationModal')
    public deleteConfirmationModal: ConfirmationDialogComponent;

    @ViewChild('makePublicConfirmationModal')
    public makePublicConfirmationModal: ConfirmationDialogComponent;

    public searchResults: SearchResults<T>;
    public resources: T[] = [];
    public errorMessage: string;
    public successMessage: string;

    private pageSize: number = 0;
    private currentPage: number = 0;
    private totalPages: number = 0;

    public isModalShown: boolean;

    private isPreviousPageDisabled: boolean = false;
    private isFirstPageDisabled: boolean = false;
    private isNextPageDisabled: boolean = false;
    private isLastPageDisabled: boolean = false;

    resourceType: string = '';

    protected params : any = { order : 'desc', orderField : 'modification_date', from : 0};
    route: ActivatedRoute;
    router: Router;
    resourceService: ResourceService;

    constructor(injector : Injector) {
        this.route = injector.get(ActivatedRoute);
        this.router = injector.get(Router);
        this.resourceService = injector.get(ResourceService);
        this.resourceType = this.route.snapshot.data['resourceType'];
    }

    ngOnInit() {
        this.errorMessage = null;
        this.successMessage = null;
    }

    updateMyResources(searchResults: SearchResults<T>) {
        //INITIALISATIONS
        this.errorMessage = null;
        this.searchResults = searchResults;
        this.resources.length = 0;
        this.resources = this.searchResults.results;

    }

    handleError(message: string, error: ErrorObservable) {
        this.errorMessage = message + ' (Server responded: ' + error.error + ')';
    }

    downloadResource(component : T, mediaType : string) : void {
        let id = component.metadataHeaderInfo.metadataRecordIdentifier.value;
        this.resourceService.getBlob(id,this.resourceType,mediaType).subscribe(data => {
            console.log(data);
            if (data instanceof HttpResponse) {
                saveAs((data as HttpResponse<any>).body, `${id}.${mediaType}`);
            }
        });
    }

    goToDetails(component: T) {
        return [`/landingPage/${this.resourceType}/`, component.metadataHeaderInfo.metadataRecordIdentifier.value];
    }

    editResource(component: T) {
        return [`/resourceRegistration/${this.resourceType}/form/edit/`, component.metadataHeaderInfo.metadataRecordIdentifier.value];
    }

    deleteConfirmation(resource: T) {

        this.errorMessage = null;
        this.successMessage = null;

        this.deleteConfirmationModal.ids = [resource.metadataHeaderInfo.metadataRecordIdentifier.value];
        this.deleteConfirmationModal.showModal();
    }

    confirmedDelete(ids: string[]) {

        let id = ids[0];
        let components = this.resources.filter(component => component.metadataHeaderInfo.metadataRecordIdentifier.value === id);

        if (components && components.length == 1) {

            let component = components[0];

            this.resourceService.deleteResource(component, this.resourceType).subscribe(
                _ => this.deleteResource(id),
                error => this.handleError(`System error deleting the selected ${this.resourceType}`, <any>error)
            );

        } else {
            this.errorMessage = `Error finding the ${this.resourceType} to delete`;
        }
    }

    makePublicConfirmation(component: T) {

        this.errorMessage = null;
        this.successMessage = null;

        this.makePublicConfirmationModal.ids = [component.metadataHeaderInfo.metadataRecordIdentifier.value];
        this.makePublicConfirmationModal.showModal();
    }

    confirmedMakePublic(ids: string[]) {

        let id = ids[0];
        let components = this.resources.filter(component => component.metadataHeaderInfo.metadataRecordIdentifier.value === id);

        if (components && components.length == 1) {

            let component = JSON.parse(JSON.stringify(components[0]));

            let info = Object.keys(component).find(_ => _ != 'metadataHeaderInfo');
            component[info].identificationInfo.public = true;

            this.resourceService.updateComponent(component, this.resourceType).subscribe(
                component => this.updateResource(component),
                error => this.handleError(`System error making this ${this.resourceType} public`, <any>error)
            );

        } else {
            this.errorMessage = 'Error finding the component to make public';
        }
    }

    deleteResource(id: string) {

        let i: number = this.resources.findIndex(_ => _.metadataHeaderInfo.metadataRecordIdentifier.value == id);
        this.resources.splice(i, 1);

        this.successMessage = `${title(this.resourceType)} was deleted successfully`;
    }

    updateResource(component: T) {

        let i: number = this.resources.findIndex(_ => _.metadataHeaderInfo.metadataRecordIdentifier.value == component.metadataHeaderInfo.metadataRecordIdentifier.value);
        this.resources[i] = component;

        this.successMessage = `${title(this.resourceType)} made public successfully`;
    }
}