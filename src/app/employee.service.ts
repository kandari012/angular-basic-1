import { Injectable } from '@angular/core';

// if a service see injected dependencies to another service we need injectable decorator
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployee() {
    return [
      { "id": 1, "name": 'rahul1', "age": 30 },
      { "id": 2, "name": 'rahul2', "age": 20 },
      { "id": 3, "name": 'rahul3', "age": 10 },
    ];
  }
}
