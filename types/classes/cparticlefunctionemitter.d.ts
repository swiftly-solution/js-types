interface CParticleFunctionEmitter {
    "EmitterIndex": number;
    readonly "Parent": CParticleFunction;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionEmitter(ptr_or_class: string|AnySDKClass): CParticleFunctionEmitter;