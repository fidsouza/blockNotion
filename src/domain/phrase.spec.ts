import { Phrase } from './phrase';

interface SutTypes {
  sut: Phrase;
}

const pharse = 'any phrase';

const makeSut = (): SutTypes => {
  const sut = new Phrase(pharse);
  return {
    sut
  };
};

describe('phrase', () => {
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
