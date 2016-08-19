import { Component ,OnInit} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Chats, ChatBetweenUsers }   from '../../../both/collections/chats.collection';
import { Chat, ChatBetween } from '../../../both/interfaces/messages.interface';
import { LogoutComponent } from '../logout/logout.component';
import template from './user-detail.component.html';

@Component({
   selector: 'user-list',
   template,
   directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES, LogoutComponent]
})

export class UserDetailComponent implements OnInit
{
    user : any;
    id:any;
    fromid:any;
    toid:any;
    chats: Mongo.Cursor<Chat>;
    messagesendform: FormGroup;
    currentUser: any;
    currentUserId: any;
    notToShow:any;
    constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) 
    {
    }

    ngOnInit()
    {
         this.id = this.activatedRoute.params.subscribe(params =>
         {
            this.id = this.activatedRoute.snapshot.params['id'];
            this.user = Meteor.users.findOne({_id: this.id}).username;
            this.currentUser = Meteor.user().username;
            this.currentUserId = Meteor.userId();

            this.notToShow=Meteor.users.findOne({_id:this.id})._id;
            this.fromid = Meteor.user()._id;
            this.toid = Meteor.users.findOne({_id: this.id})._id;
            console.log(this.user);
         });
        //Apply query for particular FromUser and ToUser
         this.chats = Chats.find({}, {sort: { date: 1 }} );                 
         this.messagesendform = this.formBuilder.group({
           messages: []
         });
    }

    cancelUser() {
        this.messagesendform.controls['messages']['updateValue']('');
    }

    sendMessage(){
      if(this.messagesendform.valid)
      {
        var message = this.messagesendform.controls['messages'].value;
        console.log("Sent");
        Chats.insert({messages: message, date: new Date(), read: true, chatBetween:{from: this.fromid, to: this.toid}});
        this.cancelUser();
      }
    } 
}
 
 


