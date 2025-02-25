interface CBaseTrailRenderer {
    "OrientationType": number;
    "OrientationControlPoint": number;
    "MinSize": number;
    "MaxSize": number;
    readonly "StartFadeSize": CParticleCollectionRendererFloatInput;
    readonly "EndFadeSize": CParticleCollectionRendererFloatInput;
    "ClampV": boolean;
    readonly "Parent": CBaseRendererSource2;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseTrailRenderer(ptr_or_class: string|AnySDKClass): CBaseTrailRenderer;