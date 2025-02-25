interface CParticleFunction {
    readonly "OpStrength": CParticleCollectionFloatInput;
    "OpEndCapState": number;
    "OpStartFadeInTime": number;
    "OpEndFadeInTime": number;
    "OpStartFadeOutTime": number;
    "OpEndFadeOutTime": number;
    "OpFadeOscillatePeriod": number;
    "NormalizeToStopTime": boolean;
    "OpTimeOffsetMin": number;
    "OpTimeOffsetMax": number;
    "OpTimeOffsetSeed": number;
    "OpTimeScaleSeed": number;
    "OpTimeScaleMin": number;
    "OpTimeScaleMax": number;
    "DisableOperator": boolean;
    "Notes": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleFunction(ptr_or_class: string|AnySDKClass): CParticleFunction;