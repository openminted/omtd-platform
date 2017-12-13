/**
 * Created by stefanos on 10/19/16.
 */
import { Component, OnDestroy, OnInit, Renderer2, Type } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ParameterInfoFormComponent } from "../shared/parameter-info-form.component";
import { Description, parameterInfoDesc } from "../../../domain/omtd.description";
import { ResourceService } from "../../../services/resource.service";
import { GalaxyService } from "../../../services/galaxy.service";

@Component({
    selector: 'component-registration-form',
    templateUrl: './component-registration-form.component.html',
    styleUrls: ['./component-registration-form.component.css'],
})

export class ComponentRegistrationFormComponent implements OnInit, OnDestroy {

    myForm: FormGroup;

    tocForm : FormGroup;

    componentPatch: any = {"componentInfo":{"application":false,"functionInfo":{"function":"VIEWER"},"identificationInfo":{"public":false,"resourceShortName":"","resourceNames":[{"value":"Stefania's amazing Component !","lang":"en-us"},{"value":"Stefania's amazing Component ! 2","lang":"en-us"}],"descriptions":[{"value":"A workflow of components that aim at topic extraction; it includes the DKProCore component MalletLdaTopicModelInferencer that infers the topic distribution over documents using a Mallet ParallelTopicModel.","lang":"en-us"}],"resourceIdentifiers":[{"resourceIdentifierSchemeName":24,"value":"2wHbZG7kzlYlE6gknaqNWZKkDnzQOHqFIg2sJ0iL"}]},"contactInfo":{"contactPoint":"stevengatsios@gmail.com","contactType":1},"versionInfo":{"version":"0.0.1","revision":""},"inputContentResourceInfo":{"processingResourceType":"CORPUS","dataFormats":[{"dataFormat":"APPLICATION_XML"},{"dataFormat":"APPLICATION_XML"}],"characterEncodings":[{"entry":"WINDOWS_1253"},{"entry":"WINDOWS_1251"},{"entry":"MAC_ROMANIA"}],"languages":[{"entry":"en"},{"entry":"el"}]},"outputResourceInfo":{"processingResourceType":"","dataFormats":[{"dataFormat":""}],"characterEncodings":[{"entry":""}],"languages":[{"entry":""}]},"parameterInfos":[{"parameterName":"language","parameterLabel":"language","parameterDescription":"Use this language instead of the document language to resolve the model.","parameterType":"STRING","optional":true,"multiValue":false,"defaultValue":[{"entry":""}],"dataFormats":[{"dataFormat":""}]},{"parameterName":"dictVariant","parameterLabel":"dictVariant","parameterDescription":"Override the default variant used to locate the dictionary.","parameterType":"STRING","optional":true,"multiValue":false,"defaultValue":[{"entry":""}],"dataFormats":[{"dataFormat":""}]}],"rightsInfo":{"rightsStatement":"OPEN_ACCESS","licenceInfos":[{"licence":"CC_BY_3_0"}]},"componentCreationInfo":{"framework":"ALVIS_NLP","tdmmethod":"CLUSTERING_METHOD"},"distributionInfos":[{"componentDistributionForm":"EXECUTABLE_CODE","distributionLocation":"http://www.google.com"}]}};

    parameterType: Type<any> = ParameterInfoFormComponent;

    parameterInfoDesc : Description = parameterInfoDesc;

    production = process.env.PRODUCTION;

    galaxyButtonUrl : string = null;
    iframeURL = null;
    listener = null;
    constructor(private _fb: FormBuilder, private galaxyService : GalaxyService, private renderer : Renderer2) {
        this.tocForm = _fb.group({
            toc : [false,Validators.requiredTrue]
        })
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

    public get tocValid() : boolean{
        return this.tocForm.valid;
    }

    public get formValid() : boolean {
        return this.myForm.valid;
    }

    public get formValue() : any {
        return this.myForm.value;
    }

    public setAsTouched() {
        console.log("Not yet implemented");
    }

    public get(path : string) : AbstractControl {
        return this.myForm.get(path);
    }

    public galaxyToDistributionInfo() {
        let distributionInfo = this.myForm.get('componentInfo.distributionInfos.0');
        let schema = distributionInfo.get('componentDistributionForm').value;
        let location = distributionInfo.get('distributionLocation').value;
        if(schema === "GALAXY_WORKFLOW") {
            this.galaxyButtonUrl = location;
        }
    }


    navigateToWorkflow() {
        let galaxyURL = new URL(this.galaxyButtonUrl);
        let workflowId = this.galaxyButtonUrl.match(/\/(\w+)$/);
        console.log(workflowId);
        if(galaxyURL.origin == location.origin) {
            this.iframeURL = this.galaxyService.workflowURLSanitized(workflowId[1]);
            this.listener = this.renderer.listen('window','message',data =>{
                if(data['origin'] == location.origin && data['data']=='workflowSaved') {
                    this.galaxyService.updateWorkflow(workflowId[1]).subscribe(_ => {console.log("Workflow saved")});
                }
            });
        } else {
            window.open(this.galaxyService.getGalaxyUrl(workflowId[1]));
        }
    }

    ngOnDestroy(): void {
        this.listener && this.listener();
    }
}