interface CGeneralRandomRotation {
    readonly "FieldOutput": ParticleAttributeIndex_t;
    "Degrees": number;
    "DegreesMin": number;
    "DegreesMax": number;
    "RotationRandExponent": number;
    "RandomlyFlipDirection": boolean;
    readonly "Parent": CParticleFunctionInitializer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGeneralRandomRotation(ptr_or_class: string|AnySDKClass): CGeneralRandomRotation;