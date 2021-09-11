import { writeFileSync, readFileSync } from 'fs';

import { FileSystemRepository } from './protocols/fileSystemRepository';

export class FileSystem implements FileSystemRepository {
  writeraFile(fileName: string, content: string) {
    return new Promise((resolve, reject) => {
      resolve(writeFileSync(fileName, content));
    });
  }

  readerAfile(fileName: string) {
    const contentFile = readFileSync(`./${fileName}`, {
      encoding: 'utf8',
      flag: 'r'
    });
    return contentFile;
  }
}
