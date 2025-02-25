interface RnTriangle_t {
    "Index": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnTriangle_t(ptr_or_class: string|AnySDKClass): RnTriangle_t;