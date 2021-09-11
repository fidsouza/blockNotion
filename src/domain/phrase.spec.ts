import { writeFileSync } from 'fs';

import { formatType } from '../utils/formatDates/ports/formatType';
import { FormatDate } from '../utils/formatDates/formatDate';
import { FileSystem } from '../utils/fileSystem/fileSystem';

import { Phrase } from './phrase';

interface SutTypes {
  sut: Phrase;
  sutFormatDate: Phrase;
}

const pharse = 'any phrase';

const makeSut = (): SutTypes => {
  const sut = new Phrase(pharse, new FormatDate(), new FileSystem());
  const sutFormatDate = new Phrase(pharse, new FormatDate(), new FileSystem());
  return {
    sut,
    sutFormatDate
  };
};
const contentFile = { lastUpdate: '06/09/2021' };
const fileName = 'lastUpdatePhrase-test.json';
describe('phrase', () => {
  beforeAll(async () => {
    writeFileSync(fileName, JSON.stringify(contentFile));
  });
  test('Should a receive a new phrase with 2 words', () => {
    const { sut } = makeSut();
    const isValidPhrase = sut.isphraseHaveMinimumTwoWords();
    expect(isValidPhrase).toBe(true);
  });
  test('Should ensure that the phrase hasn t changed today', () => {
    const { sutFormatDate } = makeSut();
    const onlyOneChangePhraseEveryDay =
      sutFormatDate.isphraseOnlyOneChangePerDay(fileName);
    expect(onlyOneChangePhraseEveryDay).toBe(true);
  });
});
