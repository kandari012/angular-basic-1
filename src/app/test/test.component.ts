import { Component, OnInit } from '@angular/core';

//class binding
//<h2 class="text-success">rahul kandari</h2>
//<h2 [class]="successClass">rahul kandari</h2>
//<h2 [class.text-danger]="hasError">rahul kandari</h2>
//
@Component({
  selector: 'app-test',
  template: `<h2 [ngClass]="messageClasses">rahul kandari</h2>`,
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
  public hasError = true;
  public isSpecial = false;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  constructor() {}

  ngOnInit(): void {}
  greet() {
    return 'hello Mr. ' + this.name;
  }
}
