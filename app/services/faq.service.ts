/**
 * Created by stefania on 7/12/17.
 */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActiveTopicQuestions } from "../domain/faq-active-topic-questions";
import { HttpClient } from "@angular/common/http";
import { FAQ_ENDPOINT } from "../constants";

@Injectable()
export class FAQService {

    private _faqUrl = FAQ_ENDPOINT;

    constructor (private http: HttpClient) {
    }

    getActiveTopicQuestions() {
        return this.http.get<ActiveTopicQuestions[]>(this._faqUrl + "/topic/active")
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = "";
        console.log(error);
        if (error instanceof Response) {
            const body = error.text() || '';
            //const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${body}`;
        } else {
            errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg); // log to console instead
        }
        return Observable.throw(errMsg);
    }
}