import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "./employee.service"; //Có thể import provider ở app.module.ts để sử dụng chung cho toàn hệ thống

@Component({
  selector: "employee-list",
  templateUrl: "./employee.component.html",
  providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {
  public employees: any[];
  constructor(private employeeService: EmployeeService) {}
  // ngOninit bắt buộc để sử dụng oninit
  ngOnInit() {
    // dùng subscribe để bắt json trả về
    this.loadData();
  }

  loadData() {
    this.employeeService.getList().subscribe(
      (response: any) => {
        this.employees = response;
      },
      error => {
        console.log("Error Api");
      }
    );
  }

  delete(id:number) {
    let confirmDelete = confirm("Are you sure to delete?");
    if (confirmDelete)
    {
      this.employeeService.delete(id).subscribe(
        (response:any) => {
          if(response){
            alert("delete successfully!")
            this.loadData();
          }
        }
      )
    }
  }
}
