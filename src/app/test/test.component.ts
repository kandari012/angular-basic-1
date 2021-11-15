import { Component, OnInit } from '@angular/core';

//style binding
//<h2 [style.color]="'orange'">rahul kandari</h2>
//<h2 [style.color]="hasError?'orange':'blue'">rahul kandari</h2>
@Component({
  selector: 'app-test',
  template: `<h2 [ngStyle]="messageStyles">rahul kandari</h2>`,
  styles: [
    `
      .text-success {
        color: green;
      },
      .text-danger {
        color: white;
      },
      .text-special {
        color: blue;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'rahul kandari';
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = false;
  public c="yellow";
  public messageStyles = {
    color: "red",
    fontStyle: "italic",
    
  };

  constructor() {}

  ngOnInit(): void {}
  greet() {
    return 'hello Mr. ' + this.name;
  }
}
