export class Phrase {
  private _phrase: string;
  constructor(phrase: string) {
    this._phrase = phrase;
  }

  isphraseHaveMinimumTwoWords() {
    if (this._phrase.indexOf(' ') > 0) {
      return true;
    }
    return false;
  }
}
