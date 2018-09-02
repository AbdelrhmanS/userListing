import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {DepartmentService} from './department.service';

@Injectable()
export class DepartmentDetailsResolve implements Resolve<any> {
  constructor(private departmentService: DepartmentService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.departmentService.getDepartment(route.params.id);
  }
}
