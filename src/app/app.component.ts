import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  public employees=[];
  constructor(private _employeeService:EmployeeService){}
  ngOnInit(){
    this._employeeService.getEmployees()
    .subscribe(data => this.employees=data);
  }
}