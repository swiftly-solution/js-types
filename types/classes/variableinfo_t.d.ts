interface VariableInfo_t {
    "Name": string;
    "NameToken": number;
    readonly "Index": FuseVariableIndex_t;
    "NumComponents": number;
    "VarType": number;
    "Access": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VariableInfo_t(ptr_or_class: string|AnySDKClass): VariableInfo_t;