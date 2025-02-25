interface VPhysXRange_t {
    "Min": number;
    "Max": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXRange_t(ptr_or_class: string|AnySDKClass): VPhysXRange_t;