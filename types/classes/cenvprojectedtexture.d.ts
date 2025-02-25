interface CEnvProjectedTexture {
    readonly "TargetEntity": CBaseEntity;
    "State": boolean;
    "AlwaysUpdate": boolean;
    "LightFOV": number;
    "EnableShadows": boolean;
    "SimpleProjection": boolean;
    "LightOnlyTarget": boolean;
    "LightWorld": boolean;
    "CameraSpace": boolean;
    "BrightnessScale": number;
    "LightColor": Color;
    "Intensity": number;
    "LinearAttenuation": number;
    "QuadraticAttenuation": number;
    "Volumetric": boolean;
    "NoiseStrength": number;
    "FlashlightTime": number;
    "NumPlanes": number;
    "PlaneOffset": number;
    "VolumetricIntensity": number;
    "ColorTransitionTime": number;
    "Ambient": number;
    "SpotlightTextureName": string;
    "SpotlightTextureFrame": number;
    "ShadowQuality": number;
    "NearZ": number;
    "FarZ": number;
    "ProjectionSize": number;
    "Rotation": number;
    "FlipHorizontal": boolean;
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvProjectedTexture(ptr_or_class: string|AnySDKClass): CEnvProjectedTexture;