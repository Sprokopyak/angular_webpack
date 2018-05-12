import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUp implements OnInit {
    public signupForm: FormGroup;

    constructor(
        public fb: FormBuilder, 
        public auth: AuthService) {
            this.signupForm = this.fb.group({
                'email': ['', [Validators.required, Validators.email]],
                'password': ['', [
                  Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                  Validators.minLength(6),
                  Validators.maxLength(25)
                  ]
                ]
            });
        }

    ngOnInit(){}

    get email() { 
        return this.signupForm.get('email') 
    }
    get password() { 
        return this.signupForm.get('password') 
    }

    signup() {
        return this.auth.emailSignUp(this.email.value, this.password.value)
    }
}