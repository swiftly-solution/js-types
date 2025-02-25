interface CParticleCollectionFloatInput {
    readonly "Parent": CParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleCollectionFloatInput(ptr_or_class: string|AnySDKClass): CParticleCollectionFloatInput;