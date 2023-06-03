import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/types/Employee';

@Component({
    selector: 'employee-list',
    templateUrl: 'employee-list.component.html',
    styleUrls: ['employee-list.component.scss']
})

export class EmployeeListComponent {

    @Input() employees!: Employee[];

}