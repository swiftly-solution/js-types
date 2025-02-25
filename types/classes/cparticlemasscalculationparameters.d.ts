interface CParticleMassCalculationParameters {
    "MassMode": number;
    readonly "Radius": CPerParticleFloatInput;
    readonly "NominalRadius": CPerParticleFloatInput;
    readonly "Scale": CPerParticleFloatInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleMassCalculationParameters(ptr_or_class: string|AnySDKClass): CParticleMassCalculationParameters;