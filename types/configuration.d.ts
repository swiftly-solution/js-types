interface IConfiguration {
    Exists: (key: string) => boolean;
    Fetch: (key: string) => any;
    FetchArraySize: (key: string) => number;
    Reload: (key: string) => null|undefined;
    Create: (config_key: string,value: Object) => null|undefined;
}
declare const config : IConfiguration