interface FeTreeChildren_t {
    "Child": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTreeChildren_t(ptr_or_class: string|AnySDKClass): FeTreeChildren_t;