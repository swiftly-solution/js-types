interface CPointCamera {
    "FOV": number;
    "Resolution": number;
    "FogEnable": boolean;
    "FogColor": Color;
    "FogStart": number;
    "FogEnd": number;
    "FogMaxDensity": number;
    "Active": boolean;
    "UseScreenAspectRatio": boolean;
    "AspectRatio": number;
    "NoSky": boolean;
    "Brightness": number;
    "ZFar": number;
    "ZNear": number;
    "CanHLTVUse": boolean;
    "AlignWithParent": boolean;
    "DofEnabled": boolean;
    "DofNearBlurry": number;
    "DofNearCrisp": number;
    "DofFarCrisp": number;
    "DofFarBlurry": number;
    "DofTiltToGround": number;
    "TargetFOV": number;
    "DegreesPerSecond": number;
    "IsOn": boolean;
    readonly "Next": CPointCamera;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointCamera(ptr_or_class: string|AnySDKClass): CPointCamera;