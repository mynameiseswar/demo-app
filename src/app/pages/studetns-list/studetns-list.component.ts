import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtillService } from 'src/app/utill.service';
import { Student } from './Student';

@Component({
  selector: 'app-studetns-list',
  templateUrl: './studetns-list.component.html',
  styleUrls: ['./studetns-list.component.scss']
})
export class StudetnsListComponent implements OnInit {

  constructor(
    private router: Router,
    private utillService: UtillService
  ){}
 
ngOnInit(): void {
    console.log("Studnets List Component is Loadded...");
    console.log(this.utillService.getApplicationName());
    this.router.navigate(['/students-list/list']);

  // this.router.navigate(['/dashboard'])
}
  
}
