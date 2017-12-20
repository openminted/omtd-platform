/**
 * Created by stefania on 11/17/16.
 */
import { Component, Input } from '@angular/core';
import { ComponentDependencies } from "../../../domain/openminted-model";

@Component({
    selector: 'component-dependencies',
    templateUrl: './component-dependencies.component.html',
})

export class ComponentDependenciesComponent {
    @Input() componentDependencies: ComponentDependencies;
}