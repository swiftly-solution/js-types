interface FeTwistConstraint_t {
    "NodeOrient": number;
    "NodeEnd": number;
    "TwistRelax": number;
    "SwingRelax": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTwistConstraint_t(ptr_or_class: string|AnySDKClass): FeTwistConstraint_t;