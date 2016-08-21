"use strict";
var router_1 = require('@angular/router');
var admin_component_1 = require('./admin.component');
var login_component_1 = require('./login.component');
var dashboard_component_1 = require('./dashboard.component');
var admin_events_component_1 = require('./admin_events.component');
var admin_testimonials_component_1 = require('./admin_testimonials.component');
var admin_clients_component_1 = require('./admin_clients.component');
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
                    },
                    {
                        path: 'testimonials',
                        component: admin_testimonials_component_1.AdminTestimonialsComponent
                    },
                    {
                        path: 'clients',
                        component: admin_clients_component_1.AdminClientsComponent
                    },
                    {
                        path: '',
                        redirectTo: 'events',
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    },
];
exports.adminRouting = router_1.RouterModule.forChild(exports.adminRoutes);
