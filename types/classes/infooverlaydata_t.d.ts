interface InfoOverlayData_t {
    "Width": number;
    "Height": number;
    "Depth": number;
    "UVStart": Vector2D;
    "UVEnd": Vector2D;
    "RenderOrder": number;
    "TintColor": Vector4D;
    "SequenceOverride": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function InfoOverlayData_t(ptr_or_class: string|AnySDKClass): InfoOverlayData_t;