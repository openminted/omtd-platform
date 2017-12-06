import { Component, Input, OnInit } from "@angular/core";
import { EnumValues } from "../../../domain/omtd.enum";
/**
 * Created by stefanos on 18/1/2017.
 */

@Component({
    selector: 'enum-common-form',
    template: `
<select name="role" class="form-control" formControlName="{{name}}">
    <option *ngFor="let value of enumForm" [value]="value.key" [selected]="value.key == ''">
        {{value.value}}
    </option>
</select>
`,
    styleUrls: ['./templates/common.css']
})
export class EnumCommonForm implements OnInit {
    @Input('formControlName')
    name: string;

    @Input('enum')
    enumForm : EnumValues[];

    ngOnInit(): void {
    }

}