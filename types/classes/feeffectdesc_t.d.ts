interface FeEffectDesc_t {
    "Name": string;
    "NameHash": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeEffectDesc_t(ptr_or_class: string|AnySDKClass): FeEffectDesc_t;