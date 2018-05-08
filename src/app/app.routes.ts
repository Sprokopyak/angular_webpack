import { RouterModule } from '@angular/router';

import { Home } from './components/home/home.component';
import { SignUp } from './components/login/sign-up/sign-up.component';
import { SignIn } from './components/login/sign-in/sign-in.component';

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
        path: '**',
        redirectTo: 'home'
    }
]);