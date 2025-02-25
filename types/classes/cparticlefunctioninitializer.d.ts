interface CParticleFunctionInitializer {
    "AssociatedEmitterIndex": number;
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionInitializer(ptr_or_class: string|AnySDKClass): CParticleFunctionInitializer;