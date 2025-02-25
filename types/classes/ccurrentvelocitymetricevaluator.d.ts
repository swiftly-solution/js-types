interface CCurrentVelocityMetricEvaluator {
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCurrentVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CCurrentVelocityMetricEvaluator;