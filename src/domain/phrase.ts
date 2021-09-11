import { formatType } from '../utils/formatDates/ports/formatType';
import { FileSystemRepository } from '../utils/fileSystem/protocols/fileSystemRepository';

export class Phrase {
  private _phrase: string;
  private _formatDate: formatType;
  constructor(
    phrase: string,
    formatDate: formatType,
    private readonly fileSystem: FileSystemRepository
  ) {
    this._phrase = phrase;
    this._formatDate = formatDate;
  }

  isphraseHaveMinimumTwoWords() {
    if (this._phrase.indexOf(' ') > 0) {
      return true;
    }
    return false;
  }

  isphraseOnlyOneChangePerDay(fileName: string) {
    return Boolean(this.fileSystem.readerAfile(fileName));
  }
}
