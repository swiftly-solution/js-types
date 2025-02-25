interface ParticleIndex_t {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleIndex_t(ptr_or_class: string|AnySDKClass): ParticleIndex_t;