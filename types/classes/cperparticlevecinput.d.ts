interface CPerParticleVecInput {
    readonly "Parent": CParticleVecInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPerParticleVecInput(ptr_or_class: string|AnySDKClass): CPerParticleVecInput;