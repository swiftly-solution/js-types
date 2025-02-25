interface CParticleProperty {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleProperty(ptr_or_class: string|AnySDKClass): CParticleProperty;