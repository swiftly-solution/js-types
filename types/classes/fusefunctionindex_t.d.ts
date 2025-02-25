interface FuseFunctionIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FuseFunctionIndex_t(ptr_or_class: string|AnySDKClass): FuseFunctionIndex_t;