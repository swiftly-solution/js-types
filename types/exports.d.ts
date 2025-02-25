interface IExports {
    [plugin_name: string]: (...args: any[]) => any;
}
declare const exports : IExports
declare function exp(exportName: string,callback: (...args: any[]) => void) : null|undefined;