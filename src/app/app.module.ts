import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { CoreModule } from './core/core.module';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Home } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SignUp } from './login/sign-up/sign-up.component';
import { SignIn } from './login/sign-in/sign-in.component';
import { Admin } from './admin/admin.component';

@NgModule({
    declarations: [
        AppComponent,
        Home,
        NavigationComponent,
        SignUp,
        SignIn,
        Admin
    ],
    imports: [
        CommonModule, 
        BrowserModule,
        ReactiveFormsModule,
        AppRoutes,
        AngularFireModule.initializeApp(FirebaseConfig.firebase),
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor( private afs: AngularFirestore) {
        const settings = {timestampsInSnapshots: true};
        afs.firestore.settings(settings);
    }
}
