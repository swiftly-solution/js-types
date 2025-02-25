interface VMixDynamicsDesc_t {
    "FldbGain": number;
    "FldbNoiseGateThreshold": number;
    "FldbCompressionThreshold": number;
    "FldbLimiterThreshold": number;
    "FldbKneeWidth": number;
    "Ratio": number;
    "LimiterRatio": number;
    "AttackTimeMS": number;
    "ReleaseTimeMS": number;
    "RMSTimeMS": number;
    "WetMix": number;
    "PeakMode": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDynamicsDesc_t(ptr_or_class: string|AnySDKClass): VMixDynamicsDesc_t;