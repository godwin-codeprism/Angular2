import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';

import {adminRouting} from './admin.routing';
import {AdminComponent} from './admin.component';
import {LoginComponent} from './login.component';
import {DashboardComponent} from './dashboard.component';
import {AdminEventsComponent} from './admin_events.component';
import {AdminTestimonialsComponent} from './admin_testimonials.component';
import {AdminClientsComponent} from './admin_clients.component';

@NgModule({
    imports:[
        BrowserModule,
        adminRouting,
        FormsModule,
    ],
    declarations:[
        AdminComponent,
        LoginComponent,
        DashboardComponent,
        AdminEventsComponent,
        AdminTestimonialsComponent,
        AdminClientsComponent
    ],
    providers:[
        HTTP_PROVIDERS
    ]
})

export class AdminModule {}