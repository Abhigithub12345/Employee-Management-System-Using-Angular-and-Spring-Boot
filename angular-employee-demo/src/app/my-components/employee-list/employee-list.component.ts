import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [
    // dummy data.
    // {
    //   "id": 101,
    //   "firstName": "Rahul",
    //   "lastName": "Devdas",
    //   "salary":45000
    // },
    // {
    //   "id": 121,
    //   "firstName": "Kartik",
    //   "lastName": "Pandit",
    //   "salary":45000
    // },
  ];

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.empService.getAllEmployeesList().subscribe(data => {
      this.employees = data;  // set data into employees
    });
  }


  updateEmp(id: any) {
    this.router.navigate(['edit-employee', id]);
  }

  deleteEmp(id: any) {
    this.empService.deleteEmployee(id).subscribe(data => {
      // console.log(data);
      this.getEmployees();
    });
  }

  empDetails(id: any) {
    this.router.navigate(['/employee-details', id]);
  }


}
