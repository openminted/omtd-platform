/**
 * Created by stefania on 8/31/16.
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from "./authentication.service";
import {getCookie} from "../domain/utils";


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // if (this.authenticationService.isUserLoggedIn()) { return true; }
        if (getCookie('name') != null) return true;
        // Store the attempted URL for redirecting
        this.authenticationService.redirectUrl = state.url;
        sessionStorage.setItem("state.location",this.router.url);
        // Navigate to the login page
        this.router.navigate(['/home']);
        return false;
    }
}