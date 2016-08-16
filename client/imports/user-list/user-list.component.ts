import { Component, OnInit} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import template from './user-list.component.html';

@Component({
   selector: 'user-list',
   template,
   directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class UserListComponent implements OnInit
{
    users : Mongo.Cursor<any>;
    
    constructor(private redirectionRoute: Router) 
    {
       
    }

    ngOnInit()
    {
      this.users = Meteor.users.find({});
    }

    LogOut()
    {
      console.log("logging out");
      Meteor.logout();
      this.redirectionRoute.navigate(['/']);
    }
}