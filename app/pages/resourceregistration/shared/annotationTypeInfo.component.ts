import { Validators } from "@angular/forms";
import { Component, ElementRef, Injector, ViewChild } from "@angular/core";
import { MyGroup } from "../myform/my-group.interface";
import { annotationTypeDesc, annotationTypeTypeDesc, Description } from "../../../domain/omtd.description";
import { annotationTypeTypeEnum, EnumValues } from "../../../domain/omtd.enum";
import { annotationTypeOntologies } from "../../../domain/ontologies";
declare var UIkit : any;

@Component({
    selector: 'annotationTypeInfo-form',
    template : `
        <div [formGroup]="group">
            <!--<form-inline [description]="annotationTypeDesc" [valid]="getMyControl('annotationType').valid">-->
                <div class="ontology-align-data{{randomId}}">
                    <div class="uk-select">{{selectedAnnotationType}}</div>
                    <div #ontologyTreeDropdown [attr.uk-dropdown]="ukDropdown">
                        <input type="text" placeholder="Filter tree" #filter (keyup)="tree.treeModel.filterNodes(filter.value)"/>
                        <tree-root #tree [nodes]="annotationOntologies" [options]="{}"
                                   (focus)="selectDataFormat($event)">
                            <ng-template #treeNodeTemplate let-node let-index="index">
                                <span uk-tooltip="pos: right; delay:500" title="{{node.data.comment}}">{{ node.data.name }}</span>
                            </ng-template>
                        </tree-root>
                    </div>
                </div>
                <input type="text" formControlName="annotationType" [hidden]="true">
                <div class="form-group-divider"></div>
            <!--</form-inline>-->

            <!--<form-inline [description]="annotationTypeOtherDesc">-->
                <input type="text" class="uk-input" formControlName="annotationTypeOther" placeholder="Other Annotation Type">
            <!--</form-inline>-->
        </div>
`,
    styleUrls : ['./templates/common.css']
})
export class AnnotationTypeInfoFormControl extends MyGroup {


    randomId : string = Math.random().toString().substring(2);
    annotationTypeDesc : Description = annotationTypeTypeDesc;
    annotationTypeOtherDesc : Description = new Description();
    annotationTypeEnum : EnumValues[] = annotationTypeTypeEnum;
    annotationOntologies = annotationTypeOntologies;
    groupDefinition : any = {
        annotationType : ["",Validators.required],
        annotationTypeOther : ""
    };
    selectedAnnotationType : string = annotationTypeTypeEnum[0].value;

    ukDropdown : string = "";

    @ViewChild('ontologyTreeDropdown') dropDownDiv : ElementRef;

    selectDataFormat(event) {
        this.selectedAnnotationType = event.node.data.name;
        let operation = this.annotationTypeEnum.find(v => v.value.toLowerCase() === this.selectedAnnotationType.toLowerCase());
        this.getMyControl('annotationType').setValue(operation.key);
        UIkit.dropdown(this.dropDownDiv.nativeElement).hide();
    }

    constructor(injector : Injector) {
        super(injector);
        this.annotationTypeDesc.label = "";
        this.annotationTypeDesc.desc = "";
    }

    ngOnInit() {
        super.ngOnInit();
        this.ukDropdown = `pos: bottom-justify; mode: click; boundary: .ontology-align-data${this.randomId}; boundary-align: true`;
        this.getMyControl('annotationType').valueChanges.subscribe( ev => {
            let operation = this.annotationTypeEnum.find(v => v.key.toLowerCase() === ev.toLowerCase());
            this.selectedAnnotationType = operation.value;
        });
    }

}