import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathOperationsPipe } from '../math-operations.pipe';



@NgModule({
  declarations: [
    MathOperationsPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MathOperationsPipe
  ]
})
export class ShareModule { }
