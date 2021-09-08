import { FileSystem } from './fileSystem';

describe('FileSystem', () => {
  test('should writer a file in directory ', () => {
    const nameFile = 'any_file.json';
    const contentFile = 'any_content';
    const file = new FileSystem().writeraFile(nameFile, contentFile);
    expect(file).resolves.toBeUndefined();
  });
});
