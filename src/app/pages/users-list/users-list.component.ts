import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';

export interface Users {
  limit: number;
  skip: number;
  total: number;
  users: Array<any>;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: any = [];

  userDetails: any;

  constructor(
    private userListService: UserListService,
    private http: HttpClient
  ) {
    /* this.http.get('https://dummyjson.com/users').subscribe(
      (data: any): void => {
        console.log(data);
        this.usersList = data.users;
      }
    ); */
    this.userListService.getAllUsers().subscribe(
      (data: any) => {
        this.usersList = data.users;
      }
    );


  }


  ngOnInit(): void {
    //  console.log(this.userListService.getAllUsers())

    this.userListService.createNewUser().subscribe(
      (createdUser) => {
        console.log(createdUser);
      }
    );
  }

  onUserButtonClick(selectedUser: any) {

    this.userListService.getSingleuser(selectedUser.id).subscribe(
      (userInfo: any) => {
        this.userDetails = userInfo;
      }
    );
  }

}
