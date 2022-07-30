import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { SingleOrderPageComponent } from './pages/single-order-page/single-order-page.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersPageComponent,
  },
  {
    path: ':id',
    component: SingleOrderPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule { }
