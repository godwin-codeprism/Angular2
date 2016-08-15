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
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
