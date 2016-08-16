import { Component, OnInit} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { UserCredentials } from '../../../both/interfaces/userCredentials.interface';
import { Meteor } from 'meteor/meteor';
import template from './login.component.html';

@Component({
    selector: 'login-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    error: any;

    constructor(private formBuilder: FormBuilder, private redirectionRoute: Router) {
        this.loginForm = this.formBuilder.group({
            emailAddress: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {

    }

    cancelUser() {
        this.loginForm.controls['emailAddress']['updateValue']('');
        this.loginForm.controls['password']['updateValue']('');
    }

    loginUser() {
        if (this.loginForm.valid) {
            var email = this.loginForm.controls['emailAddress'].value;
            var password = this.loginForm.controls['password'].value;
            var isAuthentic = true;

            Meteor.loginWithPassword(email, password, (error) => {
                if (error) 
                {
                    this.cancelUser();
                    console.log(error.reason);
                    alert(error.reason);
                }
                else 
                {
                    this.redirectionRoute.navigate(['/users']);
                }
            });
        }
    }
}