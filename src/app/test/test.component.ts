import { Component, OnInit } from '@angular/core';

//two way binding for form input
//view to class ,class to view
@Component({
  selector: 'app-test',
  template: `<h2 >rahul kandari</h2>
    <input [(ngModel)]="name" type="text" />
    
    {{ name }}`,
  styles: [
    `
      .text-success {
        color: green;
      }
      ,
      .text-danger {
        color: white;
      }
      ,
      .text-special {
        color: blue;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = '';
  public successClass = 'text-success';
  public hasError = false;
  public reet = '';
  public c = 'yellow';
  

  constructor() {}

  ngOnInit(): void {}
  greet() {
    return 'hello Mr. ' + this.name;
  }
  // will take any type of input
  onClick(value: any) {
    console.log(value);
  }
}
