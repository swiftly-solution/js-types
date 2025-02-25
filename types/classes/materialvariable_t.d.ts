interface MaterialVariable_t {
    "StrVariable": string;
    readonly "VariableField": ParticleAttributeIndex_t;
    "Scale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function MaterialVariable_t(ptr_or_class: string|AnySDKClass): MaterialVariable_t;