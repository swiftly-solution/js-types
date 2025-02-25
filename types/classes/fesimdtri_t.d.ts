interface FeSimdTri_t {
    "W1": number;
    "W2": number;
    "1x": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdTri_t(ptr_or_class: string|AnySDKClass): FeSimdTri_t;