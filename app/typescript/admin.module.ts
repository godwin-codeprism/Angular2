import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http'

import {adminRouting} from './admin.routing';
import {AdminComponent} from './admin.component';
import {LoginComponent} from './login.component';
import {DashboardComponent} from './dashboard.component';

@NgModule({
    imports:[
        adminRouting,
        FormsModule
    ],
    declarations:[
        AdminComponent,
        LoginComponent,
        DashboardComponent
    ],
    providers:[
        HTTP_PROVIDERS
    ]
})

export class AdminModule {}