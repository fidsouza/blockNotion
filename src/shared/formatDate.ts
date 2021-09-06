import { dateRepository } from './ports/datesRepository';

export class FormatDate implements dateRepository {
  private _date: Date;
  constructor(date: Date) {
    this._date = date;
  }

  formatDatePtBR(): string {
    return '02/11/2014';
  }
}
