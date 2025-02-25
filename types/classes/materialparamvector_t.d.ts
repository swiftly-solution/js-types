interface MaterialParamVector_t {
    "Value": Vector4D;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamVector_t(ptr_or_class: string|AnySDKClass): MaterialParamVector_t;