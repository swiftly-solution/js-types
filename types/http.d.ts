interface IHTTP {
    Listen: (ip_addr: string,port: number,callback: (req:HTTPRequest,res:HTTPResponse) => void) => null|undefined;
}
declare function PerformHTTPRequest(url: string,callback: (status:number,body:string,headers:Object[],err:string) => void,method: string,data: string,headers: Object,files: Object) : null|undefined;