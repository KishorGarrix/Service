import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iemployee } from './employee';
import { Observable } from 'rxjs';
/* import 'rxjs/add/oprerator/catch';
 */

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url:string="/assets/data/employee.json";
  constructor(private http:HttpClient) { }
  
  getEmployees():Observable<Iemployee[]>
  {
    return this.http.get<Iemployee[]>(this._url);
        
  }
 /*  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message||"server error")} */
    
  
}
