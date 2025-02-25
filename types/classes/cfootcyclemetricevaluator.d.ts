interface CFootCycleMetricEvaluator {
    readonly "FootIndices": Object;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootCycleMetricEvaluator(ptr_or_class: string|AnySDKClass): CFootCycleMetricEvaluator;