/**
 * Created by stefania on 10/3/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from "./app.routing";

import { UserService } from "./services/user.service";
import { AuthenticationService } from "./services/authentication.service";
import { CanActivateViaAuthGuard } from "./services/can-activate-auth-guard.service";
import { ResourceService } from "./services/resource.service";

import { AppComponent } from "./app.component";
import { TopMenuComponent } from "./shared/topmenu/topmenu.component";
import { HomeComponent } from "./pages/home/home.component";
import { SearchComponent } from "./pages/search/search.component";
import { SupportComponent } from "./pages/support/support.component";
import { LoginComponent } from "./pages/user/signin/login.component";
import { RegisterComponent } from "./pages/user/register/register.component";
import { EditProfileComponent } from "./pages/user/editprofile/edit-profile.component";
import { ComponentRegistrationModule } from "./pages/resourceregistration/component/component-registration.module";
import { TabsModule } from "ng2-bootstrap/ng2-bootstrap";
import { LandingPageModule } from "./pages/landingpages/landing-page.module";
import { CorpusRegistrationModule } from "./pages/resourceregistration/corpus/corpus-registration.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        // ResourceRegistrationModule,
        routing,
        ComponentRegistrationModule, 
        CorpusRegistrationModule, 
        LandingPageModule, 
        TabsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SupportComponent,
        LoginComponent,
        RegisterComponent,
        EditProfileComponent,
        SearchComponent,
        TopMenuComponent,
    ],
    providers: [
        UserService,
        AuthenticationService,
        CanActivateViaAuthGuard,
        ResourceService,
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }