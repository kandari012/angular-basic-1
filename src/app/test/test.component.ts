import { Component, OnInit } from '@angular/core';

//ngSwitch


@Component({
  selector: 'app-test',
  template: `
 <div [ngSwitch]="color">
 <div *ngSwitchCase="'red'">you picked red color</div>
 <div *ngSwitchCase="'blue'">you picked blue color</div>
 <div *ngSwitchCase="'green'">you picked green color</div>
 <div *ngSwitchDefault>pick again</div>
 </div>
    `,
  styles: [
    
  ],
})
export class TestComponent implements OnInit {
public color="x";
  

  constructor() {}

  ngOnInit(): void {}
 
 
}
