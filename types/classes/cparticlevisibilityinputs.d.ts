interface CParticleVisibilityInputs {
    "CameraBias": number;
    "CPin": number;
    "ProxyRadius": number;
    "InputMin": number;
    "InputMax": number;
    "InputPixelVisFade": number;
    "NoPixelVisibilityFallback": number;
    "DistanceInputMin": number;
    "DistanceInputMax": number;
    "DotInputMin": number;
    "DotInputMax": number;
    "DotCPAngles": boolean;
    "DotCameraAngles": boolean;
    "AlphaScaleMin": number;
    "AlphaScaleMax": number;
    "RadiusScaleMin": number;
    "RadiusScaleMax": number;
    "RadiusScaleFOVBase": number;
    "RightEye": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleVisibilityInputs(ptr_or_class: string|AnySDKClass): CParticleVisibilityInputs;