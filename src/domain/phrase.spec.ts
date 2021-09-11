import { writeFileSync } from 'fs';

import { formatType } from '../utils/formatDates/ports/formatType';
import { FileSystem } from '../utils/fileSystem/fileSystem';

import { Phrase } from './phrase';

interface SutTypes {
  sut: Phrase;
}

const pharse = 'any phrase';

const makeFormatDate = (): formatType => {
  class FormatTypeDate implements formatType {
    formatDatePtBR(): string {
      const dateNow = '01/09/2021';
      return dateNow;
    }
  }
  return new FormatTypeDate();
};

const makeSut = (): SutTypes => {
  const sut = new Phrase(pharse, makeFormatDate(), new FileSystem());
  return {
    sut
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
    const { sut } = makeSut();
    const onlyOneChangePhraseEveryDay =
      sut.isphraseOnlyOneChangePerDay(fileName);
    expect(onlyOneChangePhraseEveryDay).toBe(true);
  });
});
