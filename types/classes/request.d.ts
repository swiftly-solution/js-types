interface HTTPRequest {
    readonly "path": string;
    readonly "method": string;
    readonly "body": string;
    readonly "files": Object;
    readonly "headers": Object;
    readonly "params": Object;

}