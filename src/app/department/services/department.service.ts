import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';
import {Department} from '../models/department';
import {Config} from '../../app.config';
import {User} from '../../user/models/user';

@Injectable()
export class DepartmentService {
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

  getDepartmentList(): Observable<Department[]> {

    return this.httpService
      .get(`${this.config.baseUrl}/api/departments`, this.defaultOptions)
      .map(res => res.json());
  }

  createDepartment(departmentName: string, userId: number): Observable<User> {
    return this.httpService
      .post(`${this.config.baseUrl}/api/departments`, {departmentName, userId}, this.defaultOptions)
      .map(res => res.json());
  }

  deleteDepartment(departmentId: number): Observable<Department[]> {
    return this.httpService
      .delete(`${this.config.baseUrl}/api/departments/${departmentId}`, this.defaultOptions)
      .map(res => res.json());
  }

  getDepartment(departmentId: number): Observable<Department> {
    return this.httpService
      .get(`${this.config.baseUrl}/api/departments/${departmentId}`, this.defaultOptions)
      .map(res => res.json());
  }
}
