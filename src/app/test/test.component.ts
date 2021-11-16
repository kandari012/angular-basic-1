import { Component, OnInit } from '@angular/core';

//event binding
//template reference variable to pass dom(view) info to class
@Component({
  selector: 'app-test',
  template: `<h2 [ngStyle]="messageStyles">rahul kandari</h2>
    <input #myInput type="text" />
    <button (click)="onClick(myInput.value)">greet</button>
    {{ reet }}`,
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
  public name = 'rahul kandari';
  public successClass = 'text-success';
  public hasError = false;
  public reet = '';
  public c = 'yellow';
  public messageStyles = {
    color: 'red',
    fontStyle: 'italic',
  };

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
