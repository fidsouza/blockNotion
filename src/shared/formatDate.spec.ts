import { FormatDate } from './formatDate';

const makeDate = () => {
  const date = new Date(2014, 1, 11);
  const formatDateinPtBR = new FormatDate(date).formatDatePtBR();

  return {
    formatDateinPtBR
  };
};

describe('Parse date', () => {
  test('should return a parse date in format Pt-BR', () => {
    const { formatDateinPtBR } = makeDate();
    expect(formatDateinPtBR).toEqual('02/11/2014');
  });
});
