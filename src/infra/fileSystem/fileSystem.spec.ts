import { FileSystem } from './fileSystem';

const nameFile = 'any_file.json';
const contentFile = 'any_content';

describe('FileSystem', () => {
  test('should writer a file in directory ', () => {
    const file = new FileSystem().writeraFile(nameFile, contentFile);
    expect(file).resolves.toBeUndefined();
  });
  test('should read a file in directory', () => {
    const file = new FileSystem().readerAfile(nameFile);
    expect(file).toBe(contentFile);
  });
});
