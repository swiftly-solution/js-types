interface SoundOpvarTraceResult_t {
    "Pos": Vector;
    "DidHit": boolean;
    "DistSqrToCenter": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SoundOpvarTraceResult_t(ptr_or_class: string|AnySDKClass): SoundOpvarTraceResult_t;