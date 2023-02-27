import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IUserLogin {
  username: string | null;
  password: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  userLogin(payload: IUserLogin | any) {
    return this.http.post('https://fakestoreapi.com/auth/login', payload);
  }
}
