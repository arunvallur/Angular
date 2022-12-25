import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ProfileComponent, UpdatedetailsComponent, CustomerlistComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
