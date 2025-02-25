interface RnFace_t {
    "Edge": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnFace_t(ptr_or_class: string|AnySDKClass): RnFace_t;