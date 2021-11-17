import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';


// if a service see injected dependencies to another service we need injectable decorator
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // instaed of a link use this for get
  private _url:string="/assets/data/employee.json";
  constructor(private http:HttpClient) {}

  getEmployee():Observable<IEmployee[]> {
    // observable will be cast into employee array
   return this.http.get<IEmployee[]>(this._url);
  }
}
