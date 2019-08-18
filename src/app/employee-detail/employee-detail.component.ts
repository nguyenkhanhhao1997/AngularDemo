import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'; //dùng cái này để redirect về trang khác
import { Subscription } from 'rxjs';
import { EmployeeService } from "../employee/employee.service"; 

@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html',
    providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit, OnDestroy{
    public id:number;
    public subscription:any;
    public employee: any;

    constructor(private router:Router, private activatedRoute: ActivatedRoute,private employeeService: EmployeeService) { }

    ngOnInit(){
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        })

        this.employeeService.getEmployee(this.id).subscribe(
            (response: any) => {
              this.employee = response;
            },
            error => {
              console.log("Error Api");
            })
    }

    goToEmployee() {
        //quay lại employee list
        this.router.navigate(['employee']);
    } 
    ngOnDestroy(){ // chưa hiểu chỗ này
        //this.subscription.unsubcribe();
    }
}
