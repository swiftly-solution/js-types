interface FuseVariableIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FuseVariableIndex_t(ptr_or_class: string|AnySDKClass): FuseVariableIndex_t;