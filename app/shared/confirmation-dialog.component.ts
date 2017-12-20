/**
 * Created by stefania on 5/2/17.
 */
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent {

    @ViewChild('autoShownModal')
    public autoShownModal:ModalDirective;

    @Input()
    public isModalShown:boolean = false;

    @Input()
    public title: string;

    @Input()
    public confirmActionButton: string;

    @Output() emmitObject: EventEmitter<any> = new EventEmitter();

    private _ids: string[] = [];

    public set ids(ids: string[]) {
        this._ids = ids;
    }

    public showModal():void {
        this.isModalShown = true;
    }

    public hideModal():void {
        this.autoShownModal.hide();
    }

    public onHidden():void {
        this.isModalShown = false;
    }

    public confirmedAction() {
        this.emmitObject.emit(this._ids);
        this.hideModal();
    }
}