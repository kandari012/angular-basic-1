import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

//ngFor

@Component({
  selector: 'app-test',
  template: `
    <h2>hello rk</h2>
    <button (click)="fireEvent()">click</button>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public colors = ['red', 'blue', 'green'];
  // create ainstance of emitter class
  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  fireEvent() {
    this.childEvent.emit('hey code evolution');
  }
}
