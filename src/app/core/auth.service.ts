import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { User } from './user';

@Injectable()
export class AuthService {
    user: Observable<User>;

    constructor(public afAuth: AngularFireAuth,
                public afs: AngularFirestore,
                private router: Router) {         

            this.user = this.afAuth.authState
                .switchMap(user => {
                if (user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
                } else {
                    return Observable.of(null)
                }
            })
    }

    emailSignUp(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
            return this.setUserDoc(user) // create initial user document
        }).then(() => { this.router.navigate(['/home']) })
        .catch(error => console.log(error));
    }
    
    // Update properties on the user document
    updateUser(user: User, data: any) { 
        return this.afs.doc(`users/${user.uid}`).update(data)
    }
    
    // Sets user data to firestore after succesful login
    private setUserDoc(user:any) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
        const data: User = {
            uid: user.uid,
            email: user.email || null,
            displayName: user.displayName,
            photoURL: 'https://goo.gl/Fz9nrQ'
        }
        return userRef.set(data, { merge: true })
    }

    emailLogin(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            this.router.navigate(['/home']);
        })
        .catch(error => console.log(error));
    }
    
    resetPassword(email: string) {
        const fbAuth = firebase.auth();
        return fbAuth.sendPasswordResetEmail(email)
        // .then(() => this.notify.update('Password update email sent', 'info'))
        .catch(error => console.log(error));
    }

    signOut() {
        this.afAuth.auth.signOut()
        .then(() => { this.router.navigate(['/home'])});
    }

    googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider()
        return this.oAuthLogin(provider)
        .then(() => { this.router.navigate(['/home'])});
    }

    private oAuthLogin(provider:any) {
        return this.afAuth.auth.signInWithPopup(provider)
        .then((credential) => {
            this.setUserDoc(credential.user)
        })
    }
}