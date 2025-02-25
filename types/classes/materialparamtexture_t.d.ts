interface MaterialParamTexture_t {
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamTexture_t(ptr_or_class: string|AnySDKClass): MaterialParamTexture_t;