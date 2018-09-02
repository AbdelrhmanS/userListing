import { Component, OnInit } from '@angular/core';
import {Department} from '../models/department';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  department: Department;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.department = this.route.snapshot.data['departmentDetails'];
  }
}
