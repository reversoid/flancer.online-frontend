import { Component, Input } from '@angular/core';
import { IOrder } from '../../pages/orders-page/orders-page.component';

export interface INumericFromTo {
  from: number;
  to: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  @Input() order!: IOrder;
}
