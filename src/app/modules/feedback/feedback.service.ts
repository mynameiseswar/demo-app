import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  // private selectedUsername: string = 'Default Name';

  private selectedUsername: Subject<string> = new Subject();

  constructor(
    private http: HttpClient
  ) { }


  setUsername(name: string){
  console.log(name)
  // this.selectedUsername = name;
  this.selectedUsername.next(name)
  }

  getUsername(){
    // return this.selectedUsername;
    return this.selectedUsername.asObservable();
  }

  
}
