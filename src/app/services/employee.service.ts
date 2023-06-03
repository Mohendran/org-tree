import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private selectedEmployeeIdSource: Subject<number> = new Subject();

  public selectedEmployeeId$ = this.selectedEmployeeIdSource.asObservable();
  constructor() { }

  selectEmployee(Id: number) {
    this.selectedEmployeeIdSource.next(Id);
  }

}