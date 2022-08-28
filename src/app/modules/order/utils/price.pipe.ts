import { Pipe, PipeTransform } from '@angular/core';
import { INumericFromTo } from '../components/order/order.component';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(price: INumericFromTo | null): string {
    if (price === null) {
      return '';
    }
    if (price.from === null) return `до ${price.to} ₽`;
    if (price.to === null) return `от ${price.from} ₽`;
    return `${price.from}-${price.to} ₽`;
  }
}
