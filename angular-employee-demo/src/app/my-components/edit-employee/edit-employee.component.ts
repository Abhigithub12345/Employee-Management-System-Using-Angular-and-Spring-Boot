import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

  //field
  emp: Employee = new Employee();
  id: any;

  // constructor
  constructor(private empService: EmployeeService, private activatedRoute:ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.empService.getEmployeeById(this.id).subscribe(data => {
      this.emp = data;
    },
    error => console.log(error));
  }

  onSubmit() {
    this.empService.updateEmployee(this.id, this.emp).subscribe(data => {
      this.router.navigate(['/employees']);
    },
    error => console.log(error));
  }



}
