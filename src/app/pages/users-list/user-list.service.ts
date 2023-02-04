import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  API_ENDPORINT = 'https://dummyjson.com';
  constructor(
    private http: HttpClient
  ) { }

  findSum(x: number, y: number) {
    return x + y;
  }

  getAllUsers() {
    return this.http.get(`${this.API_ENDPORINT}/users`);
  }

  getSingleuser(userId: number) {
    return this.http.get(`${this.API_ENDPORINT}/users/${userId}`)
  }

  createNewUser() {
    let userObject = JSON.stringify({
      firstName: 'Rjau',
      lastName: 'G',
      age: 18
    });

    return this.http.post(`${this.API_ENDPORINT}/users/add`, userObject);

  }
}
