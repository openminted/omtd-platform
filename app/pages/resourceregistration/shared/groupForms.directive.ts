/**<div class="form-group-divider"></div>
 * Created by stefanos on 10/27/17.
 */
import { Component, Input } from "@angular/core";

@Component({
    selector: '[groupForms]',
    template : `
        <div class="group">
            <div class="uk-grid">
                <div class="uk-width-1-5"></div>
                <div class="uk-width-expand\@m">
                    <label>{{groupForms}}</label>
                </div>
            </div>
            <ng-content></ng-content>
        </div>
    `,
    styleUrls : ['../shared/templates/common.css']
})

export class GroupFormsComponent {

    @Input()
    groupForms : string = "";
}