"use strict";
var router_1 = require('@angular/router');
var admin_component_1 = require('./admin.component');
var login_component_1 = require('./login.component');
var dashboard_component_1 = require('./dashboard.component');
var admin_events_component_1 = require('./admin_events.component');
exports.adminRoutes = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        children: [
            {
                path: 'login',
                component: login_component_1.LoginComponent
            },
            {
                path: 'dashboard',
                component: dashboard_component_1.DashboardComponent,
                children: [
                    {
                        path: 'events',
                        component: admin_events_component_1.AdminEventsComponent
                    }
                ]
            }
        ]
    },
];
exports.adminRouting = router_1.RouterModule.forChild(exports.adminRoutes);
