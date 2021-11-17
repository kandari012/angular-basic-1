import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

//pipes

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngFor="let emp of employee">{{ emp.age}}</h2>
    <h2>{{errorMsg}}</h2>
    
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public employee = [{ "id": 1, "name": 'rahul1', "age": 30 }];
   public errorMsg="";

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    // we will use employee service to use getemployee method 
    // method will return observable to receive data we need to subscribe to it 
    // after subscibe the emp data comes asyncronously,we assign the data to class property using arrow fxn
     this._employeeService.getEmployee().subscribe(data=>this.employee=data,
                                                   error=>this.errorMsg=error);
  }
}
