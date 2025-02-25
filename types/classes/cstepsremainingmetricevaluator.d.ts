interface CStepsRemainingMetricEvaluator {
    readonly "FootIndices": Object;
    "MinStepsRemaining": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStepsRemainingMetricEvaluator(ptr_or_class: string|AnySDKClass): CStepsRemainingMetricEvaluator;