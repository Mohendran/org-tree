import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/types';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public employee: Employee,
  ) { }

}
