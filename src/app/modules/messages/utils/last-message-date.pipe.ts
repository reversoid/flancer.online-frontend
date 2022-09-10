import { Pipe, PipeTransform } from '@angular/core';

const weekDays = [
  'Пн',
  'Вт',
  'Ср',
  'Чт',
  'Пт',
  'Сб',
  'Вс',
];

@Pipe({
  name: 'lastMessageDate',
})
export class LastMessageDatePipe implements PipeTransform {

  transform(lastMessageDate: number): string {
    const difference = Date.now() - lastMessageDate;

    if (this._lessThan(difference, 23, 'hour')) {
      return this._getTime(lastMessageDate);
    } else if (this._lessThan(difference, 7, 'day')) {
      return this._getDayOfWeek(lastMessageDate);
    }
    return this._getDate(lastMessageDate);
  }

  private _getDayOfWeek(lastMessageDate: number) {
    return weekDays[new Date(lastMessageDate).getDay() - 1];
  }

  private _getDate(lastMessageDate: number) {
    const date = new Date(lastMessageDate);
    const DD = `0${date.getDate()}`.slice(-2);
    const MM = `0${date.getMonth() + 1}`.slice(-2);
    const YYYY = date.getFullYear();
    return `${DD}.${MM}.${YYYY}`; 
  }

  private _getTime(lastMessageDate: number) {
    const date = new Date(lastMessageDate);
    const hh = `0${date.getHours()}`.slice(-2);
    const mm = `0${date.getMinutes()}`.slice(-2);
    return `${hh}:${mm}`;
  }

  // TODO refactor by making function for time calculations
  private _lessThan(
    x: number,
    y: number,
    unit: 'hour' | 'day',
  ) {
    let amount = y * 1000;
    if (unit === 'hour') amount *= 60 * 60;
    else if (unit === 'day') amount *= 60 * 60 * 24;
    return x < amount;
  }
}
