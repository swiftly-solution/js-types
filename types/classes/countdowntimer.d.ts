interface CountdownTimer {
    "Duration": number;
    "Timestamp": number;
    "Timescale": number;
    "WorldGroupId": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CountdownTimer(ptr_or_class: string|AnySDKClass): CountdownTimer;