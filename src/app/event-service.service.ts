import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private ValueUpdatechildtochild2 = new BehaviorSubject<number>(null);
  private ValueUpdatechild2tochild = new BehaviorSubject<number>(null);
 
  public setchild(menuViewModel: number): void {
      this.ValueUpdatechildtochild2.next(menuViewModel);
  }

  public getchild(): Observable<number> {
      return this.ValueUpdatechildtochild2.asObservable();
  }
  
  public setchild2(menuViewModel: number): void {
    this.ValueUpdatechild2tochild.next(menuViewModel);
}

public getchild2(): Observable<number> {
    return this.ValueUpdatechild2tochild.asObservable();
}
}
