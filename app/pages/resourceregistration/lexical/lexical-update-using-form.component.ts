/**
 * Created by stefania on 9/12/17.
 */
import { Component, Injector, OnInit } from "@angular/core";
import { Lexical } from "../../../domain/openminted-model";
import { Observable } from "rxjs/Observable";
import { LexicalBaseUsingFormComponent } from "./lexical-base-using-form.component";

@Component({
    selector: 'lexical-update-using-form',
    templateUrl: './lexical-update-using-form.component.html',
    styleUrls : ['./lexical-registration-form.component.css']
})

export class LexicalUpdateUsingFormComponent extends LexicalBaseUsingFormComponent implements OnInit {

    language : Observable<Lexical>;

    resourceType : string = 'lexical';

    constructor(injector : Injector) {
        super(injector);
        this.resourceType = this.route.snapshot.data['resourceType'];
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.language = this.resourceService.get<Lexical>(id,this.resourceType);
            this.language.subscribe(language => {
                this.lexicalMetadata = language.metadataHeaderInfo;
                this.lexicalForm.loadLexical(language);
            }, error => this.handleError("Error loading Annotation Resource.",error));
        });
    }

    updateComponent(lexical : any) {
        console.log(lexical);
        this.loading = true;
        this.resourceService.update<Lexical>(lexical,this.resourceType).subscribe(lexical => {
                this.lexicalMetadata = lexical.metadataHeaderInfo;
                this.loading = false;
                this.successfulMessage = "Annotation Resource updated successfully.";
                window.scrollTo(0,0);},
            error => this.handleError("Error updating annotation Resource",error)
        );

    }

    onSubmit() {

        if(!this.validate())
            return;
        let lexicalFilled : Lexical = Object.assign({},this.lexicalForm.formValue);
        lexicalFilled.metadataHeaderInfo = this.lexicalMetadata;
        this.updateComponent(lexicalFilled);
    }

}