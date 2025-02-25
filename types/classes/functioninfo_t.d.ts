interface FunctionInfo_t {
    "Name": string;
    "NameToken": number;
    "ParamCount": number;
    readonly "Index": FuseFunctionIndex_t;
    "IsPure": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FunctionInfo_t(ptr_or_class: string|AnySDKClass): FunctionInfo_t;