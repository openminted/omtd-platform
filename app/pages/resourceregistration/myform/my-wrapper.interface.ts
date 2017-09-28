/**
 * Created by stefanos on 19/5/2017.
 */
import {
    Component, Input, ViewChild, ViewRef, OnInit, Output, EventEmitter, Injector
} from "@angular/core";
import {MyFormDirective} from "./my-form.directive";
import {Description} from "../../../domain/omtd.description";


export abstract class MyWrapper implements OnInit{

    @Input() public component : ViewRef;

    @Input() description : Description = null;

    @Input() viewRef : ViewRef;

    @Output() deleteNotifier : EventEmitter<ViewRef> = new EventEmitter();

    @ViewChild(MyFormDirective) private formComponents: MyFormDirective;

    public first = true;

    ngOnInit() {
        if (!this.formComponents) {
            console.log(this.formComponents);
            throw "Maybe you forgot [my-form] directive in the template";
        }
        this.formComponents.viewContainerRef.insert(this.component);
    }

    public remove(){
        this.deleteNotifier.emit(this.viewRef);
    };


    public get canDelete() {
        return !(this.description.mandatory == true && this.first == true);
    }

}
