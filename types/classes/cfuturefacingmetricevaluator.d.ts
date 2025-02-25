interface CFutureFacingMetricEvaluator {
    "Distance": number;
    "Time": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFutureFacingMetricEvaluator(ptr_or_class: string|AnySDKClass): CFutureFacingMetricEvaluator;