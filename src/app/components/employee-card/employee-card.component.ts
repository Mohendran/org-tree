import { Component, Input } from '@angular/core';
import { EmployeeService } from '../../common/employee.service';
import { Employee } from '../../types';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {

  @Input() employee!: Employee;

  constructor(private employeeService: EmployeeService) { }

  selectEmployee(ID: number) {
    this.employeeService.selectEmployee(ID)
  }
}
