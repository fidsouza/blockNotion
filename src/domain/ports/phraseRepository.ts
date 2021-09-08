export interface AdaptersPhrases {
  isphraseHaveMinimumTwoWords: (phrase: string) => boolean;
  isphraseOnlyOneChangePerDay: (fileName: string, date: Date) => boolean;
}
