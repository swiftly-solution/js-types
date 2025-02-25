interface CParticleFunctionRenderer {
    readonly "VisibilityInputs": CParticleVisibilityInputs;
    "CannotBeRefracted": boolean;
    "SkipRenderingOnMobile": boolean;
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionRenderer(ptr_or_class: string|AnySDKClass): CParticleFunctionRenderer;