interface IFiles {
    Decompress: (path: string,output: string) => boolean;
    Compress: (path: string,output: string) => boolean;
    Write: (path: string,content: string,hasdate: boolean) => null|undefined;
    Read: (path: string) => string;
    IsDirectory: (path: string) => boolean;
    GetBase: (path: string) => string;
    FetchFileNames: (path: string) => Object;
    FetchDirectories: (path: string) => Object;
    ExistsPath: (path: string) => boolean;
    Delete: (path: string) => null|undefined;
    CreateDirectory: (path: string) => boolean;
    Append: (path: string,content: string,hasdate: boolean) => null|undefined;
}
declare const files : IFiles