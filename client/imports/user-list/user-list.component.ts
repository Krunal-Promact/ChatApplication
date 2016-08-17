import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { Location } from '@angular/common';

import template from './user-list.component.html';
import { LogoutComponent } from '../logout/logout.component';

@Component({
   selector: 'user-list',
   template,
   directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES, LogoutComponent]
})

export class UserListComponent implements OnInit
{
    users : Mongo.Cursor<any>;
    currentUser: any;
    
    constructor(private redirectionRoute: Router, private location: Location) 
    {

    }

    ngOnInit()
    {
      this.users = Meteor.users.find({});
      this.currentUser = Meteor.user().username;
      
      //this.location.replaceState('/');
    }

    // LogOut()
    // {
    //   console.log("logging out");
    //   Meteor.logout();
    //   alert('You have been successfully logged out.');
    //   this.redirectionRoute.navigate(['/']);
    // }
}