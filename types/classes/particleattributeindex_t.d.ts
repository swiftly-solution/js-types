interface ParticleAttributeIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleAttributeIndex_t(ptr_or_class: string|AnySDKClass): ParticleAttributeIndex_t;