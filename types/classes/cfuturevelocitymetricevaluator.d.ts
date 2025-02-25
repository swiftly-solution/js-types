interface CFutureVelocityMetricEvaluator {
    "Distance": number;
    "StoppingDistance": number;
    "TargetSpeed": number;
    "Mode": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFutureVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CFutureVelocityMetricEvaluator;