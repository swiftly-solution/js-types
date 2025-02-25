interface CParticleFunctionOperator {
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionOperator(ptr_or_class: string|AnySDKClass): CParticleFunctionOperator;