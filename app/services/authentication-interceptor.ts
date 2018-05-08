/**
 * Created by stefania on 04/05/2018.
 */
import 'rxjs/add/operator/do';
import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
    HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                console.log(err);
                if (err.status === 403 && err.url.search(/user$/) === -1) {
                    // redirect to the login route
                    // or show a modal
                    console.log("Unauthorised!!",err);
                    this.router.navigateByUrl("/403-forbidden", { skipLocationChange: true });
                }
            }
        });
    }
}