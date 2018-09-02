import { NgModule } from '@angular/core';
import {DepartmentListComponent} from './department-list/department-list.component';
import {DepartmentService} from './services/department.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DepartmentDetailsComponent} from './department-details/department-details.component';
import {Config} from '../app.config';
import {DepartmentListResolve} from './services/departmentList.resolve';
import {DepartmentDetailsResolve} from './services/departmentDetails.resolve';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpModule,
  ],
  declarations: [
    DepartmentListComponent,
    DepartmentDetailsComponent,
  ],
  providers: [
    DepartmentService,
    DepartmentListResolve,
    DepartmentDetailsResolve,
    Config,
  ],
})
export class DepartmentModule { }
