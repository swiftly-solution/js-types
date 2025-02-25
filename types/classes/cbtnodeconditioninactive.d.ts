interface CBtNodeConditionInactive {
    "RoundStartThresholdSeconds": number;
    "SensorInactivityThresholdSeconds": number;
    readonly "SensorInactivityTimer": CountdownTimer;
    readonly "Parent": CBtNodeCondition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBtNodeConditionInactive(ptr_or_class: string|AnySDKClass): CBtNodeConditionInactive;