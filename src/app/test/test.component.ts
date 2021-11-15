import { Component, OnInit } from '@angular/core';

//3 ways for selector
//selector: 'app-test'--use       <app-test></app-test> in app.comp.html
//selector: '.app-test'         <div class="app-test"><div>   as  class
//selector: '[app-test]'           <div app-test><div>   as attribute

// instaed of templateUrl we can use template to write html in same file
//template:"<div>rahul<div>"
//template:`<div>    backtick to write multiline html
//rahul
//<div>`

// styles:`[
//   div{
//     color:red
//   }
// ]`
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
