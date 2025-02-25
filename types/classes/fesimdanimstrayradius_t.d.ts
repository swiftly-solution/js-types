interface FeSimdAnimStrayRadius_t {
    "MaxDist": number;
    "RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdAnimStrayRadius_t(ptr_or_class: string|AnySDKClass): FeSimdAnimStrayRadius_t;