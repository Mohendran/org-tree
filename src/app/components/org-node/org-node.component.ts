import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee, NestedEmployee } from 'src/app/types/Employee';
import { EmployeeInfoComponent } from '../employee-info/employee-info.component';

@UntilDestroy()
@Component({
  selector: 'app-org-node',
  templateUrl: './org-node.component.html',
  styleUrls: ['./org-node.component.scss']
})
export class OrgNodeComponent {

  @Input() employee!: NestedEmployee;

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
