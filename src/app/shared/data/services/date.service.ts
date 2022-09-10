import { Injectable } from '@angular/core';

type TimeUnits = 'sec' | 'min' | 'hour' | 'day';

class WrongTimeUnitError extends Error {
  constructor(unit: string) {
    super(`This time unit '${unit}' does not exist`);
  }
}

const weekDays = [
  'Пн',
  'Вт',
  'Ср',
  'Чт',
  'Пт',
  'Сб',
  'Вс',
];

@Injectable({
  providedIn: 'root',
})
export class DateService {
  /**
   * Returns the full date in format **DD.MM.YYYY**, optionally you can exclude year
   */
  public getDate(timestamp: number, excludeYear = false) {
    const date = new Date(timestamp);
    const DD = `0${date.getDate()}`.slice(-2);
    const MM = `0${date.getMonth() + 1}`.slice(-2);

    if (excludeYear) return `${DD}.${MM}`;

    const YYYY = date.getFullYear();
    return `${DD}.${MM}.${YYYY}`;
  }

  /**
   * Returns the time in format **hh:mm**
   */
  public getTime(timestamp: number) {
    const date = new Date(timestamp);
    const hh = `0${date.getHours()}`.slice(-2);
    const mm = `0${date.getMinutes()}`.slice(-2);
    return `${hh}:${mm}`;
  }

  /**
   * Returns true if **timestamp is earlier than x amount of units ago**;
   */
  public isEarlier(timestamp: number, x: number, unit: TimeUnits) {
    const difference = Date.now() - timestamp;

    let amount = x * 1000;
    if (unit === 'sec') amount *= 1;
    else if (unit === 'min') amount *= 60;
    else if (unit === 'hour') amount *= 60 * 60;
    else if (unit === 'day') amount *= 60 * 60 * 24;
    return difference < amount;
  }

  /**
   * Returns the time ago in time units;
   */
  public getTimeAgo(timestamp: number, unit: TimeUnits) {
    const difference = Math.floor((Date.now() - timestamp) / 1000);

    let unitAmount: number;
    let unitWord: string;

    if (unit === 'sec') unitAmount = difference;
    else if (unit === 'min') unitAmount = Math.floor(difference / 60);
    else if (unit === 'hour') unitAmount = Math.floor(difference / 60 / 60);
    else if (unit === 'day') unitAmount = Math.floor(difference / 60 / 60 / 24);
    else throw new WrongTimeUnitError(unit);

    unitWord = this._getCorrectUnitWord(unitAmount, unit);
    return `${unitAmount} ${unitWord} назад`;
  }

  private _getCorrectUnitWord(value: number, unit: TimeUnits) {
    if (unit === 'sec') {
      if (value % 10 === 0 || value % 10 > 4 || value > 10 && value < 15) return 'секунд';
      if (value % 10 === 1) return 'секунду';
      if (value % 10 < 5) return 'секунды';
    } else if (unit === 'min') {
      if (value % 10 === 0 || value % 10 > 4 || value > 10 && value < 15) return 'минут';
      if (value % 10 === 1) return 'минуту';
      if (value % 10 < 5) return 'минуты';
    } else if (unit === 'hour') {
      if (value % 10 === 0 || value % 10 > 4 || value > 10 && value < 15) return 'часов';
      if (value % 10 === 1) return 'час';
      if (value % 10 < 5) return 'часа';
    } else if (unit === 'day') {
      if (value % 10 === 0 || value % 10 > 4 || value > 10 && value < 15) return 'дней';
      if (value % 10 === 1) return 'день';
      if (value % 10 < 5) return 'дня';
    }
    throw new WrongTimeUnitError(unit);
  }

  public getDayOfWeek(timestamp: number) {
    return weekDays[new Date(timestamp).getDay() - 1];
  }
}