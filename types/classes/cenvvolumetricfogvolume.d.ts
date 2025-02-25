interface CEnvVolumetricFogVolume {
    "Active": boolean;
    "BoxMins": Vector;
    "BoxMaxs": Vector;
    "StartDisabled": boolean;
    "Strength": number;
    "FalloffShape": number;
    "FalloffExponent": number;
    "HeightFogDepth": number;
    "HeightFogEdgeWidth": number;
    "IndirectLightStrength": number;
    "SunLightStrength": number;
    "NoiseStrength": number;
    "OverrideIndirectLightStrength": boolean;
    "OverrideSunLightStrength": boolean;
    "OverrideNoiseStrength": boolean;
    "AllowLPVIndirect": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvVolumetricFogVolume(ptr_or_class: string|AnySDKClass): CEnvVolumetricFogVolume;