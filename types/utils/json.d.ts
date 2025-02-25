interface IJSON {
    parse: (str: string) => Object;
    stringify: (value: any) => string;
}
declare const json : IJSON