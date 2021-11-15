import { Component, OnInit } from '@angular/core';

//event binding
//onClick($event)  gives info about the event
@Component({
  selector: 'app-test',
  template: `<h2 [ngStyle]="messageStyles">rahul kandari</h2>
    <button (click)="onClick($event)">greet</button>
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
  onClick(e) {
    console.log(e);
    this.reet = 'hello';
  }
}
