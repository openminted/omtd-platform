import { Component, ElementRef, Injector, Type, ViewChild } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { Validators } from "@angular/forms";
import { EnumValues, operationTypeEnum, previousAnnotationTypesPolicyEnum } from "../../../domain/omtd.enum";
import {
    applicationDesc, Description, domainInfoDesc, functionDesc, keywordDesc,
    previousAnnotationTypesPolicyDesc
} from "../../../domain/omtd.description";
import { applicationOntologies, componentOntologies } from "../../../domain/ontologies";
import { ActivatedRoute } from "@angular/router";
import { DomainInfoFormControl } from "./domain-info-form";
import { MySingleStringForm } from "./my-string-form.component";
import { DomainIdentifierCommonFormControl } from "./identifierCommon.component";
declare var UIkit : any;

/**
 * Created by stefanos on 24/5/2017.
 */
@Component({
    selector: 'componentGeneric-form',
    template : `
    <div [formGroup]="parentGroup">
        <div formGroupName="{{name}}">
            
            <input type="checkbox" formControlName="application" [hidden]="true">
            
            <div formGroupName="functionInfo">
                <form-inline [description]="functionDesc">
                    <div class="ontology-align">
                        <div class="uk-select">{{selectedOperation}}</div>
                        <div id="ontologyTreeDropdown" uk-dropdown="pos: bottom-justify; mode: click; boundary: .ontology-align; boundary-align: true">
                            <input type="text" placeholder="Filter tree" #filter (keyup)="tree.treeModel.filterNodes(filter.value)"/>
                            <tree-root #tree [nodes]="ontologies" [options]="{}"
                                       (focus)="selectOperation($event)">
                                <ng-template #treeNodeTemplate let-node let-index="index">
                                    <span uk-tooltip="pos: right; delay:500" title="{{node.data.comment}}">{{ node.data.name }}</span>
                                </ng-template>
                            </tree-root>
                        </div>
                    </div>
                    
                    <input type="text" formControlName="function" [hidden]="true">
                    
                    <div class="form-group-divider"></div>
                    
                    <input type="text" class="uk-input" formControlName="functionOther" placeholder="Other type of operation(*)"/>
                </form-inline>
            </div>

            <div class="form-group-divider"></div>
            
            <componentCreationInfo-form [parentGroup]="group" [required]="true"></componentCreationInfo-form>

            <div class="form-group-divider"></div>
            
            <form-inline [description]="previousAnnotationTypesPolicyDesc"
                         [valid]="getMyControl('previousAnnotationTypesPolicy').valid">
                <select name="role" class="uk-select" formControlName="previousAnnotationTypesPolicy">
                    <option *ngFor="let value of previousAnnotationTypesPolicyEnum" [value]="value.key" [selected]="value.key == ''">
                        {{value.value}}
                    </option>
                </select>
            </form-inline>

            <div class="form-group-divider"></div>
            
            <form-repeat-inline [component]="domainInfoType" [parentGroup]="group" [initEmpty]="true"
                                [name]="'domains'" [description]="domainInfoDesc">

            </form-repeat-inline>

            <div class="form-group-divider"></div>
            
            <form-repeat-inline [component]="simpleStringType" [parentGroup]="group" [initEmpty]="true"
                                [name]="'keywords'" [description]="keywordDesc">

            </form-repeat-inline>
            
        </div>
    </div>
`,
    styleUrls : ['./templates/common.css']
})

export class ComponentGenericFormControl extends MyGroup {

    readonly groupDefinition = {
        application : false,
        previousAnnotationTypesPolicy : '',
        functionInfo : this._fb.group({
            function : ['',Validators.required],
            functionOther : ''
        })
    };

    private route;
    private resourceType : string;
    constructor(injector : Injector) {
        super(injector);
        this.route = injector.get(ActivatedRoute);
        this.resourceType = this.route.snapshot.data['resourceType'];
        this.ontologies = componentOntologies;
        if(this.resourceType == 'component') {
            this.ontologies = componentOntologies;
        } else {
            this.ontologies = applicationOntologies;
        }
    }

    ontologies = null;
    selectedOperation : string = operationTypeEnum[0].value;
    operationType : EnumValues[] = operationTypeEnum;
    previousAnnotationTypesPolicyEnum : EnumValues[] = previousAnnotationTypesPolicyEnum;
    previousAnnotationTypesPolicyDesc : Description = previousAnnotationTypesPolicyDesc;
    applicationCDesc : Description = applicationDesc;
    functionDesc : Description = functionDesc;
    functionDescOther : Description = Object.assign({},functionDesc);
    domainInfoType : Type<any> = DomainIdentifierCommonFormControl;
    domainInfoDesc : Description = domainInfoDesc;
    keywordDesc: Description = Object.assign({}, keywordDesc);
    simpleStringType: Type<any> = MySingleStringForm;
    required = true;

    name = 'componentInfo';

    label = 'Component General Info';

    @ViewChild('ontologyTreeDropdown') tree : ElementRef;

    selectOperation(event) {
        this.selectedOperation = event.node.data.name;
        let operation = this.operationType.find(v => v.value.toLowerCase() === this.selectedOperation.toLowerCase());
        this.getMyControl('functionInfo.function').setValue(operation.key);
        UIkit.dropdown('#ontologyTreeDropdown').hide();
    }

    ngOnInit() {
        this.functionDescOther.label=null;
        this.functionDescOther.desc=null;
        this.keywordDesc.mandatory=false;
        super.ngOnInit();
        this.getMyControl('functionInfo.function').valueChanges.subscribe( ev => {
            let operation = this.operationType.find(v => v.key.toLowerCase() === ev.toLowerCase());
            this.selectedOperation = operation.value;
        });
    }
}
