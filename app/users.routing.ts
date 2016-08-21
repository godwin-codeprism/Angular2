import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
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
import {ScrumComponent} from './scrum.component';
import {MSPComponent} from './msp.component';
import {GreenBeltComponent} from './green_belt.component';
import {BlackBeltComponent} from './black_belt.component';
import {CobitComponent} from './cobit.component';
import {TOGAFComponent} from './togaf.component';

const usersRoutes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'itil_foundation',
                component: ItitlFoundationComponent
            },
            {
                path: 'continual_service',
                component: ContinualServiceComponent
            },
            {
                path: 'service_operation',
                component: ServiceOperationComponenet
            },
            {
                path: 'service_transition',
                component: ServiceTansitionComponent
            },
            {
                path: 'service_design',
                component: ServiceDesign
            },
            {
                path: 'service_strategy',
                component: ServiceStrategyComponent
            },
            {
                path: 'soa',
                component: SOAComponent
            },
            {
                path: 'rcv',
                component: RCVComponent
            },
            {
                path: 'ppo',
                component: PPOComponent
            },
            {
                path: 'osa',
                component: OSAComponent
            },
            {
                path: 'malc',
                component: MALCComponent
            },
            {
                path: 'capm',
                component: CAPMComponent
            },
            {
                path: 'pmp',
                component: PMPComponent
            },
            {
                path: 'acp',
                component: ACPComponent
            },
            {
                path: 'prince2foundation',
                component: P2FComponent
            },
            {
                path: 'prince2practitioner',
                component: P2PComponent
            },
            {
                path: 'prince2agile',
                component: P2AComponent
            },
            {
                path: 'scrum',
                component: ScrumComponent
            },
            {
                path: 'msp',
                component: MSPComponent
            },
            {
                path: 'green_belt',
                component: GreenBeltComponent
            },
            {
                path: 'black_belt',
                component: BlackBeltComponent
            },
            {
                path: 'cobit',
                component: CobitComponent
            },
            {
                path:'togaf',
                component: TOGAFComponent
            }
        ]
    }
]

export const usersRouting = RouterModule.forChild(usersRoutes);