interface CAnimFrameSegment {
    "UniqueFrameIndex": number;
    "LocalElementMasks": number;
    "LocalChannel": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimFrameSegment(ptr_or_class: string|AnySDKClass): CAnimFrameSegment;