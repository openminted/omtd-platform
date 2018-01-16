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
import { ComponentRegistrationModule } from "./pages/resourceregistration/component/component-registration.module";
import { TabsModule } from "ngx-bootstrap";
import { LandingPageModule } from "./pages/landingpages/landing-page.module";
import { CorpusRegistrationModule } from "./pages/resourceregistration/corpus/corpus-registration.module";
import { FooterComponent } from "./shared/footer/footer.component";
import { OAuthModule } from 'angular-oauth2-oidc';
import { ReusableComponentsModule } from "./shared/reusablecomponents/reusable-components.module";
import { SupportModule } from "./pages/support/support.module";
import { AboutModule } from "./pages/about/about.module";
import { DatasourceRegistrationModule } from "./pages/resourceregistration/datasource/datasource-registration.module";
import { ActionsModule } from "./pages/actions/actions.module";
import { UserSpaceModule } from "./pages/user/user-space.module";
import { LexicalRegistrationModule } from "./pages/resourceregistration/lexical/lexical-registration.module";

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
        LexicalRegistrationModule,
        DatasourceRegistrationModule,
        LandingPageModule, 
        TabsModule,
        OAuthModule.forRoot(),
        ReusableComponentsModule,
        SupportModule,
        AboutModule,
        ActionsModule,
        UserSpaceModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        TopMenuComponent,
        FooterComponent,
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