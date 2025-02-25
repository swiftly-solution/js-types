interface FeNodeBase_t {
    "Node": number;
    "Dummy": Object;
    "NodeX0": number;
    "NodeX1": number;
    "NodeY0": number;
    "NodeY1": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeNodeBase_t(ptr_or_class: string|AnySDKClass): FeNodeBase_t;