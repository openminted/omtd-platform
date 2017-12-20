/**
 * Created by stefania on 10/3/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {OAuthService} from "angular-oauth2-oidc";
import {AuthenticationService} from "./services/authentication.service";

@Component({
    selector: 'openminted-platform',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

    constructor(private router: Router,private oauthService: AuthenticationService) {
        // URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = window.location.origin + "/home";

        // The SPA's id. The SPA is registerd with this id at the auth-server
        this.oauthService.clientId = "dfd9f71e-2d7e-41a7-a9c5-bc27cc815868";

        // set the scope for the permissions the client should request
        // The first three are defined by OIDC. The 4th is a usecase-specific one
        this.oauthService.scope = "openid";

        // The name of the auth-server that has to be mentioned within the token
        this.oauthService.loginUrl = "https://aai.openminted.eu/oidc/authorize";

        this.oauthService.tryLogin();

    }

    ngOnInit() {
        console.log(`%c
      ___           ___         ___           ___           ___                       ___                       ___          _____    
     /  /\\         /  /\\       /  /\\         /__/\\         /__/\\        ___          /__/\\          ___        /  /\\        /  /::\\   
    /  /::\\       /  /::\\     /  /:/_        \\  \\:\\       |  |::\\      /  /\\         \\  \\:\\        /  /\\      /  /:/_      /  /:/\\:\\  
   /  /:/\\:\\     /  /:/\\:\\   /  /:/ /\\        \\  \\:\\      |  |:|:\\    /  /:/          \\  \\:\\      /  /:/     /  /:/ /\\    /  /:/  \\:\\ 
  /  /:/  \\:\\   /  /:/~/:/  /  /:/ /:/_   _____\\__\\:\\   __|__|:|\\:\\  /__/::\\      _____\\__\\:\\    /  /:/     /  /:/ /:/_  /__/:/ \\__\\:|
 /__/:/ \\__\\:\\ /__/:/ /:/  /__/:/ /:/ /\\ /__/::::::::\\ /__/::::| \\:\\ \\__\\/\\:\\__  /__/::::::::\\  /  /::\\    /__/:/ /:/ /\\ \\  \\:\\ /  /:/
 \\  \\:\\ /  /:/ \\  \\:\\/:/   \\  \\:\\/:/ /:/ \\  \\:\\~~\\~~\\/ \\  \\:\\~~\\__\\/    \\  \\:\\/\\ \\  \\:\\~~\\~~\\/ /__/:/\\:\\   \\  \\:\\/:/ /:/  \\  \\:\\  /:/ 
  \\  \\:\\  /:/   \\  \\::/     \\  \\::/ /:/   \\  \\:\\  ~~~   \\  \\:\\           \\__\\::/  \\  \\:\\  ~~~  \\__\\/  \\:\\   \\  \\::/ /:/    \\  \\:\\/:/  
   \\  \\:\\/:/     \\  \\:\\      \\  \\:\\/:/     \\  \\:\\        \\  \\:\\          /__/:/    \\  \\:\\           \\  \\:\\   \\  \\:\\/:/      \\  \\::/   
    \\  \\::/       \\  \\:\\      \\  \\::/       \\  \\:\\        \\  \\:\\         \\__\\/      \\  \\:\\           \\__\\/    \\  \\::/        \\__\\/    
     \\__\\/         \\__\\/       \\__\\/         \\__\\/         \\__\\/                     \\__\\/                     \\__\\/                  
        
        `,'color: #68b8b3');
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0,0);
        });
    }
}