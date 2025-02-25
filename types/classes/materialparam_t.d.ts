interface MaterialParam_t {
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParam_t(ptr_or_class: string|AnySDKClass): MaterialParam_t;