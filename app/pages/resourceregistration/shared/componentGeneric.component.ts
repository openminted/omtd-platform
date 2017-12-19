import { Component, Injector } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { Validators } from "@angular/forms";
import { EnumValues, operationTypeEnum } from "../../../domain/omtd.enum";
import { applicationDesc, Description, functionDesc } from "../../../domain/omtd.description";
import { applicationOntologies, componentOntologies } from "../../../domain/ontologies";
import { ActivatedRoute } from "@angular/router";
/**
 * Created by stefanos on 24/5/2017.
 */
@Component({
    selector: 'componentGeneric-form',
    template : `
    <div [formGroup]="parentGroup">
        <div formGroupName="{{name}}">
            
            <!--<form-inline [description]="applicationCDesc">-->
                <!--<label class="radio-label">-->
                    <input type="checkbox" formControlName="application" [hidden]="true">
                    <!--Check if component can be used as an integrated end-user application-->
                <!--</label>-->
            <!--</form-inline>-->
                     <!---->
            <!--<div class="form-group-divider"></div>-->
            
            <div formGroupName="functionInfo">
                <form-inline [description]="functionDesc">
                    <div class="ontology-align">
                        <div class="uk-select">{{selectedOperation}}</div>
                        <div uk-dropdown="pos: bottom-justify; mode: click; boundary: .ontology-align; boundary-align: true">
                            <tree-root [nodes]="ontologies" [options]="{}"
                                       (focus)="selectOperation($event)">
                            </tree-root>
                        </div>
                    </div>
                    <!--[valid]="getMyControl('functionInfo.function').valid"-->
                    <input type="text" formControlName="function" [hidden]="true">
                    <!--<select name="role" class="form-control" formControlName="function">-->
                        <!--<option *ngFor="let value of operationType" [value]="value.key" [selected]="value.key == ''">-->
                        <!--{{value.value}}-->
                        <!--</option>-->
                    <!--</select>-->

                    <div class="form-group-divider"></div>

                    <form-inline [description]="functionDescOther" [hidden]="getMyControl('functionInfo.function')?.value!=='OTHER'">
                        <input type="text" class="uk-input" formControlName="functionOther" placeholder="Other type of operation(*)"/>
                    </form-inline>
                </form-inline>
            </div>
        
            <componentCreationInfo-form [parentGroup]="group" [required]="true"></componentCreationInfo-form>
            
        </div>
    </div>
`,
    styleUrls : ['./templates/common.css']
})

export class ComponentGenericFormControl extends MyGroup {

    readonly groupDefinition = {
        application : false,
        functionInfo : this._fb.group({
            function : ['',Validators.required],
            functionOther : ['',Validators.required]
        })
    };

    private route;
    private resourceType : string;
    constructor(injector : Injector) {
        super(injector);
        this.route = injector.get(ActivatedRoute);
        this.resourceType = this.route.snapshot.data['resourceType'];
        this.ontologies = componentOntologies;
        // if(this.resourceType == 'component') {
        //     this.ontologies = componentOntologies;
        // } else {
        //     this.ontologies = applicationOntologies;
        // }
    }

    ontologies = null;
    selectedOperation : string = operationTypeEnum[0].value;
    operationType : EnumValues[] = operationTypeEnum;
    applicationCDesc : Description = applicationDesc;
    functionDesc : Description = functionDesc;
    functionDescOther : Description = Object.assign({},functionDesc);

    required = true;

    name = 'componentInfo';

    label = 'Component General Info';

    selectOperation(event) {
        this.selectedOperation = event.node.data.name;
        let operation = this.operationType.find(v => v.value.toLowerCase() === this.selectedOperation.toLowerCase());
        this.getMyControl('functionInfo.function').setValue(operation.key);
    }

    ngOnInit() {
        this.functionDescOther.label=null;
        this.functionDescOther.desc=null;
        // this.getMyControl('functionInfo.functionOther').disable();
        super.ngOnInit();
        this.getMyControl('functionInfo.function').valueChanges.subscribe(_ => {
            this.selectedOperation = this.operationType.find(v => v.key.toLowerCase() === _.toLowerCase()).value;
            if (_ === 'OTHER') {
               this.getMyControl('functionInfo.functionOther').enable();
            } else {
               this.getMyControl('functionInfo.functionOther').disable();
            }
        });
    }
}
