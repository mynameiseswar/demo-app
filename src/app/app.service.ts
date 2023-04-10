import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private userToken: string | undefined;

  constructor() { }


  setToken(token: string){
    if(token){
      this.userToken = token;
    }
  }

  getToken(){
    return this.userToken;
  }


}
