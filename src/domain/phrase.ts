export class Phrase {
  private _phrase: string;
  constructor(phrase: string) {
    this._phrase = phrase;
  }

  isphraseHaveMinimumTwoWords(): boolean {
    if (this._phrase.indexOf(' ') > 0) {
      return true;
    }
    return false;
  }

  isphraseOnlyOneChangePerDay(): boolean {
    return true;
  }
}
