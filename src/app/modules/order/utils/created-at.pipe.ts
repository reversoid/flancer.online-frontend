import { Pipe, PipeTransform } from '@angular/core';
import { getDateString } from './getDateString';

@Pipe({
  name: 'createdAt',
})
export class CreatedAtPipe implements PipeTransform {
  transform(createdAt: number): string {
    const difference = Date.now() - createdAt;

    if (this._lessThan(difference, 1, 'min') || difference < 0)
      return 'только что';

    if (this._lessThan(difference, 1, 'hour'))
      return this._getTimeAgo(difference, 'min');

    if (this._lessThan(difference, 24, 'hour'))
      return this._getTimeAgo(difference, 'hour');

    if (this._lessThan(difference, 4, 'day'))
      return this._getTimeAgo(difference, 'day');

    return getDateString(createdAt);
  }

  private _lessThan(
    x: number,
    y: number,
    unit: 'sec' | 'min' | 'hour' | 'day',
  ) {
    let amount = y * 1000;
    if (unit === 'min') amount *= 60;
    else if (unit === 'hour') amount *= 60 * 60;
    else if (unit === 'day') amount *= 60 * 60 * 24;
    return x < amount;
  }

  private _getTimeAgo(difference: number, unit: 'min' | 'hour' | 'day') {
    difference = Math.floor(difference / 1000);

    let result;
    let unitWord;

    if (unit === 'min') result = Math.floor(difference / 60);
    else if (unit === 'hour') result = Math.floor(difference / 60 / 60);
    else result = Math.floor(difference / 60 / 60 / 24);

    unitWord = this._getCorrectUnitWord(result, unit);
    return `${result} ${unitWord} назад`;
  }

  private _getCorrectUnitWord(value: number, unit: 'min' | 'hour' | 'day') {
    if (unit === 'min') {
      if (value % 10 === 0 || value % 10 > 4 || value > 10 && value < 15) return 'минут';
      if (value % 10 === 1) return 'минуту';
      if (value % 10 < 5) return 'минуты';
    } else if (unit === 'hour') {
      if (value % 10 === 0 || value % 10 > 4 || value > 10 && value < 15) return 'часов';
      if (value % 10 === 1) return 'час';
      if (value % 10 < 5) return 'часа';
    }
    if (value % 10 === 0 || value % 10 > 4 || value > 10 && value < 15) return 'дней';
    if (value % 10 === 1) return 'день';
    if (value % 10 < 5) return 'дня';
    return '';
  }
}
