import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './my-components/employee-list/employee-list.component';
import { ResourceNotFoundComponent } from './my-components/resource-not-found/resource-not-found.component';
import { NavbarComponent } from './my-components/navbar/navbar.component';
import { FooterComponent } from './my-components/footer/footer.component';
import { CreateEmployeeComponent } from './my-components/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './my-components/edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './my-components/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ResourceNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
