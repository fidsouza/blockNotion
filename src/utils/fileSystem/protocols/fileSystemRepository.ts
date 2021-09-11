export interface FileSystemRepository {
  writeraFile: (fileName: string, content: string) => Promise<any>;
  readerAfile: (fileName: string) => string;
}
