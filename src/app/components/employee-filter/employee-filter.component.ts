import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, debounceTime, distinctUntilChanged, of, startWith, switchMap } from 'rxjs';
import { Employee, Team } from 'src/app/types/Employee';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.scss']
})
export class EmployeeFilterComponent {

  @Input() employees!: Employee[];

  public teams: Team[] = Object.values(Team);

  public filterForm: FormGroup = new FormGroup({
    search: new FormControl(''),
    selectedTeam: new FormControl('')
  });

  public filteredEmployees$: Observable<Employee[]> = of([]);

  ngOnInit() {
    const searchObservable = this.filterForm.get('search')!.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged()
    );

    const teamObservable = this.filterForm.get('selectedTeam')!.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged()
    );

    this.filteredEmployees$ = combineLatest([searchObservable, teamObservable]).pipe(
      switchMap(([searchTerm, selectedTeam]) => {
        console.log(searchTerm, selectedTeam);
        return this.filterEmployees(searchTerm, selectedTeam)
      })
    )
  }

  clearSearch(): void {
    this.filterForm.controls['search'].patchValue('');
  }


  filterEmployees(searchTerm: string, selectedTeam: string): Observable<Employee[]> {
    // Return all employees, if search is empty & selectedTeam is All Teams.
    if (searchTerm.trim() === '' && selectedTeam === '') {
      return of(this.employees);
    }

    const filteredEmployees = this.employees.filter(employee =>
      employee.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTeam === '' || employee.Team === selectedTeam)
    );

    return of(filteredEmployees);
  }

}
