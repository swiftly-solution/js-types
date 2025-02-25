interface VMixDynamicsCompressorDesc_t {
    "FldbOutputGain": number;
    "FldbCompressionThreshold": number;
    "FldbKneeWidth": number;
    "CompressionRatio": number;
    "AttackTimeMS": number;
    "ReleaseTimeMS": number;
    "RMSTimeMS": number;
    "WetMix": number;
    "PeakMode": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDynamicsCompressorDesc_t(ptr_or_class: string|AnySDKClass): VMixDynamicsCompressorDesc_t;