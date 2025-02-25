interface EngineCountdownTimer {
    "Duration": number;
    "Timestamp": number;
    "Timescale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EngineCountdownTimer(ptr_or_class: string|AnySDKClass): EngineCountdownTimer;