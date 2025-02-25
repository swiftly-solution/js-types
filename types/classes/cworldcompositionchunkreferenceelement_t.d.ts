interface CWorldCompositionChunkReferenceElement_t {
    "StrMapToLoad": string;
    "StrLandmarkName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWorldCompositionChunkReferenceElement_t(ptr_or_class: string|AnySDKClass): CWorldCompositionChunkReferenceElement_t;