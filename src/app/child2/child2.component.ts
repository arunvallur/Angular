import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input() changeValue1 : any;
  ChangeValueEvent: number =0;
  parentEventValue: number = 0;
  valuefromchild: number= 0;
  @Output() childevent2 = new EventEmitter<any>();
  constructor(private eventEmit: EventServiceService) { }

  ngOnInit(): void {
    this.eventEmit.getchild2().subscribe((value)=>{
      this.valuefromchild = this.valuefromchild + value
    })
  }

  parentEvent(value: number) {
    this.parentEventValue = this.parentEventValue + value;
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.changeValue1.currentValue){
      this.ChangeValueEvent = changes.changeValue1.currentValue;
    }
  }

  Eventtochild() {
    this.eventEmit.setchild(1)
  }

  ClickEventToParent() {
    this.childevent2.emit();
  }

}
