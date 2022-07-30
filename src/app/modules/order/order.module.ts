import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { SingleOrderPageComponent } from './pages/single-order-page/single-order-page.component';


@NgModule({
  declarations: [
    OrdersPageComponent,
    SingleOrderPageComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
  ],
})
export class OrderModule { }
