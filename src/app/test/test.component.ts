import { Component, OnInit } from '@angular/core';
//interpolation  to bind data from class to template
//{{2+2}},name.lenght,name.uppercase(),name.greetuser
@Component({
  selector: 'app-test',
  template: `<h2>{{ greet() }}</h2>`,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = 'rahul kandari';
  constructor() {}

  ngOnInit(): void {}
  greet() {
    return 'hello Mr. ' + this.name;
  }
}
