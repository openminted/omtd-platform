import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
/**
 * Created by stefanos on 17/1/2017.
 */

@Component({
    selector: 'distribution-mediums',
    template : ``,//templateUrl: './templates/distribution-mediums.component.html',
    styleUrls: ['./templates/common.css']
})

export class DistributionMediums implements OnInit {
    @Input('group')
    myForm: FormGroup;

    ngOnInit(): void {
    }

}


@Component({
    selector: 'distribution-mediums',
    template : ``,//templateUrl: './templates/distribution-medium.component.html',
    styleUrls: ['./templates/common.css']
})

export class DistributionMedium implements OnInit {
    @Input('group')
    myForm: FormGroup;

    ngOnInit(): void {
    }

}