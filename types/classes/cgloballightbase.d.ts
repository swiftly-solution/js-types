interface CGlobalLightBase {
    "SpotLight": boolean;
    "SpotLightOrigin": Vector;
    "SpotLightAngles": QAngle;
    "ShadowDirection": Vector;
    "AmbientDirection": Vector;
    "SpecularDirection": Vector;
    "InspectorSpecularDirection": Vector;
    "SpecularPower": number;
    "SpecularIndependence": number;
    "SpecularColor": Color;
    "StartDisabled": boolean;
    "Enabled": boolean;
    "LightColor": Color;
    "AmbientColor1": Color;
    "AmbientColor2": Color;
    "AmbientColor3": Color;
    "SunDistance": number;
    "FOV": number;
    "NearZ": number;
    "FarZ": number;
    "EnableShadows": boolean;
    "OldEnableShadows": boolean;
    "BackgroundClearNotRequired": boolean;
    "CloudScale": number;
    "Cloud1Speed": number;
    "Cloud1Direction": number;
    "Cloud2Speed": number;
    "Cloud2Direction": number;
    "AmbientScale1": number;
    "AmbientScale2": number;
    "GroundScale": number;
    "LightScale": number;
    "FoWDarkness": number;
    "EnableSeparateSkyboxFog": boolean;
    "FowColor": Vector;
    "ViewOrigin": Vector;
    "ViewAngles": QAngle;
    "ViewFoV": number;
    "WorldPoints": Object;
    "FogOffsetLayer0": Vector2D;
    "FogOffsetLayer1": Vector2D;
    readonly "EnvWind": any;
    readonly "EnvSky": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGlobalLightBase(ptr_or_class: string|AnySDKClass): CGlobalLightBase;