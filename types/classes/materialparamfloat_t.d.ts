interface MaterialParamFloat_t {
    "Value": number;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamFloat_t(ptr_or_class: string|AnySDKClass): MaterialParamFloat_t;