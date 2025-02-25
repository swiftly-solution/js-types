interface FeSimdRodConstraintAnim_t {
    "4Weight0": number;
    "4RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdRodConstraintAnim_t(ptr_or_class: string|AnySDKClass): FeSimdRodConstraintAnim_t;