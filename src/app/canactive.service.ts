import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class CanactiveService implements CanActivate {
  userAuth = false;
  constructor(
    private appService: AppService
  ) { }
  canActivate(

    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      console.log(route);
      console.log(state);
      // User validte 
     
      // if(window.sessionStorage.getItem('token') !== null){
      //   this.userAuth = true;
      // }

      if(this.appService.getToken() !== undefined){
        this.userAuth = true;
      }
    return this.userAuth;
  }
}
