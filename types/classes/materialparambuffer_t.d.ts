interface MaterialParamBuffer_t {
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamBuffer_t(ptr_or_class: string|AnySDKClass): MaterialParamBuffer_t;