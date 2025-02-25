interface FeNodeWindBase_t {
    "NodeX0": number;
    "NodeX1": number;
    "NodeY0": number;
    "NodeY1": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeNodeWindBase_t(ptr_or_class: string|AnySDKClass): FeNodeWindBase_t;