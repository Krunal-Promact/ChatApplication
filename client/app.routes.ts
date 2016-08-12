import { RouterConfig, provideRouter } from '@angular/router';
import {LoginComponent} from './imports/login/login.component';
import { Meteor } from 'meteor/meteor';

const routes: RouterConfig = [
{ path: '', component:  LoginComponent},
 

];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  { provide: 'CanActivateForLoggedIn', useValue: () => !! Meteor.userId() }
];
 