import { formatType } from '../utils/formatDates/ports/formatType';

import { Phrases } from './protocols/phrases';

export class Phrase implements Phrases {
  private _phrase: string;
  private _formatDate: formatType;
  constructor(phrase: string, formatDate: formatType) {
    this._phrase = phrase;
    this._formatDate = formatDate;
  }

  isphraseHaveMinimumTwoWords() {
    if (this._phrase.indexOf(' ') > 0) {
      return true;
    }
    return false;
  }

  isphraseOnlyOneChangePerDay() {
    return true;
  }
}
