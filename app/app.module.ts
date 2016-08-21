import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';

import {UsersModule} from './users.module';
import {AdminModule} from './admin.module';
import { AppComponent } from './app.component';
import {routing, appRoutingProviders} from './app.routing';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        UsersModule,
        AdminModule

    ],
    declarations: [
        AppComponent
        ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule { };
