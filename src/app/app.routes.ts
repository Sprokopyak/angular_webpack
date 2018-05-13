import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/home.component';
import { SignUp } from './login/sign-up/sign-up.component';
import { SignIn } from './login/sign-in/sign-in.component';
import { Admin } from './admin/admin.component';

import { AdminGuard } from './core/admin-guard/admin.guard';

export const AppRoutes = RouterModule.forRoot([
    {
        path: 'home',
        component: Home
    },{
        path: 'sign-up',
        component: SignUp
    },{
        path: 'sign-in',
        component: SignIn
    },{
        path: 'admin',
        component: Admin,
        canActivate: [AdminGuard] 
    },{
        path: '**',
        redirectTo: 'home'
    }
]);