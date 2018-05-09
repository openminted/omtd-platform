/**
 * Created by stefania on 11/9/17.
 */
import { Component, OnInit } from "@angular/core";
import { ResourceService } from "../../../services/resource.service";
import { MavenComponent } from "../../../domain/maven-component";
import { ActivatedRoute } from "@angular/router";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Component({
    selector: 'component-registration-using-maven-coordinates',
    templateUrl: './component-registration-using-maven-coordinates.component.html'
})

export class ComponentRegistrationUsingMavenCoordinatesComponent implements OnInit {

    mavenComponents : MavenComponent[] = [];
    errorMessage : string = null;
    editMode : boolean = false;
    editComponentIndex : number = -1;
    insertedComponents : any = {};
    componentXML : string = '';

    constructor(private route: ActivatedRoute,private resourceService: ResourceService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            // 'annie', 'uk.ac.gate.plugins', '8.5-SNAPSHOT'
            let groupId = params['groupId'];
            let artifactId = params['artifactId'];
            let version = params['version'];
            this.resourceService.getMavenComponents(artifactId,groupId,version).subscribe(
                response => this.mavenComponents = response,
                error => this.handleError(error)
            );
        });
    }

    isInserted(index : number) : boolean {
        return this.insertedComponents[index] != null;
    }

    editXMLComponent(xml : string, index : number) {
        this.editMode = true;
        this.editComponentIndex = index;
        this.componentXML = xml;
    }

    onSubmit() {
        console.log(this.editComponentIndex);
        return this.resourceService.uploadXML(this.componentXML,'component').subscribe(
            success => {
                this.editMode = false;
                this.errorMessage = null;
                this.mavenComponents[this.editComponentIndex].inserted = true;
                console.log(success)
            },
            err => this.handleError(err)
        );
    }

    handleError(error : ErrorObservable) {
        this.errorMessage = error.error;
    }
}