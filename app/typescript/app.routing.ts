import { Routes, RouterModule }   from '@angular/router';

import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {ItitlFoundationComponent} from './itil_foundation.component';
import {ContinualServiceComponent} from './continual_service.component';
import {ServiceOperationComponenet} from './service_operation.component';
import {ServiceTansitionComponent} from './service_transition.component';
import {ServiceDesign} from './service_design.component';
import {ServiceStrategyComponent} from './service_strategy.component';
import {SOAComponent} from './soa.component';
import {RCVComponent} from './rcv.component';
import {PPOComponent} from './ppo.component';
import {OSAComponent} from './osa.component';
import {MALCComponent} from './malc.component';
import {CAPMComponent} from './capm.component';
import {PMPComponent} from './pmp.component';
import {ACPComponent} from './acp.component';
import {P2FComponent} from './p2f.component';
import {P2PComponent} from './p2p.component';
import {P2AComponent} from './p2a.component';

const appRoutes:Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'classroom_courses/itil_foundation',
        component:ItitlFoundationComponent
    },
    {
        path:'classroom_courses/continual_service',
        component:ContinualServiceComponent
    },
    {
        path:'classroom_courses/service_operation',
        component:ServiceOperationComponenet
    },
    {
        path:'classroom_courses/service_transition',
        component:ServiceTansitionComponent
    },
    {
        path:'classroom_courses/service_design',
        component:ServiceDesign
    },
    {
        path:'classroom_courses/service_strategy',
        component:ServiceStrategyComponent
    },
    {
        path:'classroom_courses/soa',
        component:SOAComponent
    },
    {
        path:'classroom_courses/rcv',
        component:RCVComponent
    },
    {
        path:'classroom_courses/ppo',
        component:PPOComponent
    },
    {
        path:'classroom_courses/osa',
        component:OSAComponent
    },
    {
        path:'classroom_courses/malc',
        component:MALCComponent
    },
    {
        path:'classroom_courses/capm',
        component:CAPMComponent
    },
    {
        path:'classroom_courses/pmp',
        component:PMPComponent
    },
    {
        path:'classroom_courses/acp',
        component:ACPComponent
    },
    {
        path:'classroom_courses/prince2foundation',
        component:P2FComponent
    },
    {
        path:'classroom_courses/prince2practitioner',
        component:P2PComponent
    },
    {
        path:'classroom_courses/prince2agile',
        component:P2AComponent
    }
    
];

export const appRoutingProviders:any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
