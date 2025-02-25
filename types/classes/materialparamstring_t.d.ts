interface MaterialParamString_t {
    "Value": string;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamString_t(ptr_or_class: string|AnySDKClass): MaterialParamString_t;