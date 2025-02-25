interface CBoneVelocityMetricEvaluator {
    "BoneIndex": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBoneVelocityMetricEvaluator(ptr_or_class: string|AnySDKClass): CBoneVelocityMetricEvaluator;