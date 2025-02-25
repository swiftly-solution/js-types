interface RnVertex_t {
    "Edge": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnVertex_t(ptr_or_class: string|AnySDKClass): RnVertex_t;