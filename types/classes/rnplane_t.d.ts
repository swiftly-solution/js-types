interface RnPlane_t {
    "Normal": Vector;
    "Offset": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnPlane_t(ptr_or_class: string|AnySDKClass): RnPlane_t;