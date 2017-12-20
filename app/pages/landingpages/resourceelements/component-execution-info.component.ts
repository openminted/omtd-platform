/**
 * Created by stefania on 12/5/17.
 */
import { Component, Input, ViewChild } from '@angular/core';
import {
    ComponentDependencies, FunctionInfo, ParameterInfo,
    ProcessingResourceInfo
} from "../../../domain/openminted-model";
import { ConfirmationDialogComponent } from "../../../shared/confirmation-dialog.component";

@Component({
    selector: 'component-execution-info',
    templateUrl: './component-execution-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class ComponentExecutionInfoComponent {

    @Input() input: ProcessingResourceInfo;
    @Input() output: ProcessingResourceInfo;
    @Input() functionInfo: FunctionInfo;
    @Input() parameters: ParameterInfo[];
    @Input() componentDependencies: ComponentDependencies;

    @ViewChild('parametersModal')
    public parametersModal : ConfirmationDialogComponent;

    public isParametersModalShown : boolean;

    openParametersModal() {
        this.parametersModal.showModal();
    }
}