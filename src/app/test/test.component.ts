import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

//pipes

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngFor="let emp of employee">{{ emp.id}}</h2>
    
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public employee = [{ "id": 1, "name": 'rahul1', "age": 30 }];
   

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    
    this.employee = this._employeeService.getEmployee();
  }
}
