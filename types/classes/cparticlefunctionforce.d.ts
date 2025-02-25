interface CParticleFunctionForce {
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionForce(ptr_or_class: string|AnySDKClass): CParticleFunctionForce;