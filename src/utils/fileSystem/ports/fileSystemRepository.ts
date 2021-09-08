export interface FileSystemRepository {
  writeraFile: (fileName: string, content: string) => Promise<any>;
}
