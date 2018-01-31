/**
 * Created by stefania on 1/19/17.
 */
import { Component, ElementRef, Injector, ViewChild } from "@angular/core";
import { dataFormatTypeEnum, EnumValues } from "../../../domain/omtd.enum";
import { MyGroup } from "../myform/my-group.interface";
import { dataFormatInfoDesc, Description } from "../../../domain/omtd.description";
import { Validators } from "@angular/forms";
import { dataFormatOntologies } from "../../../domain/ontologies";

declare var UIkit : any;

@Component({
    selector: 'data-format-info-form',
    template : `
    <div [formGroup]="group">
        <form-inline [description]="dataFormatTypeDesc" [valid]="getMyControl('dataFormat').valid">
            <div class="ontology-align-data{{randomId}}">
                <div class="uk-select">{{selectedDataFormat}}</div>
                <div #ontologyTreeDropdown [attr.uk-dropdown]="ukDropdown">
                    <input type="text" placeholder="Filter tree" #filter (keyup)="tree.treeModel.filterNodes(filter.value)"/>
                    <tree-root #tree [nodes]="dataFormatontologies" [options]="{}"
                               (focus)="selectDataFormat($event)">
                        <ng-template #treeNodeTemplate let-node let-index="index">
                            <span uk-tooltip="pos: right; delay:500" title="{{node.data.comment}}">{{ node.data.name }}</span>
                        </ng-template>
                    </tree-root>
                </div>
            </div>
            <input type="text" formControlName="dataFormat" [hidden]="true">
            <div class="form-group-divider"></div>            
        </form-inline>
        
        <form-inline [description]="dataFormatOtherDesc">
            <input type="text" class="uk-input" formControlName="dataFormatOther" placeholder="Other Data Format">
        </form-inline>
    </div>
    `,
    styleUrls : ['./templates/common.css']
})

export class DataFormatInfoFormControl extends MyGroup {

    readonly groupDefinition = {
        dataFormat: ['',Validators.required],
        dataFormatOther: ''
    };

    ukDropdown : string = "";
    randomId : string = Math.random().toString().substring(2);
    selectedDataFormat : string = dataFormatTypeEnum[0].value;
    dataFormatTypeEnum: EnumValues[] = dataFormatTypeEnum;
    dataFormatTypeDesc: Description = Object.assign({}, dataFormatInfoDesc);
    dataFormatOtherDesc: Description = new Description();
    dataFormatontologies = dataFormatOntologies;

    @ViewChild('ontologyTreeDropdown') dropDownDiv : ElementRef;

    constructor(private injector: Injector) {
        super(injector);
        this.dataFormatTypeDesc.label = null;
        this.dataFormatTypeDesc.desc = null;
    }

    selectDataFormat(event) {
        this.selectedDataFormat = event.node.data.name;
        let operation = this.dataFormatTypeEnum.find(v => v.value.toLowerCase() === this.selectedDataFormat.toLowerCase());
        this.getMyControl('dataFormat').setValue(operation.key);
        UIkit.dropdown(this.dropDownDiv.nativeElement).hide();
    }

    ngOnInit() {
        super.ngOnInit();
        this.ukDropdown = `pos: bottom-justify; mode: click; boundary: .ontology-align-data${this.randomId}; boundary-align: true`;
        this.getMyControl('dataFormat').valueChanges.subscribe( ev => {
            let operation = this.dataFormatTypeEnum.find(v => v.key.toLowerCase() === ev.toLowerCase());
            this.selectedDataFormat = operation.value;
        });
    }
}