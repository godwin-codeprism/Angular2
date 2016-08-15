import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http'

import { AppComponent } from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {ItitlFoundationComponent} from './itil_foundation.component';
import {ContinualServiceComponent} from './continual_service.component';
import {ServiceOperationComponenet} from './service_operation.component';
import {ServiceTansitionComponent} from './service_transition.component';
import {ServiceDesign} from './service_design.component';
import {ServiceStrategyComponent} from './service_strategy.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent, 
        HomeComponent, 
        AboutComponent, 
        ItitlFoundationComponent, 
        ContinualServiceComponent, 
        ServiceOperationComponenet,
        ServiceTansitionComponent,
        ServiceDesign,
        ServiceStrategyComponent
        ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule { };
