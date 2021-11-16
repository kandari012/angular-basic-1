import { Component, Input, OnInit } from '@angular/core';

//ngFor


@Component({
  selector: 'app-test',
  template: `
 
 <h2>hello {{name}}</h2>
 
    `,
  styles: [
    
  ],
})
export class TestComponent implements OnInit {
public colors=['red','blue','green'];
// to get input from parent
//@Input() public parentData:any;
// to alias the input data
@Input("parentData") public name:any;

  constructor() {}

  ngOnInit(): void {}
 
 
}
