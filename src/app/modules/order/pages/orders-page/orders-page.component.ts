import { Component } from '@angular/core';
import { NumericFromTo } from '../../components/order/order.component';

export interface Order {
  id: string;
  title: string;
  description: string;
  date: NumericFromTo | null;
  price: NumericFromTo | null;
  createdAt: number;
  tags: Array<string>;
}

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent {
  public orders: Array<Order> = [
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
    {
      id: '345',
      title: 'Другой заголовок',
      description:
        'lorem impspsps sajdj sjj j asjajej sjaj ajsjeej sjalek skkka;',
      createdAt: Date.now(),
      date: {
        from: Math.floor(Date.now() / 1000),
        to:  Math.floor(Date.now() / 1000 + 60 * 60 * 24 * 5),
      },
      price: {
        from: 100,
        to: 500,
      },
      tags: ['веб-разработка'],
    },
  ];
}
