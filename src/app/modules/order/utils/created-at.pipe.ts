import { Pipe, PipeTransform } from '@angular/core';
import { DateService } from 'src/app/shared/data/services/date.service';

@Pipe({
  name: 'createdAt',
})
export class CreatedAtPipe implements PipeTransform {
  constructor(private _dateService: DateService) {}

  transform(createdAt: number): string {
    if (this._dateService.isEarlier(createdAt, 1, 'min')) {
      return 'только что';
    }
    if (this._dateService.isEarlier(createdAt, 1, 'hour'))
      return this._dateService.getTimeAgo(createdAt, 'min');

    if (this._dateService.isEarlier(createdAt, 24, 'hour'))
      return this._dateService.getTimeAgo(createdAt, 'hour');

    if (this._dateService.isEarlier(createdAt, 4, 'day'))
      return this._dateService.getTimeAgo(createdAt, 'day');

    return this._dateService.getDate(createdAt);
  }
}
