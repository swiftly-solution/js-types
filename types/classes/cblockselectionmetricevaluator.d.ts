interface CBlockSelectionMetricEvaluator {
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlockSelectionMetricEvaluator(ptr_or_class: string|AnySDKClass): CBlockSelectionMetricEvaluator;