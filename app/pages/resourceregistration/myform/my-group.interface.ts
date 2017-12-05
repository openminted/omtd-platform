import {FormGroup, FormBuilder, FormArray, AbstractControl, FormControl} from "@angular/forms";
import {
    Component, Input, OnInit, Injector, OnChanges, SimpleChanges, AfterContentInit, Type,
    EventEmitter
} from "@angular/core";
import {Description} from "../../../domain/omtd.description";
import {Subject} from "rxjs/Subject";
/**
 * Created by stefanos on 15/5/2017.
 */

@Component({
    template:``
})
export class MyGroup implements OnInit, AfterContentInit {

    @Input() public parentGroup: AbstractControl;

    @Input() public name : string | number;

    @Input() public data : any = null;

    public patchData : Subject<any> = new Subject();

    @Input() public required : boolean = false;

    @Input() public description : Description = null;

    @Input() public index : number = -1;

    protected _fb : FormBuilder;

    protected groupDefinition : { [key:string]:any };

    public group : AbstractControl;

    public createdEvent : EventEmitter<any> = new EventEmitter();

    constructor(injector : Injector) {
        this._fb = injector.get(FormBuilder);
        this.patchData.subscribe(_ => {
            if(typeof _ != 'undefined') {
                setTimeout( () => {
                    (this.group as FormGroup).patchValue(_);
                },1000);
            }
        });
    }

    protected get isArray() {
        return this.index != -1;
    }

    public generate() : FormGroup {
        let ret = this._fb.group(this.groupDefinition);
        if (this.patchData) {
            // console.log(this.patchData);
        }
        if (!this.required)
            Object.keys(ret.controls).forEach(item => ret.controls[item].clearValidators());
        return ret;
    }

    public getMyControl(name : string) : AbstractControl {
        if (this.isArray) {
            return this.group.get(<string>name);
        }
        else {
            return this.group.get(name as string);
        }
    }

    ngOnInit(): void {
        if(this.index == -1) {
            if(<string>this.name == '' || (<FormGroup>this.parentGroup).contains(<string>this.name)) {
                let obj = this.generate();
                Object.keys(obj.controls).forEach(c => {
                    (<FormGroup>this.parentGroup.get(<string>this.name)).addControl(c,obj.controls[c]);
                });
                this.group = this.parentGroup.get(this.name as string) as FormGroup;
            } else {
                (<FormGroup>this.parentGroup).addControl(<string>this.name, this.generate());
                this.group = this.parentGroup.get(this.name as string) as FormGroup;
            }
        } else {
            this.name = this.index;
            this.group = this.parentGroup as FormGroup;
        }
    }

    ngAfterContentInit(): void {
        this.createdEvent.emit(this.name);
        // setTimeout(() => {
        //     if(this.patchData != null) {
        //         (this.group as FormGroup).patchValue(this.patchData);
        //     }
        // },1000);
        // setTimeout(() => {
        //     console.log(this.group,this.parentGroup);
        //     (this.group as FormGroup).updateValueAndValidity();
        // },2000);
    }

    public get valid() {
        return this.group.valid;
    }

}

@Component({
    selector : 'form-inline',
    template : `
<ng-template #descTemplate>{{description.desc}}</ng-template>

<div class="uk-grid uk-form-horizontal">
    <!--<label class="uk-width-1-5 uk-form-label" *ngIf="description.label!=null" [ngClass]="{'required' : description.mandatory==true}">-->
    <label class="uk-width-1-5" *ngIf="description.label!=null" [ngClass]="{'required' : description.mandatory==true}">
        <!--<span *ngIf="description.mandatory==true && !valid"><i class="fa fa-star" style="color : red"></i></span>-->
        <!--<span *ngIf="description.recommended==true"><i class="fa fa-star" style="color : green"></i></span>-->
        {{description.label}}
        <span *ngIf="params==='tooltip'"><i class="fa fa-info-circle" [tooltip]="descTemplate" container="body"></i></span>
    </label>
    <!--<div class="uk-width-expand@m uk-form-controls" [ngClass]="{'has-error': !valid}">-->
    <div class="uk-width-expand\@m" [ngClass]="{'has-error': !valid}">
        <ng-content></ng-content>
        <div *ngIf="params==='inline'">
            <i><small>{{description.desc}}</small></i>
        </div>
    </div>
</div>

`,
    styleUrls : ['../shared/templates/common.css']

})
export class InlineFormWrapper implements OnChanges {

    @Input() public description : Description = null;

    @Input() public params : string = 'inline';

    @Input() public width : number = 9;

    @Input() public valid : boolean = true;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes.valid)
            this.valid = <boolean>changes.valid.currentValue;
    }

}