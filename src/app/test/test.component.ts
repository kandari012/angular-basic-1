import { Component, OnInit } from '@angular/core';
//property binding as we cant use boolean value in template
//bind-disabled="isdisabled"    another way of prop binding
@Component({
  selector: 'app-test',
  template: `<input [disabled]="isdisabled" type="text" value="rahul" />`,
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = 'rahul kandari';
  public isdisabled = false;
  constructor() {}

  ngOnInit(): void {}
  greet() {
    return 'hello Mr. ' + this.name;
  }
}
