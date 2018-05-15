import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUp } from './sign-up/sign-up.component';
import { SignIn } from './sign-in/sign-in.component';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      SignUp,
      SignIn 
   ],
   exports:[SignUp, SignIn]
  })
  export class LoginModule { }