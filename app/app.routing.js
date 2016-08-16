"use strict";
var router_1 = require('@angular/router');
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
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'classroom_courses/itil_foundation',
        component: itil_foundation_component_1.ItitlFoundationComponent
    },
    {
        path: 'classroom_courses/continual_service',
        component: continual_service_component_1.ContinualServiceComponent
    },
    {
        path: 'classroom_courses/service_operation',
        component: service_operation_component_1.ServiceOperationComponenet
    },
    {
        path: 'classroom_courses/service_transition',
        component: service_transition_component_1.ServiceTansitionComponent
    },
    {
        path: 'classroom_courses/service_design',
        component: service_design_component_1.ServiceDesign
    },
    {
        path: 'classroom_courses/service_strategy',
        component: service_strategy_component_1.ServiceStrategyComponent
    },
    {
        path: 'classroom_courses/soa',
        component: soa_component_1.SOAComponent
    },
    {
        path: 'classroom_courses/rcv',
        component: rcv_component_1.RCVComponent
    },
    {
        path: 'classroom_courses/ppo',
        component: ppo_component_1.PPOComponent
    },
    {
        path: 'classroom_courses/osa',
        component: osa_component_1.OSAComponent
    },
    {
        path: 'classroom_courses/malc',
        component: malc_component_1.MALCComponent
    },
    {
        path: 'classroom_courses/capm',
        component: capm_component_1.CAPMComponent
    },
    {
        path: 'classroom_courses/pmp',
        component: pmp_component_1.PMPComponent
    },
    {
        path: 'classroom_courses/acp',
        component: acp_component_1.ACPComponent
    },
    {
        path: 'classroom_courses/prince2foundation',
        component: p2f_component_1.P2FComponent
    },
    {
        path: 'classroom_courses/prince2practitioner',
        component: p2p_component_1.P2PComponent
    },
    {
        path: 'classroom_courses/prince2agile',
        component: p2a_component_1.P2AComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
