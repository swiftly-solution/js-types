interface CProjectedTextureBase {
    readonly "TargetEntity": any;
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
    "VolumetricIntensity": number;
    "NoiseStrength": number;
    "FlashlightTime": number;
    "NumPlanes": number;
    "PlaneOffset": number;
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
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CProjectedTextureBase(ptr_or_class: string|AnySDKClass): CProjectedTextureBase;