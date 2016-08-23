import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';

import {usersRouting} from './users.routing';
import {UsersComponent} from './users.component'
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
import {UpcomingEventsComponent} from './upcoming.events.component';
import {ServicesComponent} from './services.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        usersRouting
    ],
    declarations:[
        UsersComponent,
        HomeComponent, 
        AboutComponent, 
        ItitlFoundationComponent, 
        ContinualServiceComponent, 
        ServiceOperationComponenet,
        ServiceTansitionComponent,
        ServiceDesign,
        ServiceStrategyComponent,
        SOAComponent,
        RCVComponent,
        PPOComponent,
        OSAComponent,
        MALCComponent,
        CAPMComponent,
        PMPComponent,
        ACPComponent,
        P2FComponent,
        P2PComponent,
        P2AComponent,
        ScrumComponent,
        MSPComponent,
        GreenBeltComponent,
        BlackBeltComponent,
        CobitComponent,
        TOGAFComponent,
        UpcomingEventsComponent,
        ServicesComponent
    ]
})
export class UsersModule {}