interface CDecalInfo {
    "AnimationScale": number;
    "AnimationLifeSpan": number;
    "PlaceTime": number;
    "FadeStartTime": number;
    "FadeDuration": number;
    "VBSlot": number;
    "BoneIndex": number;
    "Position": Vector;
    "BoundingRadiusSqr": number;
    readonly "Next": CDecalInfo;
    readonly "Prev": CDecalInfo;
    "DecalMaterialIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDecalInfo(ptr_or_class: string|AnySDKClass): CDecalInfo;