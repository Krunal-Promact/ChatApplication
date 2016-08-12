import { Component, OnInit} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../../../both/interfaces/login.interface';
import { Meteor } from 'meteor/meteor';
import template from './login.component.html';

@Component({
    selector: 'login-form',
    template,
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LoginComponent implements OnInit {
    addForm: FormGroup;
    login: Login;
    constructor(private formBuilder: FormBuilder) {
        this.login = new Login();
    }

    ngOnInit() {

    }
    cancelUser() {
        this.login.email = '';
        this.login.password = '';
    }

}