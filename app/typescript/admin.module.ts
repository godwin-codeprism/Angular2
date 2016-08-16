import {NgModule} from '@angular/core';

import {adminRouting} from './admin.routing'
import {AdminComponent} from './admin.component';
import {LoginComponent} from './login.component';

@NgModule({
    imports:[
        adminRouting
    ],
    declarations:[
        AdminComponent,
        LoginComponent
    ]
})

export class AdminModule {}