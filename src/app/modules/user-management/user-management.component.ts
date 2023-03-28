import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  userName = 'Raju';
  constructor(
    
  ){

    console.log('1. Constructor')
  }
  ngDoCheck(): void {
    console.log('4. Ng On Do Check')
    console.log(this.userName);
  }
  ngOnInit(): void {
    console.log('3. Ng On Init')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
   console.log('2. Ng On Chanes')
  }

  ngOnDestroy(): void {
    this.userName ='';
    console.log('5. Component Destory....')
  }


  changName(){
    this.userName = 'Siva';
  }


}
