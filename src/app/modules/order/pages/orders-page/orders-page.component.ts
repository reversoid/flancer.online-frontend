import { Component } from '@angular/core';
import { INumericFromTo } from '../../components/order/order.component';

export interface IOrder {
  id: string;
  title: string;
  description: string;
  date: INumericFromTo | null;
  price: INumericFromTo | null;
  createdAt: number;
  tags: Array<string>;
}

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent {
  public orders: Array<IOrder> = [
    {
      id: '123',
      title: 'Заголовок',
      description:
        'Описание.... ОписаниеОписание.... ОписаниеОписание.... ОписаниеОписание.... Описание',
      createdAt: 1661695911380,
      date: {
        from: Math.floor(Date.now() / 1000),
        to:  Math.floor(Date.now() / 1000 + 60 * 60 * 24 * 5),
      },
      price: {
        from: 100,
        to: 500,
      },
      tags: ['веб-разработка', 'грузоперевозки'],
    },
  ];

  testRender() {
    console.log('rerender');
    return '';
  }
}
