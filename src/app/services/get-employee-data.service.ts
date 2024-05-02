import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetEmployeeDataService {
  handleError:any
  //API goes here, but for now we using json file 
  private url = 'http://localhost:3000/employeeData';

  constructor(private http: HttpClient) {}
  //Function for getting employees

  getEmployees(): Observable<any>{
    return this.http.get<any>(this.url)
  
  }
  
  upDate(emp:any): Observable<any>{
    return this.http.put(this.url,emp).pipe(
      catchError(this.handleError('upDate'))
    );
  } 
  
}
