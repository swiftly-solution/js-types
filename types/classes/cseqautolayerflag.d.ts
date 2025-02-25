interface CSeqAutoLayerFlag {
    "Post": boolean;
    "Spline": boolean;
    "XFade": boolean;
    "NoBlend": boolean;
    "Local": boolean;
    "Pose": boolean;
    "FetchFrame": boolean;
    "Subtract": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqAutoLayerFlag(ptr_or_class: string|AnySDKClass): CSeqAutoLayerFlag;