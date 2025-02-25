interface VMixEffectChainDesc_t {
    "CrossfadeTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixEffectChainDesc_t(ptr_or_class: string|AnySDKClass): VMixEffectChainDesc_t;