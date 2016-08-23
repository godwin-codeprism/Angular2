"use strict";
var router_1 = require('@angular/router');
var users_component_1 = require('./users.component');
var home_component_1 = require('./home.component');
var about_component_1 = require('./about.component');
var itil_foundation_component_1 = require('./itil_foundation.component');
var continual_service_component_1 = require('./continual_service.component');
var service_operation_component_1 = require('./service_operation.component');
var service_transition_component_1 = require('./service_transition.component');
var service_design_component_1 = require('./service_design.component');
var service_strategy_component_1 = require('./service_strategy.component');
var soa_component_1 = require('./soa.component');
var rcv_component_1 = require('./rcv.component');
var ppo_component_1 = require('./ppo.component');
var osa_component_1 = require('./osa.component');
var malc_component_1 = require('./malc.component');
var capm_component_1 = require('./capm.component');
var pmp_component_1 = require('./pmp.component');
var acp_component_1 = require('./acp.component');
var p2f_component_1 = require('./p2f.component');
var p2p_component_1 = require('./p2p.component');
var p2a_component_1 = require('./p2a.component');
var scrum_component_1 = require('./scrum.component');
var msp_component_1 = require('./msp.component');
var green_belt_component_1 = require('./green_belt.component');
var black_belt_component_1 = require('./black_belt.component');
var cobit_component_1 = require('./cobit.component');
var togaf_component_1 = require('./togaf.component');
var upcoming_events_component_1 = require('./upcoming.events.component');
var services_component_1 = require('./services.component');
var usersRoutes = [
    {
        path: '',
        component: users_component_1.UsersComponent,
        children: [
            {
                path: 'home',
                component: home_component_1.HomeComponent
            },
            {
                path: 'about',
                component: about_component_1.AboutComponent
            },
            {
                path: 'itil_foundation',
                component: itil_foundation_component_1.ItitlFoundationComponent
            },
            {
                path: 'continual_service',
                component: continual_service_component_1.ContinualServiceComponent
            },
            {
                path: 'service_operation',
                component: service_operation_component_1.ServiceOperationComponenet
            },
            {
                path: 'service_transition',
                component: service_transition_component_1.ServiceTansitionComponent
            },
            {
                path: 'service_design',
                component: service_design_component_1.ServiceDesign
            },
            {
                path: 'service_strategy',
                component: service_strategy_component_1.ServiceStrategyComponent
            },
            {
                path: 'soa',
                component: soa_component_1.SOAComponent
            },
            {
                path: 'rcv',
                component: rcv_component_1.RCVComponent
            },
            {
                path: 'ppo',
                component: ppo_component_1.PPOComponent
            },
            {
                path: 'osa',
                component: osa_component_1.OSAComponent
            },
            {
                path: 'malc',
                component: malc_component_1.MALCComponent
            },
            {
                path: 'capm',
                component: capm_component_1.CAPMComponent
            },
            {
                path: 'pmp',
                component: pmp_component_1.PMPComponent
            },
            {
                path: 'acp',
                component: acp_component_1.ACPComponent
            },
            {
                path: 'prince2foundation',
                component: p2f_component_1.P2FComponent
            },
            {
                path: 'prince2practitioner',
                component: p2p_component_1.P2PComponent
            },
            {
                path: 'prince2agile',
                component: p2a_component_1.P2AComponent
            },
            {
                path: 'scrum',
                component: scrum_component_1.ScrumComponent
            },
            {
                path: 'msp',
                component: msp_component_1.MSPComponent
            },
            {
                path: 'green_belt',
                component: green_belt_component_1.GreenBeltComponent
            },
            {
                path: 'black_belt',
                component: black_belt_component_1.BlackBeltComponent
            },
            {
                path: 'cobit',
                component: cobit_component_1.CobitComponent
            },
            {
                path: 'togaf',
                component: togaf_component_1.TOGAFComponent
            },
            {
                path: 'upcoming_events',
                component: upcoming_events_component_1.UpcomingEventsComponent
            },
            {
                path: 'services',
                component: services_component_1.ServicesComponent
            }
        ]
    }
];
exports.usersRouting = router_1.RouterModule.forChild(usersRoutes);
