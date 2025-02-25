interface CDistanceRemainingMetricEvaluator {
    "MaxDistance": number;
    "MinDistance": number;
    "StartGoalFilterDistance": number;
    "MaxGoalOvershootScale": number;
    "FilterFixedMinDistance": boolean;
    "FilterGoalDistance": boolean;
    "FilterGoalOvershoot": boolean;
    readonly "Parent": CMotionMetricEvaluator;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDistanceRemainingMetricEvaluator(ptr_or_class: string|AnySDKClass): CDistanceRemainingMetricEvaluator;