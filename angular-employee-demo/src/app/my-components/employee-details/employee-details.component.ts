import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/classes/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{

  id!: number ;
  employee!: Employee;

  constructor(private activatedRoute: ActivatedRoute, private empService:EmployeeService) { }
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.employee =  new Employee;
    this.empService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }

}
