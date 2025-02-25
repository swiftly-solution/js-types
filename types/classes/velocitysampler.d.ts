interface VelocitySampler {
    "PrevSample": Vector;
    "PrevSampleTime": number;
    "IdealSampleRate": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VelocitySampler(ptr_or_class: string|AnySDKClass): VelocitySampler;