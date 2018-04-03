import { Component, Input } from "@angular/core";

@Component({
    selector: '[paginate]',
    template: `
        <ul class="uk-pagination">

            <li class="uk-disabled" *ngIf="isPreviousPageDisabled">
                <a class="uk-disabled" href="#">
                    <span class="uk-margin-small-right" uk-pagination-previous></span> Previous
                </a>
            </li>
            <li *ngIf="!isPreviousPageDisabled">
                <a [routerLink]="['.', {from : from - size}]">
                    <span class="uk-margin-small-right" uk-pagination-previous></span> Previous
                </a>
            </li>

            <li class="uk-margin-auto-left uk-disabled" *ngIf="isNextPageDisabled">
                <a class="uk-disabled" href="#">Next
                    <span class="uk-margin-small-left" uk-pagination-next></span>
                </a>
            </li>
            <li class="uk-margin-auto-left" *ngIf="!isNextPageDisabled">
                <a [routerLink]="['.', {from : from + size}]">Next
                    <span class="uk-margin-small-left" uk-pagination-next></span>
                </a>
            </li>
        </ul>
        <div class="resultsPageLabel">page {{currentPage}} of {{lastPage}}</div>
    `,
    styles: [
            `
            .resultsPageLabel {
                margin-top: -40px;
                text-align: center;
                font-family: Montserrat;
                font-size: 12px;
                font-weight: 300;
                color: #9f9b9b;
                text-transform: uppercase;
            }
        `
    ]
})

export class PaginationDirective {

    @Input('from')
    from: number = 0;

    @Input('total')
    total: number = 0;

    @Input('size')
    size: number = 10;


    get isNextPageDisabled(): boolean {
        return this.currentPage == this.lastPage;
    }

    get isPreviousPageDisabled(): boolean {
        return this.currentPage == 1;
    }

    get currentPage(): number {
        return (this.from / this.size) + 1;
    }

    get lastPage(): number {
        return Math.ceil(this.total / this.size);
    }
}