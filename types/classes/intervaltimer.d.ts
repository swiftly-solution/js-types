interface IntervalTimer {
    "Timestamp": number;
    "WorldGroupId": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IntervalTimer(ptr_or_class: string|AnySDKClass): IntervalTimer;