interface FeAntiTunnelProbeBuild_t {
    "Weight": number;
    "ActivationDistance": number;
    "Bias": number;
    "Curvature": number;
    "Flags": number;
    "ProbeNode": number;
    readonly "TargetNodes": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeAntiTunnelProbeBuild_t(ptr_or_class: string|AnySDKClass): FeAntiTunnelProbeBuild_t;