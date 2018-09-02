import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[];
  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.userList = this.route.snapshot.data['userList'];
  }

  deleteUser(userId: number) {
    return this.userService
      .deleteUser(userId)
      .subscribe((userList: User[]) => {
        this.userList = userList;
      });
  }

  createUser(username: string) {
    return this.userService
      .createUser(username)
      .subscribe((userList: User[]) => {
        this.userList = userList;
      });
  }
}
