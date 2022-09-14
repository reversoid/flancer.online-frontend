import { Component, Input } from '@angular/core';
import { Order } from '../../pages/orders-page/orders-page.component';

export interface NumericFromTo {
  from: number | null;
  to: number | null;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  @Input() order!: Order;
}
