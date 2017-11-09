/**
 * Created by stefania on 7/10/17.
 */
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseMetadataRecord, Component as OMTDComponent} from "../../../domain/openminted-model";
import { ResourceService } from "../../../services/resource.service";
import { SearchResults } from "../../../domain/search-results";
import { ConfirmationDialogComponent } from "../../../shared/confirmation-dialog.component";

@Component({
    selector: 'my-services',
    templateUrl: './my-services.component.html',
    styleUrls:  ['../user-space.component.css'],
})

export class MyServicesComponent {

    @ViewChild('deleteConfirmationModal')
    public deleteConfirmationModal : ConfirmationDialogComponent;

    @ViewChild('makePublicConfirmationModal')
    public makePublicConfirmationModal : ConfirmationDialogComponent;

    public searchResults: SearchResults<BaseMetadataRecord>;
    public components: OMTDComponent[] = [];
    public errorMessage: string;
    public successMessage: string;

    private pageSize: number = 0;
    private currentPage: number = 0;
    private totalPages: number = 0;

    public isModalShown : boolean;

    private isPreviousPageDisabled: boolean = false;
    private isFirstPageDisabled: boolean = false;
    private isNextPageDisabled: boolean = false;
    private isLastPageDisabled: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resourceService: ResourceService) {}

    ngOnInit() {

        this.errorMessage = null;
        this.successMessage = null;

        this.resourceService.getMyComponents().subscribe(
            searchResults => this.updateMyComponents(searchResults),
            error => this.handleError('System error retrieving user tools/services', <any>error));
    }

    updateMyComponents(searchResults: SearchResults<BaseMetadataRecord>) {

        //INITIALISATIONS
        this.errorMessage = null;

        this.searchResults = searchResults;

        this.isFirstPageDisabled = false;
        this.isPreviousPageDisabled = false;
        this.isLastPageDisabled = false;
        this.isNextPageDisabled = false;

        this.components.length = 0;

        for (let component of this.searchResults.results) {
            this.components.push(<OMTDComponent> component.resource);
        }

        // //update form values using URLParameters
        // for (let urlParameter of this.urlParameters) {
        //     if(urlParameter.key === 'query') {
        //         this.searchCorporaForm.get('query').setValue(urlParameter.values[0]);
        //     } else {
        //         for(let facet of this.searchResults.facets) {
        //             if(facet.field === urlParameter.key) {
        //                 //
        //                 for(let parameterValue of urlParameter.values) {
        //                     for(let facetValue of facet.values) {
        //                         if(parameterValue === facetValue.value)
        //                             facetValue.isChecked = true;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }

        this.pageSize = 10;
        this.currentPage = (searchResults.from / this.pageSize) + 1;
        this.totalPages = Math.ceil(searchResults.total / this.pageSize);

        if(this.currentPage == 1) {
            this.isFirstPageDisabled = true;
            this.isPreviousPageDisabled = true;
        }

        if(this.currentPage == this.totalPages) {
            this.isLastPageDisabled = true;
            this.isNextPageDisabled = true;
        }
    }

    handleError(message: string, error) {
        this.errorMessage = message + ' (Server responded: ' + error + ')';
    }

    goToDetails(component: OMTDComponent) {
        this.router.navigate(['/landingPage/component/', component.metadataHeaderInfo.metadataRecordIdentifier.value]);
    }

    editComponent(component: OMTDComponent) {
        console.log(component);
        this.router.navigate(['/resourceRegistration/component/form/edit/', component.metadataHeaderInfo.metadataRecordIdentifier.value]);
    }

    deleteConfirmationComponent(component: OMTDComponent) {

        this.errorMessage = null;
        this.successMessage = null;

        this.deleteConfirmationModal.ids = [component.metadataHeaderInfo.metadataRecordIdentifier.value];
        this.deleteConfirmationModal.showModal();
    }

    confirmedDeleteComponent(ids: string[]) {

        let id = ids[0];
        let components = this.components.filter(component => component.metadataHeaderInfo.metadataRecordIdentifier.value === id);

        if(components && components.length == 1) {

            let component = components[0];

            this.resourceService.deleteComponent(component).subscribe(
                _ => this.deleteComponent(id),
                error => this.handleError('System error deleting the selected component', <any>error)
            );

        } else {
            this.errorMessage = 'Error finding the component to delete';
        }
    }

    makePublicConfirmation(component: OMTDComponent) {

        this.errorMessage = null;
        this.successMessage = null;

        this.makePublicConfirmationModal.ids = [component.metadataHeaderInfo.metadataRecordIdentifier.value];
        this.makePublicConfirmationModal.showModal();
    }

    confirmedMakePublicComponent(ids: string[]) {

        let id = ids[0];
        let components = this.components.filter(component => component.metadataHeaderInfo.metadataRecordIdentifier.value === id);

        if(components && components.length == 1) {

            let component = JSON.parse(JSON.stringify(components[0]));

            component.componentInfo.identificationInfo.public = true;

            this.resourceService.updateComponent(component).subscribe(
                component => this.updateComponent(component),
                error => this.handleError('System error making this component public', <any>error)
            );

        } else {
            this.errorMessage = 'Error finding the component to make public';
        }
    }

    deleteComponent(id: string) {

        let i : number = this.components.findIndex(_ => _.metadataHeaderInfo.metadataRecordIdentifier.value == id);
        this.components.splice(i, 1);

        this.successMessage = `Component was deleted successfully`;
    }

    updateComponent(component: OMTDComponent) {

        let i : number = this.components.findIndex(_ => _.metadataHeaderInfo.metadataRecordIdentifier.value == component.metadataHeaderInfo.metadataRecordIdentifier.value);
        this.components[i] = component;

        this.successMessage = `Component made public successfully`;
    }
}