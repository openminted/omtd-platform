/**
 * Created by stefania on 11/9/17.
 */
import { Component, OnInit } from '@angular/core';
import { ResourceService } from "../../../services/resource.service";

@Component({
    selector: 'component-registration-using-maven-coordinates',
    templateUrl: './component-registration-using-maven-coordinates.component.html'
})

export class ComponentRegistrationUsingMavenCoordinatesComponent implements OnInit {

    constructor(private resourceService: ResourceService) {
    }

    ngOnInit() {
    }
}