/**
 * Created by stefania on 17/09/2018.
 */
import { Component, OnInit } from '@angular/core';
import { ResourceService } from "../../../services/resource.service";
import { License, LicenseCompatibility } from "../../../domain/license";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Component({
    selector: 'license-compatibility-matrix',
    templateUrl: './license-compatibility-matrix.component.html',
    styleUrls:  ['./license-compatibility-matrix.component.css']
})

export class LicenseCompatibilityMatrixComponent implements OnInit {

    public licenses: License[] = [];
    public selectedType : string = 'contents';

    public selectedLicense1: string;
    public selectedLicense2: string;

    public errorMessage: string;

    public compatibilityResults: LicenseCompatibility;

    constructor(private resourceService: ResourceService) {}

    ngOnInit() {
        this.resourceService.getLicenses().subscribe(
            licenses => this.licenses = licenses.sort((a,b)=>a.name.localeCompare(b.name)),
            error => this.handleError('System error retrieving licenses', <any> error)
        );
    }

    selectLicenseType(licenseType: string) {
        this.selectedType = licenseType;
        this.compatibilityResults = null;
    }

    selectLicense1(license1: string) {
        this.selectedLicense1 = license1;
        this.compareLicenses();
    }

    selectLicense2(license2: string) {
        this.selectedLicense2 = license2;
        this.compareLicenses();
    }

    compareLicenses() {
        if(this.selectedLicense1 && this.selectedLicense2) {
            this.resourceService.compareLicenses(this.selectedLicense1, this.selectedLicense2).subscribe(
                licenseCompatibility => this.compatibilityResults = licenseCompatibility,
                error => this.handleError('System error getting compatibility results', <any> error)
            );
        }
    }

    handleError(message: string, error : ErrorObservable) {
        console.log(error);
        this.errorMessage = message + ' (Server responded: ' + error.error + ')';
    }
}