import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements  OnChanges,DoCheck, AfterContentInit {
  

  constructor(
    private render: Renderer2
  ){

  }
  
  ngAfterContentInit(): void {
    this.render.setStyle(this.eRef.nativeElement, 'color', 'blue');
  }


  @ContentChild("title", {read: ElementRef}) eRef: ElementRef | any;


  ngDoCheck(): void {
    console.log(this.userName)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(" This is Message Component.........")
    console.log(changes)
  }

  @Input() userName: string = 'User Name';

}
