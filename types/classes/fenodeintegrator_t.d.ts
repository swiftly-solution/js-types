interface FeNodeIntegrator_t {
    "PointDamping": number;
    "AnimationForceAttraction": number;
    "AnimationVertexAttraction": number;
    "Gravity": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeNodeIntegrator_t(ptr_or_class: string|AnySDKClass): FeNodeIntegrator_t;