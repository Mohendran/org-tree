import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, mapTo, of, switchMap, throwError, timer } from 'rxjs';
import { employees } from '../mock/employee-list';
import { Employee } from '../types/Employee';

@Injectable({ providedIn: 'root' })
export class EmployeeApi {
  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    // Using Mock Data here and using timer as a way to mimic an API Call.
    return of(employees).pipe(
      switchMap(data => timer(3000).pipe(mapTo(data))),
      catchError(error => {
        if (error.name === 'TimeoutError') {
          return throwError('Request timed out');
        }
        return throwError(error);
      })
    );
  }


}