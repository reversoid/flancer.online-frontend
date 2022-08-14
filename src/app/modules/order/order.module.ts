import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { SingleOrderPageComponent } from './pages/single-order-page/single-order-page.component';
import { OrderComponent } from './components/order/order.component';
import { TagComponent } from './components/tag/tag.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    OrdersPageComponent,
    SingleOrderPageComponent,
    OrderComponent,
    TagComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
  ],
})
export class OrderModule { }
