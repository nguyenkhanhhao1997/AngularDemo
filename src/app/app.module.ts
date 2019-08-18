import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';// import cái này để dùng httpclient cho toàn hệ thống

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ChildComponent } from'./child/child.component';
import { EmployeeListComponent } from'./employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit.component';

@NgModule({
  //Toàn bộ component trong web
  declarations: [
    AppComponent,
    DemoComponent,
    ChildComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent
  ],
  // khai báo các module của Angular2
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  //Module chạy đầu tiên
  bootstrap: [AppComponent]
})
export class AppModule { }
