interface CPathMetricEvaluator {
    readonly "PathTimeSamples": Object;
    "Distance": number;
    "ExtrapolateMovement": boolean;
    "MinExtrapolationSpeed": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathMetricEvaluator(ptr_or_class: string|AnySDKClass): CPathMetricEvaluator;