interface CEnvCubemapFog {
    "EndDistance": number;
    "StartDistance": number;
    "FogFalloffExponent": number;
    "HeightFogEnabled": boolean;
    "FogHeightWidth": number;
    "FogHeightEnd": number;
    "FogHeightStart": number;
    "FogHeightExponent": number;
    "LODBias": number;
    "Active": boolean;
    "StartDisabled": boolean;
    "FogMaxOpacity": number;
    "CubemapSourceType": number;
    "SkyEntity": string;
    "HasHeightFogEnd": boolean;
    "FirstTime": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvCubemapFog(ptr_or_class: string|AnySDKClass): CEnvCubemapFog;