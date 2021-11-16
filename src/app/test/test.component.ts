import { Component, OnInit } from '@angular/core';

//ngFor


@Component({
  selector: 'app-test',
  template: `
 <div *ngFor="let color of colors; first as f;index as i;last as l;odd as o;even as e">
 <h2>{{i}}{{f}}{{color}}</h2>
 </div>
    `,
  styles: [
    
  ],
})
export class TestComponent implements OnInit {
public colors=['red','blue','green'];
  

  constructor() {}

  ngOnInit(): void {}
 
 
}
