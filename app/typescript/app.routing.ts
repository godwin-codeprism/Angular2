import { Routes, RouterModule }   from '@angular/router';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';

const appRoutes:Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    }
];

export const appRoutingProviders:any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
