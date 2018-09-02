import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserListComponent} from './user/user-list/user-list.component';
import {UserListResolve} from './user/services/userList.resolve';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {UserDetailsResolve} from './user/services/userDetails.resolve';
import {DepartmentListComponent} from './department/department-list/department-list.component';
import {DepartmentDetailsResolve} from './department/services/departmentDetails.resolve';
import {DepartmentDetailsComponent} from './department/department-details/department-details.component';
import {DepartmentListResolve} from './department/services/departmentList.resolve';

const routes: Routes = [
  {
    component: UserListComponent,
    path: 'users',
    resolve: {
      userList: UserListResolve,
    }
  },
  {
    component: UserDetailsComponent,
    path: 'users/:id',
    resolve: {
      userDetails: UserDetailsResolve,
    }
  },
  {
    component: DepartmentListComponent,
    path: 'departments',
    resolve: {
      departmentList: DepartmentListResolve,
    }
  },
  {
    component: DepartmentDetailsComponent,
    path: 'departments/:id',
    resolve: {
      departmentDetails: DepartmentDetailsResolve,
    }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
