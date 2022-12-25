import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() changeValue : number = 0;
  parentEventValue: number = 0;
  ChangeValueEvent: number = 0;
  chidvalue: number = 0;
  @Output() childevent = new EventEmitter<any>();
  constructor(private EventService: EventServiceService) { }

  ngOnInit(): void {
    this.EventService.getchild().subscribe((value)=>{
      this.chidvalue = this.chidvalue + value;
    })
  }

  childeventData(value: number) {
   this.parentEventValue = value;
  }

  ClickEventToParent() {
    this.childevent.emit();
  }

  Eventtochild2() {
    this.EventService.setchild2(1);
  }

  ngOnChanges(changes: SimpleChanges) {
   // alert("hello")
    if(changes.changeValue.currentValue){
      this.ChangeValueEvent = changes.changeValue.currentValue;
    }
  }
}
