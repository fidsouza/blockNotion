import { format } from 'date-fns';

import { formatType } from './ports/formatType';

export class FormatDate implements formatType {
  private _date: Date;
  constructor(date: Date) {
    this._date = date;
  }

  formatDatePtBR(): string {
    return format(this._date, 'dd/MM/yyyy');
  }
}
