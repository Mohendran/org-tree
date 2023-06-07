import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Employee, TreeNode } from 'src/app/types';
import { EmployeeService } from '../../common/employee.service';
import { EmployeeInfoComponent } from '../employee-info/employee-info.component';

@UntilDestroy()
@Component({
  selector: 'app-org-node',
  templateUrl: './org-node.component.html',
  styleUrls: ['./org-node.component.scss']
})
export class OrgNodeComponent {

  @Input() employee!: TreeNode;

  @ViewChild('selectedEmployeeCard') selectedEmployeeCard!: ElementRef;

  constructor(public employeeService: EmployeeService, private dialog: MatDialog) {
    employeeService.selectedEmployeeId$.pipe(untilDestroyed(this)).subscribe((val) => {
      if (this.employee.ID === val) {
        this.selectedEmployeeCard.nativeElement.scrollIntoView({
          behavior: "smooth",
          inline: "center"
        });
      }
    });
  }

  showEmployeeDetails(employee: Employee) {
    this.dialog.open(EmployeeInfoComponent, {
      data: employee,
      width: '300px'
    })
  }
}
