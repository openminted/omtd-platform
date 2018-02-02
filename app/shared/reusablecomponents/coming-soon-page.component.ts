/**
 * Created by stefania on 02/02/2018.
 */
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'coming-soon-page',
    templateUrl: './coming-soon-page.component.html',
})

export class ComingSoonPageComponent {

    title : string;

    constructor(private activatedRoute: ActivatedRoute) {
        this.title = this.activatedRoute.snapshot.data['title'];
    }
}