interface CPerParticleFloatInput {
    readonly "Parent": CParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPerParticleFloatInput(ptr_or_class: string|AnySDKClass): CPerParticleFloatInput;