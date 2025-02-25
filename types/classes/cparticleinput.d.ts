interface CParticleInput {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleInput(ptr_or_class: string|AnySDKClass): CParticleInput;