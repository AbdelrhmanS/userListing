import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {DepartmentService} from './department.service';

@Injectable()
export class DepartmentListResolve implements Resolve<any> {
  constructor(private departmentService: DepartmentService) {}

  resolve() {
    return this.departmentService.getDepartmentList();
  }
}
