import { Routes, RouterModule }   from '@angular/router';

const usersRoutes:Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'users',
        loadChildren:'app/users.module#UsersModule'
    }
]

const adminRoutes:Routes = [
    {
        path:'admin',
        redirectTo:'/login',
        pathMatch:'full'
    },
    {
        path:'admin',
        loadChildren:'app/admin.module#AdminModule'
    }
]

const appRoutes:Routes = [
    ...usersRoutes,
    ...adminRoutes
];

export const appRoutingProviders:any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
