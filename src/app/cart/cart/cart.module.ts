import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { BookingDetailsComponent } from '../booking-details/booking-details.component';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    CartComponent,
    BookingDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }