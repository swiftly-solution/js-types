interface FeAxialEdgeBend_t {
    "Te": number;
    "Tv": number;
    "Dist": number;
    "Weight": Object;
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeAxialEdgeBend_t(ptr_or_class: string|AnySDKClass): FeAxialEdgeBend_t;