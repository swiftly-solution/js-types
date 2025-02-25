interface FeFitWeight_t {
    "Weight": number;
    "Node": number;
    "Dummy": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeFitWeight_t(ptr_or_class: string|AnySDKClass): FeFitWeight_t;