import { formatType } from '../utils/formatDates/ports/formatType';
import { FileSystemRepository } from '../utils/fileSystem/protocols/fileSystemRepository';

interface date {
  lastUpdate: Date;
}

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
    const lastUpdatedPhrase = this.fileSystem.readerAfile(fileName);
    const parseObject: date = JSON.parse(lastUpdatedPhrase);

    const { lastUpdate } = parseObject;

    const lastUpdatedDate = this._formatDate.formatDatePtBR(
      new Date(lastUpdate)
    );
    const today = this._formatDate.formatDatePtBR(new Date());
    if (lastUpdatedDate !== today) {
      return true;
    }
    return false;
  }
}
