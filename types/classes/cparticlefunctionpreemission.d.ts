interface CParticleFunctionPreEmission {
    "RunOnce": boolean;
    readonly "Parent": CParticleFunctionOperator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunctionPreEmission(ptr_or_class: string|AnySDKClass): CParticleFunctionPreEmission;