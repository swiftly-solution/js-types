interface IEvent {

    GetInvokingPlugin: () => string;
    IsGameEvent: () => boolean;
    IsHook: () => boolean;
    SetBool: (key: string,value: boolean) => null|undefined;
    SetInt: (key: string,value: number) => null|undefined;
    SetUint64: (key: string,value: number) => null|undefined;
    SetFloat: (key: string,value: number) => null|undefined;
    SetString: (key: string,value: string) => null|undefined;
    GetBool: (key: string) => boolean;
    GetInt: (key: string) => number;
    GetUint64: (key: string) => number;
    GetFloat: (key: string) => number;
    GetString: (key: string) => string;
    GetReturn: () => any;
    SetReturn: (value: any) => null|undefined;
    FireEvent: (dontBroadcast: boolean) => null|undefined;
    FireEventToClient: (playerid: number) => null|undefined;
    SetHookBoolean: (index: number,value: boolean) => null|undefined;
    SetHookInt: (index: number,value: number) => null|undefined;
    SetHookUInt: (index: number,value: number) => null|undefined;
    SetHookUInt64: (index: number,value: number) => null|undefined;
    SetHookInt64: (index: number,value: number) => null|undefined;
    SetHookFloat: (index: number,value: number) => null|undefined;
    SetHookDouble: (index: number,value: number) => null|undefined;
    SetHookString: (index: number,value: string) => null|undefined;
    SetHookPointer: (index: number,value: IMemory) => null|undefined;
    GetHookBoolean: (index: number) => boolean;
    GetHookInt: (index: number) => number;
    GetHookUInt: (index: number) => number;
    GetHookInt64: (index: number) => number;
    GetHookUInt64: (index: number) => number;
    GetHookFloat: (index: number) => number;
    GetHookDouble: (index: number) => number;
    GetHookString: (index: number) => string;
    GetHookPointer: (index: number) => IMemory;
    GetHookReturn: () => any;
    SetHookReturn: (value: any) => null|undefined;
    GetNoBroadcast: () => boolean;
    SetNoBroadcast: (value: boolean) => null|undefined;
}

declare function PEvent(event_name: string): IEvent;