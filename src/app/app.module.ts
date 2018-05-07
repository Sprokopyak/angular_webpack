import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { CoreModule } from './core/core.module';
import { AngularFirestore } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { Home } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignUp } from './components/login/sign-up/sign-up.component';
import { SignIn } from './components/login/sign-in/sign-in.component';

@NgModule({
    declarations: [
        AppComponent,
        Home,
        NavigationComponent,
        SignUp,
        SignIn
    ],
    imports: [
        CommonModule, 
        BrowserModule,
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
