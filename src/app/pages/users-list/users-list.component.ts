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


  allProducts: any;

  constructor(
    private userListService: UserListService,
    private http: HttpClient
  ) { }


  ngOnInit(): void {

    let abc = new Promise((resolve, reject) => {

      this.userListService.getAllProducts().subscribe(
        (data) => {

          resolve(data);
        }
      );
    });


    abc.then(
      (data) => {
        console.log(data);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    );






  }

  onAddProduct() {
    let newProduct = {
      "title": "Product-10000",
      "price": 10,
      "description": "A description",
      "categoryId": 118,
      "images": ["https://placeimg.com/640/480/any"]
    };

    this.userListService.addNewProduct(newProduct).subscribe(
      (createdProduct) => {
        console.log(createdProduct);
      }
    );
  }






}
