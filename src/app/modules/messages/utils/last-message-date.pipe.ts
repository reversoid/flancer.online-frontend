import { Pipe, PipeTransform } from '@angular/core';
import { DateService } from 'src/app/shared/data/services/date.service';

@Pipe({
  name: 'lastMessageDate',
})
export class LastMessageDatePipe implements PipeTransform {
  constructor(private _dateService: DateService) {}

  transform(lastMessageDate: number): string {
    if (this._dateService.isEarlier(lastMessageDate, 23, 'hour')) {
      return this._dateService.getTime(lastMessageDate);
    } else if (this._dateService.isEarlier(lastMessageDate, 7, 'day')) {
      return this._dateService.getDayOfWeek(lastMessageDate);
    }
    return this._dateService.getDate(lastMessageDate);
  }
}
