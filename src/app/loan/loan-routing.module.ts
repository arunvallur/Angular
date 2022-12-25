import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { LoanlistComponent } from './loanlist/loanlist.component';

const routes: Routes = [
    { path: 'loandetails', component: LoandetailsComponent },
    { path: 'loanlist', component: LoanlistComponent },
    { path: '', redirectTo:"loandetails",pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
