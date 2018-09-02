import { NgModule } from '@angular/core';
import {UserListComponent} from './user-list/user-list.component';
import {UserService} from './services/user.service';
import {BrowserModule} from '@angular/platform-browser';
import {UserListResolve} from './services/userList.resolve';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserDetailsResolve} from './services/userDetails.resolve';
import {Config} from '../app.config';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpModule,
  ],
  declarations: [
    UserListComponent,
    UserDetailsComponent,
  ],
  providers: [
    UserService,
    UserListResolve,
    UserDetailsResolve,
    Config,
  ],
})
export class UserModule { }
