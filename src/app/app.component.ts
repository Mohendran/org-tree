import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EmployeeApi } from './common/employee.api';
import { TreeUpdateService } from './libs/hierarchy-tree/tree-update.service';
import { Employee, NodeUpdatedEvent, Team } from './types';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public employees: Employee[] = [];

  public loading: boolean;

  public selectedTeam: Team = Team.All;

  public opened: boolean = true;

  constructor(private employeeApi: EmployeeApi, private treeUpdateService: TreeUpdateService) {
    this.loading = true;

    // Loading the Default Tree.
    this.employeeApi.getAllEmployees().pipe(untilDestroyed(this)).subscribe((employees: Employee[]) => {
      this.employees = employees;
      this.loading = false;
    }, () => {
      this.loading = false;
    });

    // Triggered whenever a drag and drop event is completed.
    this.treeUpdateService.updatedTree$.pipe(untilDestroyed(this)).subscribe((nodeEvent: NodeUpdatedEvent) => {
      const updatedNode: Employee = <Employee>this.employees.find(emp => emp.ID === nodeEvent.nodeId);
      updatedNode.Manager = nodeEvent.newManager;
      // Triggering Change Detection in Angular
      this.employees = [...this.employees];
    });
  }
}
