interface FeHingeLimit_t {
    "Node": Object;
    "Flags": number;
    "Weight4": number;
    "Weight5": number;
    "AngleCenter": number;
    "AngleExtents": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeHingeLimit_t(ptr_or_class: string|AnySDKClass): FeHingeLimit_t;