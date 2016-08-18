import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {LoginComponent} from './login.component';
import {DashboardComponent} from './dashboard.component';

export const adminRoutes:Routes = [
    {
        path:'',
        component:AdminComponent,
        children:[
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'dashboard',
                component:DashboardComponent
            }
        ]
    }
]

export const adminRouting = RouterModule.forChild(adminRoutes);