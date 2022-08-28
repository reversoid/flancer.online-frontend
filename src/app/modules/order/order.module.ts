import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { SingleOrderPageComponent } from './pages/single-order-page/single-order-page.component';
import { OrderComponent } from './components/order/order.component';
import { TagComponent } from './components/tag/tag.component';
import { PricePipe } from './utils/price.pipe';
import { DatePipe } from './utils/date.pipe';
import { CreatedAtPipe } from './utils/created-at.pipe';


@NgModule({
  declarations: [
    OrdersPageComponent,
    SingleOrderPageComponent,
    OrderComponent,
    TagComponent,
    PricePipe,
    DatePipe,
    CreatedAtPipe,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
  ],
})
export class OrderModule { }
