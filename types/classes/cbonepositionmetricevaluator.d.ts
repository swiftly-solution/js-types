interface CBonePositionMetricEvaluator {
    "BoneIndex": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBonePositionMetricEvaluator(ptr_or_class: string|AnySDKClass): CBonePositionMetricEvaluator;