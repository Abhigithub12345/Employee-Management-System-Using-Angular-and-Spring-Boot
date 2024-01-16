import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //field
  emp: Employee = new Employee;

  constructor(private empService: EmployeeService, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // console.log(this.emp);

    this.empService.addEmployee(this.emp).subscribe(data => {
      // console.log(data);
      this.route.navigate(['/employees']);
    },
    error => console.log(error));

  }

  
  
}

