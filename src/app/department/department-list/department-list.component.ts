import { Component, OnInit } from '@angular/core';
import {Department} from '../models/department';
import {ActivatedRoute} from '@angular/router';
import {DepartmentService} from '../services/department.service';
import {User} from '../../user/models/user';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departmentList: Department[];
  constructor(private route: ActivatedRoute,
              private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentList = this.route.snapshot.data['departmentList'];
  }

  deleteDepartment(departmentId: number) {
    return this.departmentService
      .deleteDepartment(departmentId)
      .subscribe((departmentList: Department[]) => {
        this.departmentList = departmentList;
      });
  }
}
