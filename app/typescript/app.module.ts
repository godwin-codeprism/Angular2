import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http'

import { AppComponent } from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [AppComponent, HomeComponent, AboutComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { };
