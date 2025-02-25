interface CEnvSky {
    "StartDisabled": boolean;
    "TintColor": Color;
    "TintColorLightingOnly": Color;
    "BrightnessScale": number;
    "FogType": number;
    "FogMinStart": number;
    "FogMinEnd": number;
    "FogMaxStart": number;
    "FogMaxEnd": number;
    "Enabled": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSky(ptr_or_class: string|AnySDKClass): CEnvSky;