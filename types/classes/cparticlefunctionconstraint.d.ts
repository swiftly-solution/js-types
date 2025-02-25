interface CParticleFunctionConstraint {
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionConstraint(ptr_or_class: string|AnySDKClass): CParticleFunctionConstraint;