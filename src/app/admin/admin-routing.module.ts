import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';

// const routes: Routes = [
//   { path: 'profile', component: ProfileComponent },
//   { path: 'updateprofile', component: UpdatedetailsComponent },
//   { path: 'customerlist', component: CustomerlistComponent },
//   { path: '', redirectTo: "profile", pathMatch: 'full' },
 
// ];

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'customerList',
        component: CustomerlistComponent,
      },
      {
        path: 'updatedetails',
        component: UpdatedetailsComponent,
      }
    ]
  }];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})


export class AdminRoutingModule { }
