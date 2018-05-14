/**
 * Created by stefanos on 10/19/16.
 */
import { Component, OnInit, Type } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ParameterInfoFormComponent } from "../shared/parameter-info-form.component";
import {
    Description, parameterInfoDesc, relationTypeDesc,
    resourceDocumentationInfoDesc
} from "../../../domain/omtd.description";
import { ResourceService } from "../../../services/resource.service";
import { ActivatedRoute } from "@angular/router";
import { ResourceDocumentationFormControl } from "../shared/resourceDocumentationInfo.component";
import { RelationInfoFormControl } from "../shared/relationInfo.component";

@Component({
    selector: 'component-registration-form',
    templateUrl: './component-registration-form.component.html',
    styleUrls: ['./component-registration-form.component.css', '../shared/templates/common.css'],
})

export class ComponentRegistrationFormComponent implements OnInit {

    myForm: FormGroup;

    componentPatch: any = {"componentInfo":{"application":false,"functionInfo":{"function":"VIEWER"},"identificationInfo":{"public":false,"resourceShortName":"","resourceNames":[{"value":"Stefania's amazing Component !","lang":"en-us"},{"value":"Stefania's amazing Component ! 2","lang":"en-us"}],"descriptions":[{"value":"A workflow of components that aim at topic extraction; it includes the DKProCore component MalletLdaTopicModelInferencer that infers the topic distribution over documents using a Mallet ParallelTopicModel.","lang":"en-us"}],"resourceIdentifiers":[{"resourceIdentifierSchemeName":24,"value":"2wHbZG7kzlYlE6gknaqNWZKkDnzQOHqFIg2sJ0iL"}]},"contactInfo":{"contactPoint":"stevengatsios@gmail.com","contactType":1},"versionInfo":{"version":"0.0.1","revision":""},"inputContentResourceInfo":{"processingResourceType":"CORPUS","dataFormats":[{"dataFormat":"APPLICATION_XML"},{"dataFormat":"APPLICATION_XML"}],"characterEncodings":[{"entry":"WINDOWS_1253"},{"entry":"WINDOWS_1251"},{"entry":"MAC_ROMANIA"}],"languages":[{"entry":"en"},{"entry":"el"}]},"outputResourceInfo":{"processingResourceType":"","dataFormats":[{"dataFormat":""}],"characterEncodings":[{"entry":""}],"languages":[{"entry":""}]},"parameterInfos":[{"parameterName":"language","parameterLabel":"language","parameterDescription":"Use this language instead of the document language to resolve the model.","parameterType":"STRING","optional":true,"multiValue":false,"defaultValue":[{"entry":""}],"dataFormats":[{"dataFormat":""}]},{"parameterName":"dictVariant","parameterLabel":"dictVariant","parameterDescription":"Override the default variant used to locate the dictionary.","parameterType":"STRING","optional":true,"multiValue":false,"defaultValue":[{"entry":""}],"dataFormats":[{"dataFormat":""}]}],"rightsInfo":{"rightsStatement":"OPEN_ACCESS","licenceInfos":[{"licence":"CC_BY_3_0"}]},"componentCreationInfo":{"framework":"ALVIS_NLP","tdmmethod":"CLUSTERING_METHOD"},"distributionInfos":[{"componentDistributionForm":"EXECUTABLE_CODE","distributionLocation":"http://www.google.com"}]}};

    parameterType: Type<any> = ParameterInfoFormComponent;
    resourceDocumentationType: Type<any> = ResourceDocumentationFormControl;
    relationType : Type<any> = RelationInfoFormControl;

    relationTypeDesc : Description = relationTypeDesc;
    resourceDocumentationDesc : Description = resourceDocumentationInfoDesc;

    parameterInfoDesc : Description = parameterInfoDesc;

    production = process.env.PRODUCTION;

    galaxyButtonUrl : string = null;

    resourceType : string;

    constructor(private _fb: FormBuilder, private route : ActivatedRoute) {
        this.resourceType = this.route.snapshot.data['resourceType'];
    }

    loadComponent(component: any) {
        let temp = JSON.stringify(component, (key, value) => {
            return (value == null) ? "" : value
        });
        component = JSON.parse(temp);
        this.myForm.patchValue(ResourceService.toForms(component));
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            componentInfo: this._fb.group({
            })
        });
    }

    public get debugValue() {
        return ResourceService.removeNulls(this.myForm.value);
    }

    public get formValid() : boolean {
        return this.myForm.valid;
    }

    public get formValue() : any {
        return this.myForm.value;
    }

    public setAsTouched() {
        let ret = {};
        this.setAsTouched_(this.myForm.controls['componentInfo'] as FormGroup, ret);
        console.log(ret);
    }

    private setAsTouched_(form : FormGroup, ret : any) {
        Object.keys(form.controls).forEach(control =>{
            let control_ = form.controls[control];
            if( !control_.valid) {
                ret[control] = {};
                if (control_.hasOwnProperty('controls')) {
                    this.setAsTouched_(control_ as FormGroup, ret[control]);
                } else {
                    if (control_.enabled && !control_.valid) {
                        ret[control] = control_.valid;
                        (control_ as FormGroup).markAsDirty();
                        (control_ as FormGroup).markAsTouched();
                        console.log(control, form.controls[control].valid);
                    }
                }
            }
        });
    }

    public get(path : string) : AbstractControl {
        return this.myForm.get(path);
    }

    public galaxyToDistributionInfo() : string {
        let distributionInfo = this.myForm.get('componentInfo.distributionInfos.0');
        let schema = distributionInfo.get('componentDistributionForm').value;
        let location = distributionInfo.get('distributionLocation').value;
        if(schema === "GALAXY_WORKFLOW") {
            return this.galaxyButtonUrl = location;
        }
        return null;
    }
}
