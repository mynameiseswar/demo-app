import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './Student';

@Component({
  selector: 'app-studetns-list',
  templateUrl: './studetns-list.component.html',
  styleUrls: ['./studetns-list.component.scss']
})
export class StudetnsListComponent implements OnInit {

  constructor(
    private router: Router
  ){}
 
ngOnInit(): void {
      console.log("Studnets List Component is Loadded...");

    this.router.navigate(['/students-list/list']);

  // this.router.navigate(['/dashboard'])
}
  
}
