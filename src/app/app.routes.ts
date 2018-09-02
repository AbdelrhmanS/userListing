import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserListComponent} from './user/user-list/user-list.component';
import {UserListResolve} from './core/services/userList.resolve';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {UserDetailsResolve} from './core/services/userDetails.resolve';

const routes: Routes = [
  // not logged routes
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
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
