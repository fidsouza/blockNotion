import { format } from 'date-fns';

import { dateRepository } from './ports/datesRepository';

export class FormatDate implements dateRepository {
  private _date: Date;
  constructor(date: Date) {
    this._date = date;
  }

  formatDatePtBR(): string {
    return format(this._date, 'dd/MM/yyyy');
  }
}
