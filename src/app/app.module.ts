import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmpComponent } from './emp/emp.component'; // imported test comp
import { EmployeeService } from './employee.service';

// declaration array need to declare all comp which will be used in our app
@NgModule({
  declarations: [AppComponent, TestComponent, EmpComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  //to register with theinjector 
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
