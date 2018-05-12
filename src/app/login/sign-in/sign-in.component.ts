import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignIn implements OnInit {
    public signinForm: FormGroup;
    public resetPass: FormGroup;
    showResetPassword: boolean = false;

    constructor(
        public fb: FormBuilder, 
        public auth: AuthService) {
            this.signinForm = this.fb.group({
                'email': ['', [Validators.required, Validators.email]],
                'password': ['', [
                  Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                  Validators.minLength(6),
                  Validators.maxLength(25)
                  ]
                ]
            });
            this.resetPass = this.fb.group({
                'email': ['', [Validators.required, Validators.email]]
            })
        }

    ngOnInit(){}

    get email() { 
        return this.signinForm.get('email') 
    }
    get password() { 
        return this.signinForm.get('password') 
    }

    signin() {
        return this.auth.emailLogin(this.email.value, this.password.value)
    }

    get resetEmail() { 
        return this.resetPass.get('email') 
    }

    reset() {
        console.log(this.resetEmail.value)
        return this.auth.resetPassword(this.resetEmail.value)
    }
}