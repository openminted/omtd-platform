/**
 * Created by stefania on 8/31/16.
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from "./authentication.service";
import {getCookie} from "../domain/utils";


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    private oidc_endpoint : string = process.env.OIDC_ENDPOINT;

    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // if (this.authenticationService.isUserLoggedIn()) { return true; }
        if (getCookie('name') != null) return true;
        // Store the attempted URL for redirecting
        sessionStorage.setItem("state.location",state.url);
        // Navigate to the login page
        window.location.href = this.oidc_endpoint;
        return false;
    }
}