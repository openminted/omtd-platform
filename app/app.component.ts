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