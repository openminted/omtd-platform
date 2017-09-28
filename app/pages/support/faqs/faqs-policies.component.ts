/**
 * Created by stefania on 6/7/17.
 */
import { Component, OnInit } from '@angular/core';
import { FAQService } from "../../../services/faq.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ActiveTopicQuestions } from "../../../domain/faq-active-topic-questions";

@Component({
    selector: 'policies',
    templateUrl: './faqs-policies.component.html',
    styles: ['h3.uk-accordion-title { text-transform: none; } .uk-tab > * > a, .nav-tabs > li > a { font-size: 14px;}']
})

export class PoliciesComponent implements OnInit {

    activeTopicQuestions: ActiveTopicQuestions[] = [];
    errorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private faqService: FAQService) {}

    ngOnInit() {
        this.faqService.getActiveTopicQuestions().subscribe(
            activeTopicQuestions => this.shiftThroughTopics(activeTopicQuestions),
            error => this.handleError(<any>error));
    }

    shiftThroughTopics(activeTopicQuestions: ActiveTopicQuestions[]) {
        this.activeTopicQuestions = activeTopicQuestions.filter(_ => _.name !== "Legal");
    }

    handleError(error) {
        this.errorMessage = 'System error retrieving Policies (Server responded: ' + error + ')';
    }
}