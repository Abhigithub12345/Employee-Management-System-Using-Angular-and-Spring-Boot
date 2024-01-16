import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './my-components/employee-list/employee-list.component';
import { ResourceNotFoundComponent } from './my-components/resource-not-found/resource-not-found.component';
import { CreateEmployeeComponent } from './my-components/create-employee/create-employee.component';
import { EditEmployeeComponent } from './my-components/edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './my-components/employee-details/employee-details.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: '**', component: ResourceNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
