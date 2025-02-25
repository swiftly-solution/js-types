interface HTTPResponse {

    WriteBody: (content: string) => null|undefined;
    GetHeaders: () => Object;
    GetHeader: (key: string) => string;
    SetHeader: (key: string,params: string) => null|undefined;
    Send: (response_code: number) => null|undefined;
    IsCompleted: () => boolean;
}