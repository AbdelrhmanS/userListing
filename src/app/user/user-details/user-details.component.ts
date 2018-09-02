import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {ActivatedRoute} from '@angular/router';
import {DepartmentService} from '../../department/services/department.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute,
              private departmentService: DepartmentService) { }

  ngOnInit() {
    this.user = this.route.snapshot.data['userDetails'];
  }

  createDepartment(departmentName: string, userId: number) {
    return this.departmentService
      .createDepartment(departmentName, userId)
      .subscribe((user: User) => {
        this.user = user;
      });
  }
}
