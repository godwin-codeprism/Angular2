import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {LoginComponent} from './login.component';
import {DashboardComponent} from './dashboard.component';
import {AdminEventsComponent} from './admin_events.component';
import {AdminTestimonialsComponent} from './admin_testimonials.component';
import {AdminClientsComponent} from './admin_clients.component';

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
                component:DashboardComponent,
                children:[
                    {
                        path:'events',
                        component:AdminEventsComponent
                    },
                    {
                        path:'testimonials',
                        component:AdminTestimonialsComponent
                    },
                    {
                        path:'clients',
                        component:AdminClientsComponent
                    },
                    {
                        path:'',
                        redirectTo:'events',
                        pathMatch:'full'
                    }
                ]
            }
        ]
    },
]

export const adminRouting = RouterModule.forChild(adminRoutes);