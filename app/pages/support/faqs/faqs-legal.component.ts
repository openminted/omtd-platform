/**
 * Created by stefania on 6/7/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FAQService } from "../../../services/faq.service";
import { ActiveTopicQuestions } from "../../../domain/faq-active-topic-questions";

@Component({
    selector: 'faqs',
    templateUrl: './faqs-legal.component.html',
    styles: ['h3.uk-accordion-title { text-transform: none; } .uk-tab > * > a, .nav-tabs > li > a { font-size: 14px;}']

})

export class FAQsComponent implements OnInit {

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
        this.activeTopicQuestions = activeTopicQuestions.filter(_ => _.name === "Legal");
    }

    handleError(error) {
        this.errorMessage = 'System error retrieving FAQs (Server responded: ' + error + ')';
    }
}