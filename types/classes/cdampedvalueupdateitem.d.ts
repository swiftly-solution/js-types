interface CDampedValueUpdateItem {
    readonly "Damping": CAnimInputDamping;
    readonly "ParamIn": CAnimParamHandle;
    readonly "ParamOut": CAnimParamHandle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDampedValueUpdateItem(ptr_or_class: string|AnySDKClass): CDampedValueUpdateItem;