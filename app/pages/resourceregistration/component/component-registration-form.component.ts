/**
 * Created by stefania on 10/19/16.
 */
import { Component, EventEmitter, Input, OnInit, Output, Type } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component as OMTDComponent } from "../../../domain/openminted-model";
import { Observable } from "rxjs/Rx";
import { MyStringFormGroup } from "../shared/my-string-form.component";
import { ParameterInfoFormComponent } from "../shared/parameter-info-form.component";
import { Description, parameterInfoDesc } from "../../../domain/omtd.description";
import { ResourceService } from "../../../services/resource.service";

@Component({
    selector: 'component-registration-form',
    templateUrl: './component-registration-form.component.html',
    styleUrls: ['./component-registration-form.component.css'],
})

export class ComponentRegistrationFormComponent implements OnInit {

    @Input('group')
    myForm: FormGroup;

    tocForm : FormGroup;

    @Input('component')
    component: Observable<OMTDComponent> = null;

    @Output('componentForm')
    componentForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    @Output()
    tocValid : EventEmitter<boolean> = new EventEmitter<boolean>();

    componentPatch: any = {"componentInfo":{"application":false,"functionInfo":{"function":"VIEWER"},"identificationInfo":{"public":false,"resourceShortName":"","resourceNames":[{"value":"Stefania's amazing Component !","lang":"en-us"},{"value":"Stefania's amazing Component ! 2","lang":"en-us"}],"descriptions":[{"value":"A workflow of components that aim at topic extraction; it includes the DKProCore component MalletLdaTopicModelInferencer that infers the topic distribution over documents using a Mallet ParallelTopicModel.","lang":"en-us"}],"resourceIdentifiers":[{"resourceIdentifierSchemeName":24,"value":"2wHbZG7kzlYlE6gknaqNWZKkDnzQOHqFIg2sJ0iL"}]},"contactInfo":{"contactPoint":"stevengatsios@gmail.com","contactType":1},"versionInfo":{"version":"0.0.1","revision":""},"inputContentResourceInfo":{"processingResourceType":"CORPUS","dataFormats":[{"dataFormat":"APPLICATION_XML"},{"dataFormat":"APPLICATION_XML"}],"characterEncodings":[{"entry":"WINDOWS_1253"},{"entry":"WINDOWS_1251"},{"entry":"MAC_ROMANIA"}],"languages":[{"entry":"en"},{"entry":"el"}]},"outputResourceInfo":{"processingResourceType":"","dataFormats":[{"dataFormat":""}],"characterEncodings":[{"entry":""}],"languages":[{"entry":""}]},"parameterInfos":[{"parameterName":"language","parameterLabel":"language","parameterDescription":"Use this language instead of the document language to resolve the model.","parameterType":"STRING","optional":true,"multiValue":false,"defaultValue":[{"entry":""}],"dataFormats":[{"dataFormat":""}]},{"parameterName":"dictVariant","parameterLabel":"dictVariant","parameterDescription":"Override the default variant used to locate the dictionary.","parameterType":"STRING","optional":true,"multiValue":false,"defaultValue":[{"entry":""}],"dataFormats":[{"dataFormat":""}]}],"rightsInfo":{"rightsStatement":"OPEN_ACCESS","licenceInfos":[{"licence":"CC_BY_3_0"}]},"componentCreationInfo":{"framework":"ALVIS_NLP","tdmmethod":"CLUSTERING_METHOD"},"distributionInfos":[{"componentDistributionForm":"EXECUTABLE_CODE","distributionLocation":"http://www.google.com"}]}};

    type: Type<any> = MyStringFormGroup;

    parameterType: Type<any> = ParameterInfoFormComponent;
    parameterInfoDesc : Description = parameterInfoDesc;
    debugValue : any = {};
    production = process.env.PRODUCTION;

    constructor(private _fb: FormBuilder) {
        this.tocForm = _fb.group({
            toc : [false,Validators.requiredTrue]
        })
    }

    loadComponent(component: OMTDComponent) {
        let temp = JSON.stringify(component, (key, value) => {
            return (value == null) ? "" : value
        });
        component = JSON.parse(temp);
        component.componentInfo.inputContentResourceInfo = ResourceService.toForms(component.componentInfo.inputContentResourceInfo);
        console.log(ResourceService.toForms(component.componentInfo.inputContentResourceInfo));
        this.myForm.patchValue(ResourceService.toForms(component));
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            componentInfo: this._fb.group({
                // resourceType : 'component'
            })

        });
        this.myForm.valueChanges.subscribe(() => {
            this.componentForm.emit(this.myForm);
            this.debugValue = ResourceService.removeNulls(this.myForm.value);
        });

        this.tocForm.valueChanges.subscribe( () => {
            this.tocValid.emit(this.tocForm.valid);
        });

        if (this.component) {
            this.component.subscribe(
                component => this.loadComponent(component),
                error => console.log(error));
        }

    }
}