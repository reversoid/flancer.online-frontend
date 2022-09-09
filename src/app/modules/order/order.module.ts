import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { SingleOrderPageComponent } from './pages/single-order-page/single-order-page.component';
import { OrderComponent } from './components/order/order.component';
import { PricePipe } from './utils/price.pipe';
import { CreatedAtPipe } from './utils/created-at.pipe';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';


@NgModule({
  declarations: [
    OrdersPageComponent,
    SingleOrderPageComponent,
    OrderComponent,
    PricePipe,
    CreatedAtPipe,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedComponentsModule,
  ],
})
export class OrderModule { }
