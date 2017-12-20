/**
 * Created by stefania on 12/4/17.
 */
import { Component, Input } from '@angular/core';
import { GroupInfo } from "../../../domain/openminted-model";

@Component({
    selector: 'group-info',
    templateUrl: './group-info.component.html',
    styleUrls:  ['../landing-page.component.css'],
})

export class GroupInfoComponent {
    @Input() groupInfo: GroupInfo;
}