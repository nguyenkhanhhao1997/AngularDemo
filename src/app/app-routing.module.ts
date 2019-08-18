import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DemoComponent } from "./demo/demo.component";
import { EmployeeListComponent } from "./employee/employee.component";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit.component';


const routes: Routes = [
  { path: "", component: DemoComponent },
  { path: "employee", component: EmployeeListComponent },
  { path: "employee-detail/:id", component: EmployeeDetailComponent },
  { path: "employee-edit/:id", component: EmployeeEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
