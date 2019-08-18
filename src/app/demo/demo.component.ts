import {Component} from '@angular/core';

@Component({
    selector:'my-demo',
    templateUrl:'./demo.component.html',
    // style chỉ áp với component được khai báo, nếu không khai báo thì áp dụng theo file css được nhúng vào header
    styleUrls:['./demo.component.css']
})

//import class vào chỗ app.module.ts
export class DemoComponent {
    public title = 'Angular2 WebApp'

    public inputText = 'Welcome to Sanhok'

    public applyBlue = true

    public blueColor = false

    public showHello = true;

    public thisIs = 'bike';

    public colors: string[] = ["red","green","blue"]

    public rText = true;

    public bBlack = true;

    onClick(value){
        console.log(value)
    }

    toggleText(){
        this.rText = !this.rText
        this.bBlack = !this.bBlack
    }
}
