/**
 * Created by stefania on 10/3/16.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';
const platform = platformBrowserDynamic();


enableProdMode();
platform.bootstrapModule(AppModule);
