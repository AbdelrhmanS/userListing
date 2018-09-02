import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';
import {User} from '../../user/models/user';
import {Config} from '../../app.config';

@Injectable()
export class UserService {
  defaultOptions: RequestOptions;

  constructor(private httpService: Http,
              private config: Config) {
    const headers = {
      'Content-Type': 'application/json',
    };

    this.defaultOptions = new RequestOptions({
      headers: new Headers(headers),
    });

  }

  getUserList(): Observable<User[]> {

    return this.httpService
      .get(`${this.config.baseUrl}/api/users`, this.defaultOptions)
      .map(res => res.json());
  }

  createUser(username: string): Observable<User[]> {
    return this.httpService
      .post(`${this.config.baseUrl}/api/users`, {username}, this.defaultOptions)
      .map(res => res.json());
  }

  deleteUser(userId: number): Observable<User[]> {
    return this.httpService
      .delete(`${this.config.baseUrl}/api/users/${userId}`, this.defaultOptions)
      .map(res => res.json());
  }

  getUser(userId: number): Observable<User> {
    return this.httpService
      .get(`${this.config.baseUrl}/api/users/${userId}`, this.defaultOptions)
      .map(res => res.json());
  }
}
