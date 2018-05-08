import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Home } from './components/home/home.component';
import { SignUp } from './components/login/sign-up/sign-up.component';
import { SignIn } from './components/login/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    SignUp,
    SignIn
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
