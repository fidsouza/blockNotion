export interface Phrases {
  isphraseHaveMinimumTwoWords: (phrase: string) => boolean;
  isphraseOnlyOneChangePerDay: (fileName: string, date: Date) => boolean;
}
