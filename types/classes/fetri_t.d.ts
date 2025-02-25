interface FeTri_t {
    "2": Vector2D;
    "Node": Object;
    "W1": number;
    "W2": number;
    "1x": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTri_t(ptr_or_class: string|AnySDKClass): FeTri_t;