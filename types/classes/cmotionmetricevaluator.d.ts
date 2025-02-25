interface CMotionMetricEvaluator {
    readonly "Means": Object;
    readonly "StandardDeviations": Object;
    "Weight": number;
    "DimensionStartIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionMetricEvaluator(ptr_or_class: string|AnySDKClass): CMotionMetricEvaluator;