import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EmployeeApi } from './services/employee.api';
import { Employee, NestedEmployee, Team, TreeNode } from './types/Employee';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public employees: Employee[] = [];

  public hierarchyEmployeeStructure!: TreeNode;

  constructor(private employeeApi: EmployeeApi) {
    this.employeeApi.getAllEmployees().pipe(untilDestroyed(this)).subscribe(employees => {
      this.employees = employees;
      this.hierarchyEmployeeStructure = this.generateHierarchy();
    });
  }

  generateHierarchy(): TreeNode {
    // Linking the members to their managers to form a Nested Tree
    const employee: any = this.employees.find((emp) => emp.Manager === null) as Employee;
    employee.Members = this.buildHierarchy(employee.ID);

    // This is a structure modified to handle the Organization Tree with a Start Node.
    // Why do we need a start Node? To make any employee the root node of the entire organization
    const tree = {
      ID: 0, // Denotes Start Node
      Name: '',
      Designation: '',
      Team: Team.All,
      Manager: null,
      Members: [{ ...employee }]
    };

    return tree;
  }

  onTeamChange(selectedTeam: Team): void {
    if (selectedTeam !== Team.All) {
      const hierarchy = this.generateHierarchy();
      this.hierarchyEmployeeStructure.Members = this.buildTeamHierarchy(hierarchy.Members, selectedTeam);
    } else {
      this.hierarchyEmployeeStructure = this.generateHierarchy();
    }
  }

  buildTeamHierarchy(members: NestedEmployee[], selectedTeam: Team): NestedEmployee[] {

    const differentTeamEmployees = members.filter(emp => emp.Team !== selectedTeam);
    const sameTeamDirectEmployees = members.filter(emp => emp.Team === selectedTeam).map(emp => ({
      ...emp,
      Members: [...this.buildTeamHierarchy(emp.Members, selectedTeam)]
    }));

    // I'm recursively moving the members who have a manager of a different team up the hierarchy and removing the employees of different teams.
    const indirectEmployees = differentTeamEmployees
      .flatMap(emp => [...this.buildTeamHierarchy(emp.Members, selectedTeam)])
      .map(emp => ({
        ...emp,
        IndirectManager: true
      }))

    return [...sameTeamDirectEmployees, ...indirectEmployees];
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
