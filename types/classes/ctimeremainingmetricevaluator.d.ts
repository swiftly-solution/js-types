interface CTimeRemainingMetricEvaluator {
    "MatchByTimeRemaining": boolean;
    "MaxTimeRemaining": number;
    "FilterByTimeRemaining": boolean;
    "MinTimeRemaining": number;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTimeRemainingMetricEvaluator(ptr_or_class: string|AnySDKClass): CTimeRemainingMetricEvaluator;