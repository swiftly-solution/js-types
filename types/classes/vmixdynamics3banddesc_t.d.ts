interface VMixDynamics3BandDesc_t {
    "FldbGainOutput": number;
    "RMSTimeMS": number;
    "FldbKneeWidth": number;
    "Depth": number;
    "WetMix": number;
    "TimeScale": number;
    "LowCutoffFreq": number;
    "HighCutoffFreq": number;
    "PeakMode": boolean;
    readonly "BandDesc": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDynamics3BandDesc_t(ptr_or_class: string|AnySDKClass): VMixDynamics3BandDesc_t;