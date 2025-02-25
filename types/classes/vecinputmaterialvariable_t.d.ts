interface VecInputMaterialVariable_t {
    "StrVariable": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VecInputMaterialVariable_t(ptr_or_class: string|AnySDKClass): VecInputMaterialVariable_t;