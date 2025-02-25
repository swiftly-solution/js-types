interface ScriptInfo_t {
    "Code": string;
    readonly "ParamsModified": Object;
    readonly "ProxyReadParams": Object;
    readonly "ProxyWriteParams": Object;
    "ScriptType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ScriptInfo_t(ptr_or_class: string|AnySDKClass): ScriptInfo_t;