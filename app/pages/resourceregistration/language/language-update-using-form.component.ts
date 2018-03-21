/**
 * Created by stefania on 9/12/17.
 */
import { Component, Injector, OnInit } from "@angular/core";
import { Component as OMTDComponent, LanguageDescription, MetadataHeaderInfo } from "../../../domain/openminted-model";
import { Observable } from "rxjs/Observable";
import { LanguageBaseUsingFormComponent } from "./language-base-using-form.component";

@Component({
    selector: 'language-update-using-form',
    templateUrl: './language-update-using-form.component.html',
    styleUrls : ['./language-registration-form.component.css']
})

export class LanguageUpdateUsingFormComponent extends LanguageBaseUsingFormComponent implements OnInit {

    language : Observable<LanguageDescription>;

    languageMetadata : MetadataHeaderInfo = null;

    resourceType : string = 'language';

    constructor(injector : Injector) {
        super(injector);
        this.resourceType = this.route.snapshot.data['resourceType'];
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.language = this.resourceService.get<LanguageDescription>(id,this.resourceType);
            this.language.subscribe(component => {
                this.languageMetadata = component.metadataHeaderInfo;
                this.languageForm.loadLanguage(component);
            }, error => this.handleError("Error loading Model and Grammar.",error));
        });
    }

    updateComponent(component : any) {
        console.log(component);
        this.loading = true;
        this.resourceService.update<LanguageDescription>(component,this.resourceType).subscribe(component => {
                console.log(component);
                this.languageMetadata = component.metadataHeaderInfo;
                this.loading = false;
                this.successfulMessage = "Model and Grammar updated successfully.";
                window.scrollTo(0,0);},
            error => this.handleError("Error updating Model and Grammar.",error)
        );

    }

    onSubmit() {
        if(!this.validate())
            return;
        let componentFilled : OMTDComponent = Object.assign({},this.languageForm.formValue);
        componentFilled.metadataHeaderInfo = this.languageMetadata;
        this.updateComponent(componentFilled);
    }

    navigateToComponent() {
        this.router.navigate([`/landingPage/${this.resourceType}/`, this.languageMetadata.metadataRecordIdentifier.value]);
    }
}