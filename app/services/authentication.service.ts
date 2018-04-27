/**
 * Created by stefania on 8/30/16.
 */
import { Injectable } from '@angular/core';
import { User } from "../domain/user";
import { deleteCookie, getCookie } from "../domain/utils";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class AuthenticationService {

    private endpoint = process.env.API_ENDPOINT;

    private oidcUrl = process.env.OIDC_ENDPOINT;

    private static readonly INTERVAL = 1000 * 60 * 15;

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    }

    private intervalId : number = 0;

    private _storage: Storage = sessionStorage;

    private session_ : User = null;

    login(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    public loginWithState() {
        console.log(this.route);
        sessionStorage.setItem("state.location", this.router.url);
        window.location.href = this.oidcUrl;
    }

    private get session() : User {
        if (!this.session_) {
            this.session_ = JSON.parse(sessionStorage.getItem('session'));
        }
        return this.session_;
    }

    logout() {
        deleteCookie('name');
        sessionStorage.removeItem('name');
        window.location.href = `https://aai.openminted.eu/proxy/saml2/idp/SingleLogoutService.php?ReturnTo=${window.location.origin}/api/openid_logout`;
    }

    public get isUserLoggedIn(): boolean {
        return this.session != null;
    }

    public get getLoggedInUser(): string {
        return this.session.name;
    }

    public get email(): string {
        return this.session.email;
    }

    public get admin() : boolean {
        return this.session.role.includes("ROLE_ADMIN");
    }

    public get roles() : string[] {
        return this.session.role;
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

    private syncWithBackend() {
        this.http.get<User>(this.endpoint + '/user',{withCredentials:true}).subscribe(
            user => this.setSessionAttr(user),
            () => this.unsetSessionAttr()
        );
    }

    public tryLogin() {
        if (getCookie('name')) {
            this.syncWithBackend();
            this.intervalId = window.setInterval(() => {
                this.syncWithBackend();
            }, AuthenticationService.INTERVAL);
            if (sessionStorage.getItem("state.location")) {
                let state = sessionStorage.getItem("state.location");
                sessionStorage.removeItem("state.location");
                this.router.navigateByUrl(state);
            }
        }
    }
}
