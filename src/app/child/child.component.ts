import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-component',
    templateUrl: './child.component.html'
})
export class ChildComponent{
    @Input() childInput:string; //biến nhận vào từ component cha
    @Output() onVote = new EventEmitter<boolean>(); // biến xuất ra component cha

    public vote:boolean = false

    voted(agree:boolean) {
        this.vote = agree;
        this.onVote.emit(agree) //xuất biến ra component cha
    }

    setName(name:string) {
        this.childInput = name
    }
}
