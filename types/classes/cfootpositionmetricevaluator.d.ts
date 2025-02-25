interface CFootPositionMetricEvaluator {
    readonly "FootIndices": Object;
    "IgnoreSlope": boolean;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootPositionMetricEvaluator(ptr_or_class: string|AnySDKClass): CFootPositionMetricEvaluator;