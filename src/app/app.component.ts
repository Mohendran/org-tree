import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NestedEmployee, NodeUpdatedEvent } from 'src/app/types/Employee';
import { TreeUpdateService } from './libs/hierarchy-tree/tree-update.service';
import { EmployeeApi } from './services/employee.api';
import { Employee, Team, TreeNode } from './types/Employee';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public employees: Employee[] = [];

  public hierarchyEmployeeStructure!: TreeNode;

  public selectedTeam: Team = Team.All;

  constructor(private employeeApi: EmployeeApi, private treeUpdateService: TreeUpdateService) {
    this.employeeApi.getAllEmployees().pipe(untilDestroyed(this)).subscribe(employees => {
      this.employees = employees;
      this.hierarchyEmployeeStructure = this.generateHierarchy();
      console.log(JSON.stringify(this.hierarchyEmployeeStructure));
    });

    // this.treeUpdateService.updatedTree$.pipe(untilDestroyed(this)).subscribe((updatedTree: TreeNode[]) => {
    //   this.updateHierarchyOnDragAndDrop(updatedTree);
    // });
    this.treeUpdateService.updatedTree$.pipe(untilDestroyed(this)).subscribe((nodeEvent: NodeUpdatedEvent) => {
      const updatedNode: Employee = <Employee>this.employees.find(emp => emp.ID === nodeEvent.nodeId);
      updatedNode.Manager = nodeEvent.newManager;
      this.generateTree();
      // update HierarchyEmployeeStructure
    });
  }

  generateHierarchy(): TreeNode {
    // Linking the members to their managers to form a Nested Tree
    // const employees: Employee[] = this.employees.filter((emp) => emp.Manager === 0) as Employee[];
    const employees = this.buildHierarchy(0);

    // This is a structure modified to handle the Organization Tree with a Start Node.
    // Why do we need a start Node? To make any employee the root node of the entire organization
    const tree: TreeNode = {
      ID: 0, // Denotes Start Node
      Name: '',
      Designation: '',
      Team: <Team><unknown>null,
      Manager: null,
      Members: [...employees]
    };

    return tree;
  }

  // updateHierarchyOnDragAndDrop(tree: TreeNode[]) {
  //   // this.hierarchyEmployeeStructure = tree[0];
  //   const employees: Employee[] = this.loopNestedEmployees(tree[0]);
  //   const absentEmployees = this.employees.filter(emp => {
  //     return !employees.find(e => e.ID === emp.ID);
  //   });
  //   this.employees = [...employees, ...absentEmployees];
  //   console.log(this.employees);
  // }

  // loopNestedEmployees(nestedEmployee: NestedEmployee): Employee[] {
  //   nestedEmployee.Members.forEach((member: NestedEmployee) => member.Manager = nestedEmployee.ID);
  //   const employees: Employee[] = nestedEmployee.Members.map(({ Members, ...rest }) => ({ ...rest }));
  //   const children = nestedEmployee.Members.flatMap(emp => this.loopNestedEmployees(emp))
  //   return [...employees, ...children];
  // }

  generateTree(): void {
    if (this.selectedTeam !== Team.All) {
      const hierarchy = this.generateHierarchy();
      this.hierarchyEmployeeStructure.Members = this.buildTeamHierarchy(hierarchy.Members, this.selectedTeam);
    } else {
      this.hierarchyEmployeeStructure = this.generateHierarchy();
    }
  }

  onTeamChange(selectedTeam: Team): void {
    this.selectedTeam = selectedTeam;
    this.generateTree();
  }

  buildTeamHierarchy(members: NestedEmployee[], selectedTeam: Team): NestedEmployee[] {
    const differentTeamEmployees = members.filter(emp => emp.Team !== selectedTeam);
    const sameTeamDirectEmployees = members.filter(emp => emp.Team === selectedTeam).map(emp => ({
      ...emp,
      Members: [...this.buildTeamHierarchy(emp.Members, selectedTeam)],
      IndirectManager: false
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
  buildHierarchy(managerId: number): NestedEmployee[] {
    const members: NestedEmployee[] = this.employees
      .filter((emp) => emp.Manager === managerId)
      .map((emp) => ({
        ...emp,
        Members: this.buildHierarchy(emp.ID)
      }));

    return members;
  }

}
