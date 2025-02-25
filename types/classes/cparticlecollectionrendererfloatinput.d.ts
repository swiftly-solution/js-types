interface CParticleCollectionRendererFloatInput {
    readonly "Parent": CParticleCollectionFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleCollectionRendererFloatInput(ptr_or_class: string|AnySDKClass): CParticleCollectionRendererFloatInput;