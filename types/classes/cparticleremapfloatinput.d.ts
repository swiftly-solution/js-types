interface CParticleRemapFloatInput {
    readonly "Parent": CParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleRemapFloatInput(ptr_or_class: string|AnySDKClass): CParticleRemapFloatInput;