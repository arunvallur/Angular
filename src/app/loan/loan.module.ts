import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanlistComponent } from './loanlist/loanlist.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { LoanRoutingModule } from './loan-routing.module';



@NgModule({
  declarations: [LoanlistComponent, LoandetailsComponent],
  imports: [
    CommonModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
