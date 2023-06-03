import { Component } from '@angular/core';
import { EmployeeApi } from './services/employee.api';
import { Employee, Team, TreeNode } from './types/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public employees: Employee[] = [];

  public hierarchyEmployeeStructure!: TreeNode;

  constructor(private employeeApi: EmployeeApi) {
    this.employeeApi.getAllEmployees().subscribe(employees => {
      this.employees = employees;

      // Linking the members to their managers to form a Nested Tree
      const employee: any = this.employees.find((emp) => emp.Manager === null) as Employee;
      employee.Members = this.buildHierarchy(employee.ID);

      // This is a structure modified to handle the Organization Tree with a Start Node.
      // Why do we need a start Node? To make any employee the root node of the entire organization
      this.hierarchyEmployeeStructure = {
        ID: 0, // Denotes Start Node
        Name: '',
        Designation: '',
        Team: Team.BackEnd,
        Manager: null,
        Members: [{ ...employee }]
      };
    });
  }

  // Identify the managers and link the employees with their managers as a Nested Object.
  buildHierarchy(managerId: number): Employee[] {
    const members: Employee[] = this.employees
      .filter((emp) => emp.Manager === managerId)
      .map((emp) => ({
        ...emp,
        Members: this.buildHierarchy(emp.ID)
      }));

    return members;
  }

}
