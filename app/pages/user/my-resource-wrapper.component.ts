import { Component, Injector, Input, ViewChild } from "@angular/core";
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
    selector: '[my-resource-wrapper]',
    template: `
        <div class="uk-section-default uk-section uk-section-small uk-padding-remove-bottom" style="min-height: 325px">
            <div class="uk-container">
                <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
                    <div class="uk-width-1-1@m uk-first-column">
                        <h1 class="uk-h2">{{pageTitle}}</h1>
                        <hr class="uk-divider-small">
                        <!-- TOP HELP CONTENT -->
                        <help-content #topHelperContent [position]="'top'"
                                      [ngClass]="topHelperContent.isPresent()?'uk-margin-medium-top uk-margin-medium-bottom':'clear-style'">
                        </help-content>
                        <div class="uk-container uk-margin-medium-top uk-margin-medium-bottom">
                            <div class="uk-grid">
                                <!-- LEFT HELP CONTENT -->
                                <aside-help-content #leftHelperContent [position]="'left'"
                                                    [ngClass]="leftHelperContent.isPresent()?'tm-sidebar uk-width-1-4@m uk-first-column':'clear-style'">
                                </aside-help-content>
                                <!-- MIDDLE -->
                                <div class=" uk-width-expand@m">
                                    <ng-content></ng-content>
                                </div>
                                <!-- RIGHT HELP CONTENT -->
                                <aside-help-content #rightHelperContent [position]="'right'"
                                                    [ngClass]="rightHelperContent.isPresent()?'tm-sidebar uk-width-1-4@m uk-first-column':'clear-style'">
                                </aside-help-content>
                            </div>
                        </div>
                        <!-- BOTTOM HELP CONTENT -->
                        <help-content #bottomHelperContent [position]="'bottom'"
                                      [ngClass]="bottomHelperContent.isPresent()?'uk-margin-medium-top uk-margin-medium-bottom':'clear-style'">
                        </help-content>
                    </div>
                </div>
            </div>
        </div>

    `
})
export class MyResourceWrapper {

    @Input("my-resource-wrapper")
    pageTitle : string = "";
}