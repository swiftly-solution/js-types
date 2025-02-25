interface FeAntiTunnelProbe_t {
    "Weight": number;
    "Flags": number;
    "ProbeNode": number;
    "Count": number;
    "Begin": number;
    "ActivationDistance": number;
    "CurvatureRadius": number;
    "Bias": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeAntiTunnelProbe_t(ptr_or_class: string|AnySDKClass): FeAntiTunnelProbe_t;