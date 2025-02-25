interface CGeneralSpin {
    "SpinRateDegrees": number;
    "SpinRateMinDegrees": number;
    "SpinRateStopTime": number;
    readonly "Parent": CParticleFunctionOperator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGeneralSpin(ptr_or_class: string|AnySDKClass): CGeneralSpin;