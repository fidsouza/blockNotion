import { format } from 'date-fns';

import { formatType } from './ports/formatType';

export class FormatDate implements formatType {
  formatDatePtBR(date: Date): string {
    return format(date, 'dd/MM/yyyy');
  }
}
