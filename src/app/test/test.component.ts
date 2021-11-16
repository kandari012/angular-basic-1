import { Component, OnInit } from '@angular/core';

//ngIf
//<h2 *ngIf="displayName; else el" >rahul kandari</h2>
//<ng-template #el>
//<h2 >name is hidden</h2>
//</ng-template >

@Component({
  selector: 'app-test',
  template: `
  <div *ngIf="displayName; then thenBlock;else elseBlock"></div>
  <ng-template #thenBlock>
  <h2 >rahul k</h2>
  </ng-template >

  <ng-template #elseBlock>
  <h2 >name is hidden</h2>
  </ng-template >
    `,
  styles: [
    
  ],
})
export class TestComponent implements OnInit {
public displayName=false;
  

  constructor() {}

  ngOnInit(): void {}
 
 
}
