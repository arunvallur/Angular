import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Child2Component } from '../child2/child2.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) private myChild: ChildComponent;
  @ViewChild(Child2Component) private myChild2: Child2Component;
  constructor() { }
  parentvalue: number = 0
  childvalue: number = 0;
  childvalue2: number = 0;
  childtoparent: number = 0;
  child2toparent: number = 0;

  onchangeChildValue: number = 0;
  onchangeChild2Value: number = 0;
  ngOnInit(): void {
  }

  Test() {
    this.parentvalue = this.parentvalue + 1;
    console.log(this.parentvalue)
  }

  child() {
    this.childvalue = this.childvalue + 1;
    console.log("Child Value : " + this.childvalue)
    this.myChild.childeventData(this.childvalue);
  }

  child2() {
    this.childvalue2 = this.childvalue2 + 1;
    console.log("Child Value2 :" + this.childvalue2)
    this.myChild2.parentEvent(this.childvalue2)
  }

  Onchangechild() {
    this.onchangeChildValue = this.onchangeChildValue+1;
  }

  Onchangechild2() {
    this.onchangeChild2Value = this.onchangeChild2Value + 1;
  }

  ChildEventToParent() {
    this.childtoparent = this.childtoparent+1;
  }

  Child2EventToParent() {
    this.child2toparent = this.child2toparent + 1;

  }

}
