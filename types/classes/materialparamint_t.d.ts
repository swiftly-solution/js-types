interface MaterialParamInt_t {
    "Value": number;
    readonly "Parent": MaterialParam_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialParamInt_t(ptr_or_class: string|AnySDKClass): MaterialParamInt_t;