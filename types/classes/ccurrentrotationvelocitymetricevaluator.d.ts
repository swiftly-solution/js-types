interface CCurrentRotationVelocityMetricEvaluator {
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCurrentRotationVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CCurrentRotationVelocityMetricEvaluator;