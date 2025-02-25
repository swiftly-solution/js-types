interface IMisc {
    find: (tbl: Object,element: any) => number|null;
    contains: (tbl: Object,element: any) => boolean;
    filter: (tbl: Object,callback: (element:any) => boolean) => Object;
    map: (tbl: Object,callback: (element:any) => boolean) => Object;
    trim: (str: string) => string;
    split: (str: string,delimiter: string) => Object;
}
declare function StateUpdate(ptr: string,classname: string,field: string) : null|undefined;
declare function GetUserMessage(uuid: string) : UserMessage;
declare function uuid() : string;
declare function ReplyToCommand(playerid: number,prefix: string,text: string) : null|undefined;
declare function ComputePrettyTime(seconds: number) : string;
declare function GetCCSGameRules() : CCSGameRules;
declare function IsValidItem(name: string) : boolean;
declare function IsValidWeapon(name: string) : boolean;