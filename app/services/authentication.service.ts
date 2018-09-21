/**
 * Created by stefania on 8/30/16.
 */
import { Injectable } from '@angular/core';
import { User } from "../domain/user";
import { deleteCookie, getCookie } from "../domain/utils";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { timer } from "rxjs/observable/timer";
import { switchMap, shareReplay, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";


@Injectable()
export class AuthenticationService {

    private endpoint = process.env.API_ENDPOINT;

    private oidcUrl = process.env.OIDC_ENDPOINT;

    private static readonly INTERVAL = 1000 * 60 * 15;

    public static readonly  ROLE_ADMIN = 'ROLE_ADMIN';

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    }

    private intervalId : number = 0;

    private session_ : Observable<User> = null;

    public get session() : Observable<User> {
        if (!this.session_ && this.isUserLoggedIn) {
            const timer$ = timer(0,AuthenticationService.INTERVAL);
            this.session_ = timer$.pipe(
                switchMap(() => this.syncWithBackend()),
                shareReplay(1),
                catchError(err => {this.unsetSessionAttr(); return of(new User());}));
            // this.session_.catch((err) => {this.unsetSessionAttr(); throw 'User is not logged in';})
            // this.session_ = JSON.parse(sessionStorage.getItem('session'));
        }
        return this.session_;
    }

    login(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    public loginWithState() {
        console.log(this.route);
        sessionStorage.setItem("state.location", this.router.url);
        window.location.href = this.oidcUrl;
    }

    logout() {
        deleteCookie('name');
        sessionStorage.removeItem('session');
        window.location.href = `https://aai.openminted.eu/proxy/saml2/idp/SingleLogoutService.php?ReturnTo=${window.location.origin}/api/openid_logout`;
    }

    public get isUserLoggedIn(): boolean {
        return getCookie('name') != null;
    }

    public get getLoggedInUser(): Observable<string> {
        return this.session.map(x => x.name);
    }

    public get email(): Observable<string> {
        return  this.session.map(x => x.email);
    }

    public get sub() : Observable<string> {
        return this.session.map(x => x.sub);
    }

    public get admin() : Observable<boolean> {
        return this.session.map(x => x.role.includes("ROLE_ADMIN"));
    }

    public get roles() : Observable<string[]> {
        return this.session.map(x => x.role);
    }

    private setSessionAttr(user : User) {
        sessionStorage.setItem('session', JSON.stringify(user));
    }

    private unsetSessionAttr() {
        console.log("Logout");
        sessionStorage.removeItem('session');
        this.session_ = null;
        deleteCookie('name');
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    private syncWithBackend(): Observable<User> {
        return this.http.get<User>(this.endpoint + '/user',{withCredentials:true});
    }

//     this.response.subscribe(
//         user => this.setSessionAttr(user),
// () => this.unsetSessionAttr()
// );

    public tryLogin() {
        if (getCookie('name')) {
            this.syncWithBackend();
            if (sessionStorage.getItem("state.location")) {
                let state = sessionStorage.getItem("state.location");
                sessionStorage.removeItem("state.location");
                this.router.navigateByUrl(state);
            }
        }
    }
}
