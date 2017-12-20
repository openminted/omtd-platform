import { MyGroup } from "../myform/my-group.interface";
import { Component, Injector, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
/**
 * Created by stefanos on 15/5/2017.
 */





// <div [formGroup]="group">
// <div formGroupName="{{name}}" >
// <div class="form-group">
//     <label for="{{formA.id}}" >Email address</label>
// <input type="text" class="form-control" #formA placeholder="Email" formControlName="formA">
// </div>
// <div class="form-group">
//     <label for="{{formB.id}}">Password</label>
// <input type="text" class="form-control" #formB placeholder="Password" formControlName="formB">
//     </div>
//     </div>
//     </div>
@Component({
    selector: 'example-form',
    template : `
<div [formGroup]="group">
    <div class="form-group" formGroupName="{{name}}">
        <div>
            <label class="col-sm-2 col-md-2 control-label">Donwload URL</label>
            <div class="form-group">
                <div class="col-sm-7 col-md-7">
                    <input type="text" class="form-control" formControlName="info" placeholder="Download URL">
                </div>
            </div>
        </div>
        <div>
            <label class="col-sm-2 col-md-2 control-label">Donwload URI</label>
            <div class="form-group">
                <div class="col-sm-7 col-md-7">
                    <input type="text" class="form-control" formControlName="uri" placeholder="Download URI">
                </div>
            </div>
        </div>
    </div>
</div>
    `
})

export class ExampleFormControl extends MyGroup implements OnInit {

    readonly definition = {
        info : '',
        uri : ['', Validators.required]
    };

    constructor(injector : Injector) {
        super(injector);
        this.groupDefinition = this.definition;
    }
}