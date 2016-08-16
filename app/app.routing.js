"use strict";
var router_1 = require('@angular/router');
var usersRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'users',
        loadChildren: 'app/users.module#UsersModule'
    }
];
var adminRoutes = [
    {
        path: 'admin',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin.module#AdminModule'
    }
];
var appRoutes = usersRoutes.concat(adminRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
