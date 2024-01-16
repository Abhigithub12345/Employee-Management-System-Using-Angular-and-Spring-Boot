import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee';

@Injectable({  // @Injectable decorator mark a class as a service.
  providedIn: 'root'
})

export class EmployeeService {

  // field
  private base_url = "http://localhost:8080/api/employees";

  // constructor
  constructor(private httpClient: HttpClient) { }

  // methods
  getAllEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.base_url}`);
  }

  addEmployee(emp: Employee): Observable<Object> {
    return this.httpClient.post(`${this.base_url}`, emp);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.base_url}/${id}`);
  }

  updateEmployee(id: number, emp: Employee): Observable<Object>{
    return this.httpClient.put(`${this.base_url}/${id}`, emp);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.base_url}/${id}`);
  }
}
