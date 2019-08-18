import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component' //import component con để tham chiếu dữ liệu

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2-Demo';

  public agree:number = 0;
  public disAgree:number = 0;
  public names = ["MrA", "MrB", "MrC"]

  // Khai báo component con
  @ViewChild(ChildComponent, {static: false}) private childComponent: ChildComponent

  parentVote(agree:boolean) {
    if(agree) this.agree++;
    else this.disAgree++;
  }

  changeName() {

    this.childComponent.setName('Hello world!')
  }
}
