interface FeSimdRodConstraint_t {
    "4MaxDist": number;
    "4MinDist": number;
    "4Weight0": number;
    "4RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdRodConstraint_t(ptr_or_class: string|AnySDKClass): FeSimdRodConstraint_t;