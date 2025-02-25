interface PermModelDataAnimatedMaterialAttribute_t {
    "AttributeName": string;
    "NumChannels": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermModelDataAnimatedMaterialAttribute_t(ptr_or_class: string|AnySDKClass): PermModelDataAnimatedMaterialAttribute_t;