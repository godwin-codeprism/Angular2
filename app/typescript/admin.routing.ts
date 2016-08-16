import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {LoginComponent} from './login.component';

export const adminRoutes:Routes = [
    {
        path:'',
        component:AdminComponent,
        children:[
            {
                path:'login',
                component:LoginComponent
            }
        ]
    }
]

export const adminRouting = RouterModule.forChild(adminRoutes);