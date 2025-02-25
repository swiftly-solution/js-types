interface CGradientFog {
    "FogStartDistance": number;
    "FogEndDistance": number;
    "HeightFogEnabled": boolean;
    "FogStartHeight": number;
    "FogEndHeight": number;
    "FarZ": number;
    "FogMaxOpacity": number;
    "FogFalloffExponent": number;
    "FogVerticalExponent": number;
    "FogColor": Color;
    "FogStrength": number;
    "FadeTime": number;
    "StartDisabled": boolean;
    "IsEnabled": boolean;
    "GradientFogNeedsTextures": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGradientFog(ptr_or_class: string|AnySDKClass): CGradientFog;