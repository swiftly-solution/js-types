interface CAnimSequenceParams {
    "FadeInTime": number;
    "FadeOutTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimSequenceParams(ptr_or_class: string|AnySDKClass): CAnimSequenceParams;