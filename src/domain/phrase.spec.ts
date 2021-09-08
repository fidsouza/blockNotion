import { writeFileSync } from 'fs';

import { formatType } from '../utils/formatDates/ports/formatType';

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
  const sut = new Phrase(pharse, makeFormatDate());
  return {
    sut
  };
};

describe('phrase', () => {
  beforeAll(async () => {
    const contentFile = { lastUpdate: '06/09/2021' };
    writeFileSync('lastUpdatePhrase-test.json', JSON.stringify(contentFile));
  });
  test('Should a receive a new phrase with 2 words', () => {
    const { sut } = makeSut();
    const isValidPhrase = sut.isphraseHaveMinimumTwoWords();
    expect(isValidPhrase).toBe(true);
  });
  test('Should ensure that the phrase hasn t changed today', () => {
    const { sut } = makeSut();
    const onlyOneChangePhraseEveryDay = sut.isphraseOnlyOneChangePerDay();
    expect(onlyOneChangePhraseEveryDay).toBe(true);
  });
});
