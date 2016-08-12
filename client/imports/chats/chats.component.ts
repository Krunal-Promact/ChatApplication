import { Component } from '@angular/core';
import { Mongo } from 'meteor/mongo';
 import { ROUTER_DIRECTIVES } from '@angular/router';
import { ReactiveVar } from 'meteor/reactive-var';
import { MeteorComponent } from 'angular2-meteor';
import { LoginButtons } from 'angular2-meteor-accounts-ui';

 
import { Chat,Message }   from '../../../both/collections/chats.collection';
import { Chats,Messages } from '../../../both/interfaces/chats.interface';

import { Users }   from '../../../both/collections/chats.collection';

 
import template from './chats.component.html';
 
@Component({
  selector: 'chats',
  template,

  directives: [ ROUTER_DIRECTIVES, LoginButtons]
})
export class ChatComponent  {
     chats: Mongo.Cursor<Chats>;
     users:Mongo.Cursor<any>;
  constructor() {
    this.chats = Chat.find();
    this.users=Users.find();
  }
}