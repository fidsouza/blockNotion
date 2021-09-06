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
  test('should a receive a new phrase with 2 words', () => {
    const { sut } = makeSut();
    const isValidPhrase = sut.isphraseHaveMinimumTwoWords();
    expect(isValidPhrase).toBe(true);
  });
});
