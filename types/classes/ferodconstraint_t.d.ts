interface FeRodConstraint_t {
    "Node": Object;
    "MaxDist": number;
    "MinDist": number;
    "Weight0": number;
    "RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeRodConstraint_t(ptr_or_class: string|AnySDKClass): FeRodConstraint_t;