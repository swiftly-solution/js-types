interface CAnimDemoCaptureSettings {
    "ErrorRangeSplineRotation": Vector2D;
    "ErrorRangeSplineTranslation": Vector2D;
    "ErrorRangeSplineScale": Vector2D;
    "IkRotation_MaxSplineError": number;
    "IkTranslation_MaxSplineError": number;
    "ErrorRangeQuantizationRotation": Vector2D;
    "ErrorRangeQuantizationTranslation": Vector2D;
    "ErrorRangeQuantizationScale": Vector2D;
    "IkRotation_MaxQuantizationError": number;
    "IkTranslation_MaxQuantizationError": number;
    "BaseSequence": string;
    "BaseSequenceFrame": number;
    "BoneSelectionMode": number;
    readonly "Bones": Object;
    readonly "IkChains": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDemoCaptureSettings(ptr_or_class: string|AnySDKClass): CAnimDemoCaptureSettings;